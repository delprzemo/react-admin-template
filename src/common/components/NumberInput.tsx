import React, { useState, ChangeEvent } from "react";
import { NumberInputProps } from "../types/NumberInput.types";

function NumberInput(props: NumberInputProps): JSX.Element {
    const [touched, setTouch] = useState(false);
    const [error, setError] = useState("");
    const [htmlClass, setHtmlClass] = useState("");
    const [, setValue] = useState(0);


    function onValueChanged(event: ChangeEvent<HTMLInputElement>): void {
        let elementValue: number = (isNaN(Number(event.target.value))) ? 0 : Number(event.target.value);
        let [error, validClass] = ["", ""];

        if (!error) {
            [error, validClass] = ((props.max != null) && elementValue > (props.max)) ?
            [`Value can't be higher than ${props.max} `, "is-invalid"] : ["", "is-valid"];
        }

        if (!error) {
            [error, validClass] = ((props.min != null) && elementValue < (props.min)) ?
            [`Value can't be lower than ${props.min} `, "is-invalid"] : ["", "is-valid"];
        }

        props.onChange({ value: elementValue, error: error, touched: touched, field: props.field });

        setTouch(true);
        setError(error);
        setHtmlClass(validClass);
        setValue(elementValue);
    }

    return (
        <div>
            <label htmlFor={props.id.toString()}>{props.label}</label>
            <input
                value={props.value}
                type="number"
                onChange={onValueChanged}
                className={`form-control ${props.inputClass} ${htmlClass}`}
                id={`id_${props.label}`}/>
            {error ?
                <div className="invalid-feedback">
                    {error}
                </div> : null
            }
        </div>
    );
}

export default NumberInput;