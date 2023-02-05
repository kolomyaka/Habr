// Record - предназначен для динамического определения полей в объектном типе.
// Данный тип определяет два параметра типа.
// В качестве первого параметра ожидается множество ключей представленных множеством
// string или Literal String - Record<"a", T> или Record<"a" | "b", T>. В качестве второго
// параметра ожидается конкретный тип данных, который будет ассоциирован с каждым ключом.

type Mods = Record<string, boolean | string>

export function classNames(cls: string, mods: Mods = {}, additional: string[] = []): string {

    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([className, value]) => Boolean(value))
            .map(([className]) => className)
    ].join(' ')
}

