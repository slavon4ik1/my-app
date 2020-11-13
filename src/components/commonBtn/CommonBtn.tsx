import * as cn from "classnames";
import * as React from "react";
import "./CommonBtn.scss";

interface Props {
    className?: string;
    type: "button" | "reset" | "submit";
    color?: "empty" | "fullfieldRed" | "fullfieldPrimary" | "fullfieldSuccess";
    value: string;
    disabled?: boolean;
    onClick?: (props?: any) => void;
}

export const CommonBtn = ({ className, color, disabled, ...props }: Props) => (
    <input
        className={cn(className, "commonBtn", { [`commonBtn_${color}`]: color }, { commonBtn_disabled: disabled })}
        {...props}
    />
);
