/// <reference path="../react/react.d.ts" />

declare module __ReactMiniRouter {

    import React = __React;

    export class RouterMixin implements React.Mixin<any, any>  {

        static propTypes: React.ValidationMap<any>;
        static contextTypes: React.ValidationMap<any>;
        static childContextTypes: React.ValidationMap<any>;
        
        getChildContext: () => any;

        onPopState: () => void;

        renderCurrentRoute: () => JSX.Element;

        handleClick: (evt: Event) => void;

        matchRoute: (path: string) => boolean;

        componentWillMount: () => void;
        componentDidMount: () => void;
        componentWillUnmount: () => void;

        static getChildContext: () => any;
        static getDefaultProps: () => any;
        static getInitialState: () => any;

        static componentWillMount: () => void;
        static componentDidMount: () => void;
        static componentWillUnmount: () => void;

        static onPopState: () => void;
        static renderCurrentRoute: () => JSX.Element;
        static handleClick: (evt: Event) => void;
        static matchRoute: (path: string) => boolean;
    }

    export function navigate(path: string, noStateChange?: boolean);
}

declare module "react-mini-router" {
    import RouterMixin = __ReactMiniRouter.RouterMixin;
    import navigate = __ReactMiniRouter.navigate;
    export {
        RouterMixin,
        navigate
    };
}
