import * as cn from "classnames";
import { Field } from "formik";
import * as React from "react";
import "./FormInput.scss";

interface Props {
    className?: string;
    label?: string;
    htmlFor?: string;
    error?: string;
    id?: string;
    name?: string;
    placeholder?: string;
    type?: string;
    disabled?: boolean;
    value?: string | number;
    maxLength?: number;
    max?: string;
    min?: number;
}

export const FormInput = ({ className, label, htmlFor, error, ...props }: Props) => (
    <div className={cn("formInput", className)}>
        <label className="formInput__label" htmlFor={htmlFor}>
            {label}
        </label>
        <div className="formInput__inputContainer">
            <Field
                className={cn("formInput__field", {
                    formInput__field_error: error,
                })}
                {...props}
            />
        </div>
        <div className="formInput__error">{error ? error : "\u00A0"}</div>
    </div>
);
