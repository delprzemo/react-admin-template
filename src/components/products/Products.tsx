import React, { Fragment, Dispatch, useState, useEffect } from "react";
import ProductList from "./ProductsList";
import ProductForm from "./ProductsForm";
import Card from "../../common/elements/Card";
import "./Products.css";
import { useDispatch, useSelector } from "react-redux";
import { updateCurrentPath } from "../../store/actions/root.actions";
import { IProductState, IStateType, IRootPageStateType } from "../../store/models/root.interfaces";
import Popup from "reactjs-popup";
import { removeProduct, clearSelectedProduct, setModificationState,
  changeSelectedProduct } from "../../store/actions/products.action";
import { addNotification } from "../../store/actions/notifications.action";
import { ProductModificationStatus, IProduct } from "../../store/models/product.interface";

const Products: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch();

  const products: IProductState = useSelector((state: IStateType) => state.products);
  const path: IRootPageStateType = useSelector((state: IStateType) => state.root.page);
  const numberItemsCount: number = products.products.length;
  const totalPrice: number = products.products.reduce((prev, next) => prev + ((next.price * next.amount) || 0), 0);
  const totalAmount: number = products.products.reduce((prev, next) => prev + (next.amount || 0), 0);
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    dispatch(updateCurrentPath("products", "list"));
    dispatch(clearSelectedProduct());
  }, [path.area]);


  function onProductSelect(product: IProduct): void {
    dispatch(changeSelectedProduct(product));
    dispatch(setModificationState(ProductModificationStatus.None));
  }

  return (
    <Fragment>
      <h1 className="h3 mb-2 text-gray-800">Products</h1>
      <p className="mb-4">Products here</p>

      <div className="row">
        <Card title="PRODUCT COUNT" text={`${numberItemsCount}`} icon="box" class="primary" />
        <Card title="PRODUCT AMOUNT" text={`${totalAmount}`} icon="warehouse" class="danger" />
        <Card title="SUMMARY PRICE" text={`$${totalPrice}`} icon="dollar-sign" class="success" />
      </div>

      <div className="row">
        <div className="col-xl-12 col-lg-12">
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">Product List</h6>
              <div className="header-buttons">
                <button className="btn btn-success btn-green" onClick={() =>
                  dispatch(setModificationState(ProductModificationStatus.Create))}>
                  <i className="fas fa fa-plus"></i>
                </button>
                <button className="btn btn-success btn-blue" onClick={() =>
                  dispatch(setModificationState(ProductModificationStatus.Edit))}>
                  <i className="fas fa fa-pen"></i>
                </button>
                <button className="btn btn-success btn-red" onClick={() => setPopup(true)}>
                  <i className="fas fa fa-times"></i>
                </button>
              </div>
            </div>
            <div className="card-body">
              <ProductList
                onSelect={onProductSelect}
              />
            </div>
          </div>
        </div>
        {((products.modificationState === ProductModificationStatus.Create)
          || (products.modificationState === ProductModificationStatus.Edit && products.selectedProduct)) ?
          <ProductForm /> : null}
      </div>


      <Popup
        className="popup-modal"
        open={popup}
        onClose={() => setPopup(false)}
        closeOnDocumentClick
      >
        <div className="popup-modal">
          <div className="popup-title">
            Are you sure?
          </div>
          <div className="popup-content">
            <button type="button"
              className="btn btn-danger"
              onClick={() => {
                if (!products.selectedProduct) {
                  return;
                }
                dispatch(addNotification("Product removed", `Product ${products.selectedProduct.name} was removed`));
                dispatch(removeProduct(products.selectedProduct.id));
                dispatch(clearSelectedProduct());
                setPopup(false);
              }}>Remove
              </button>
          </div>
        </div>
      </Popup>
    </Fragment >
  );
};

export default Products;
