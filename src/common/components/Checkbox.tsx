import React, { useState, ChangeEvent } from "react";
import { CheckboxProps } from "../types/Checkbox.types";

function Checkbox(props: CheckboxProps): JSX.Element {
    const [touched, setTouch] = useState(false);
    const [error, setError] = useState("");
    const [htmlClass, setHtmlClass] = useState("");
    const [, setValue] = useState(false);


    function onValueChanged(event: ChangeEvent<HTMLInputElement>): void {
        let [error, validClass, elementValue] = ["", "", event.target.checked];

        [error, validClass] = (!elementValue && props.required) ?
            ["Value has to be checked", "is-invalid"] : ["", "is-valid"];


        props.onChange({ value: elementValue, error: error, touched: touched, field: props.field });

        setTouch(true);
        setError(error);
        setHtmlClass(validClass);
        setValue(elementValue);
    }

    return (
        <div className="form-check">
            <input
                className={`form-check-input ${props.inputClass ? props.inputClass : ""} ${htmlClass}`}
                type="checkbox"
                id={`id_${props.label}`}
                checked={props.value}
                onChange={onValueChanged} />
            <label className="form-check-label" htmlFor={props.id.toString()}>
                {props.label}
            </label>

            {error ?
                <div className="invalid-feedback">
                    {error}
                </div> : null
            }
        </div>
    );
}

export default Checkbox;