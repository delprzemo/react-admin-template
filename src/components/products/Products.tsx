import React, { Fragment, Dispatch } from "react";
import ProductList from "./ProductsList";
import ProductForm from "./ProductsForm";
import Card from "../../common/elements/card";
import "./Products.css";
import { useDispatch } from "react-redux";
import { updateCurrentPath } from "../../store/actions/root.actions";

const Products: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch();
  dispatch(updateCurrentPath("products", "list"));
  return (
    <Fragment>
      <h1 className="h3 mb-2 text-gray-800">Products</h1>
      <p className="mb-4">Products here</p>

      <div className="row">
        <Card title="EARNINGS (MONTHLY)" text="$40.000" icon="calendar" class="primary"/>
        <Card title="EARNINGS (MONTHLY)" text="$40.000" icon="store" class="success"/>
        <Card title="EARNINGS (MONTHLY)" text="$40.000" icon="pen" class="danger"/>
      </div>

      <div className="row">
        <div className="col-xl-12 col-lg-12">
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">Product List</h6>
              <div className="header-buttons">
                <button className="btn btn-success btn-green">
                  <i className="fas fa fa-plus"></i>
                </button>
                <button className="btn btn-success btn-blue">
                  <i className="fas fa fa-pen"></i>
                </button>
                <button className="btn btn-success btn-red">
                  <i className="fas fa fa-times"></i>
                </button>
              </div>
            </div>
            <div className="card-body">
              <ProductList />
            </div>
          </div>
        </div>
        <ProductForm />
      </div>
    </Fragment >
  );
};

export default Products;
