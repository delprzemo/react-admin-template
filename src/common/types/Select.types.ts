export type SelectProps = {
    required?: boolean,
    onChange: Function,
    id: string,
    label: string,
    value: string,
    inputClass?: string,
    options: string[],
    field: string
};