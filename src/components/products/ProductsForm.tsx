import React, { useState, FormEvent, Dispatch, Fragment } from "react";
import { IProductState, IStateType } from "../../store/models/root.interfaces";
import { useSelector, useDispatch } from "react-redux";
import { IProduct } from "../../store/models/product.interface";
import TextInput, { OnChangeModel } from "../../common/elements/TextInput";
import { editProduct, clearProductPendingEdit } from "../../store/actions/products.action";
import { addNotification } from "../../store/actions/notifications.action";

const ProductForm: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const product: IProduct | null = useSelector((state: IStateType) => state.products.editProduct);
  const [formState, setFormState] = useState({
    name: { error: "", value: product ? product.name : "" },
    description: { error: "", value: product ? product.description : "" }
  });

  function onNameChange(model: OnChangeModel): void {
    setFormState({ ...formState, name: { error: model.error, value: model.value } });
  }

  function onDescriptionChange(model: OnChangeModel): void {
    setFormState({ ...formState, description: { error: model.error, value: model.value } });
  }

  function saveUser(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    if (product) {
      dispatch(editProduct({
        ...product,
        name: formState.name.value,
        description: formState.description.value
      }));

      dispatch(addNotification("Product edited", `Product ${formState.name.value} edited by you`))
      dispatch(clearProductPendingEdit());
      
    }
  }

  function cancelForm(): void {
    dispatch(clearProductPendingEdit());
  }

  return (
    <Fragment>
      <div className="col-xl-7 col-lg-7">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Product Edit</h6>
          </div>
          <div className="card-body">
            <form onSubmit={saveUser}>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <TextInput id="input_email"
                    value={formState.name.value}
                    onChange={onNameChange}
                    required={true}
                    maxLength={20}
                    label="Name"
                    placeholder="Name" />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputState">Category</label>
                  <select id="inputState" className="form-control">
                    <option>Choose...</option>
                    <option>...</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <TextInput id="input_description"
                  value={formState.description.value}
                  onChange={onDescriptionChange}
                  required={false}
                  maxLength={100}
                  label="Description"
                  placeholder="Description" />
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="inputAmount">Amount</label>
                  <input type="number" className="form-control" id="inputAmount" placeholder="0" value={product ? product.amount : 0} />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputPrice">Price</label>
                  <input type="number" className="form-control" id="inputPrice" placeholder="0" value={product ? product.price : 0} />
                </div>
              </div>
              <div className="form-group">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="gridCheck" />
                  <label className="form-check-label" htmlFor="gridCheck">
                    Has expiry date
                </label>
                </div>
              </div>
              <button className="btn btn-danger" onClick={() => cancelForm()}>Cancel</button>
              <button type="submit" className="btn btn-primary left-margin">Save</button>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductForm;
