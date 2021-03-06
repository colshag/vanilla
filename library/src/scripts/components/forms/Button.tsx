/**
 * @author Stéphane LaFlèche <stephane.l@vanillaforums.com>
 * @copyright 2009-2018 Vanilla Forums Inc.
 * @license GPL-2.0-only
 */

import React from "react";
import classNames from "classnames";
import { getOptionalID, IOptionalComponentID } from "../../componentIDs";

interface IProps extends IOptionalComponentID {
    children: React.ReactNode;
    className?: string;
    type?: string;
    disabled?: boolean;
    prefix?: string;
    legacyMode?: boolean;
    onClick?: () => void;
    title?: string;
    ariaLabel?: string;
    baseClass?: ButtonBaseClass;
}

interface IState {
    id?: string;
}

export enum ButtonBaseClass {
    STANDARD = "button",
    ICON = "buttonIcon",
    CUSTOM = "",
}

/**
 * A stylable, configurable button component.
 */
export default class Button extends React.Component<IProps, IState> {
    public static defaultProps = {
        id: false,
        disabled: false,
        type: "button",
        prefix: "button",
        legacyMode: false,
        baseClass: ButtonBaseClass.STANDARD,
    };

    constructor(props) {
        super(props);
        this.state = {
            id: getOptionalID(props, props.prefix) as string | undefined,
        };
    }

    public render() {
        const componentClasses = classNames(
            this.props.baseClass,
            { Button: this.props.legacyMode },
            this.props.className,
        );

        return (
            <button
                id={this.state.id}
                disabled={this.props.disabled}
                type={this.props.type}
                className={componentClasses}
                onClick={this.props.onClick}
                title={this.props.title}
                aria-label={this.props.ariaLabel || this.props.title}
            >
                {this.props.children}
            </button>
        );
    }
}
