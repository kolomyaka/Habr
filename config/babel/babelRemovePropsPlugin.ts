import { PluginItem } from '@babel/core';

export default function (): PluginItem {
    // Пишем плагин, который в прод сборке будет убирать атрибуты, которые мы зададим (Напр. data-testid)

    return {
        visitor: {
            Program(path, state) {
                const forbidden = state.opts.props || [];

                path.traverse({
                    JSXIdentifier(current) {
                        const nodeName = current.node.name;

                        if (forbidden.includes(nodeName)) {
                            current.parentPath.remove();
                        }
                    },
                });
            },
        },
    };
}
