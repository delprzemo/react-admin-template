import React, { useState, FormEvent, Fragment } from "react";
import { IProduct } from "../../store/models/product.interface";
import TextInput from "../../common/elements/TextInput";
import NumberInput from "../../common/elements/NumberInput";
import { OnChangeModel } from "../../common/models/Form.models";

const OrderForm: React.FC = () => {

    const initialFormState = {
        name: { error: "", value: "" },
        product: { error: "", value: null },
        amount: { error: "", value: 0 },
        totalPrice: { error: "", value: 0 },
    };

    type FormStateField = { error: string, value: string | number | boolean | IProduct };

    const [formState, setFormState] = useState(initialFormState);

    function hasFormValueChanged(model: OnChangeModel): void {
        setFormState({ ...formState, [model.field]: { error: model.error, value: model.value } });
    }

    function resetForm(): void {
        setFormState(initialFormState);
    }

    function saveOrder(e: FormEvent<HTMLFormElement>): void {
        e.preventDefault();
        if (getDisabledClass()) {
            return;
        }

        console.log(formState);
        //saveForm(formState, saveUserFn);
    }


    function getDisabledClass(): string {
        let isError = (formState.amount.error || formState.totalPrice.error
            || formState.name.error || formState.product.error || !formState.name.value
            || !formState.product.value);

        return isError ? "disabled" : "";
    }

    return (
        <Fragment>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Create order</h6>
                </div>
                <div className="card-body">
                    <form onSubmit={saveOrder}>
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <TextInput id="input_name"
                                    value={formState.name.value}
                                    field="name"
                                    onChange={hasFormValueChanged}
                                    required={true}
                                    maxLength={20}
                                    label="Name"
                                    placeholder="Name" />
                            </div>
                            <div className="form-group col-md-6">
                                <NumberInput id="input_amount"
                                    value={formState.amount.value}
                                    field="amount"
                                    onChange={hasFormValueChanged}
                                    max={1000}
                                    min={0}
                                    label="Amount" />
                            </div>

                            <div className="form-group col-md-6">
                                <NumberInput id="input_totalprice"
                                    value={formState.totalPrice.value}
                                    field="totalPrice"
                                    onChange={hasFormValueChanged}
                                    max={1000}
                                    min={0}
                                    label="Price" />
                            </div>
                        </div>
                        <button className="btn btn-danger" onClick={() => resetForm()}>Reset</button>
                        <button type="submit" className={`btn btn-primary left-margin ${getDisabledClass()}`}>Save</button>
                    </form>
                </div>
            </div>
        </Fragment>
    );
};

export default OrderForm;
