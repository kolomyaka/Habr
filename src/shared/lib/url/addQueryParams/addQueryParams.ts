export function getQueryParams(params: OptionalRecord<string, string>) {
    const searchParams = new URLSearchParams(window.location.search);

    Object.entries(params).forEach(([name, value]) => {
        if (value) {
            searchParams.set(name, value);
        } else {
            searchParams.delete(name);
        }
    });

    return `?${searchParams.toString()}`;
}

export function addQueryParams(params: OptionalRecord<string, string>) {
    window.history.pushState(null, '', getQueryParams(params));
}
