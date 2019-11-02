export type CheckboxProps = {
    required?: boolean,
    onChange: Function,
    id: string,
    label: string,
    value: boolean,
    inputClass?: string,
    field: string
};

export type OnChangeCheckboxModel = {
    value: boolean,
    error: string,
    touched: boolean
};