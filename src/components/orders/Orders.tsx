import React, { Fragment, Dispatch } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCurrentPath } from "../../store/actions/root.actions";
import { IOrder } from "../../store/models/order.interfaces";
import OrderList from "./OrderList";
import Card from "../../common/elements/Card";
import OrderForm from "./OrderForm";
import ProductList from "../products/ProductsList";
import { IProduct } from "../../store/models/product.interface";

const Orders: React.FC = () => {
    const dispatch: Dispatch<any> = useDispatch();
    dispatch(updateCurrentPath("orders", "list"));

    function selectProduct(product: IProduct) {
        console.log(product);
    }

    return (
        <Fragment>
            <h1 className="h3 mb-2 text-gray-800">Users</h1>
            <p className="mb-4">Users here</p>

            <div className="row">
                <Card title="ADMINS" text={'some value'} icon="calendar" class="primary" />
                <Card title="USER" text={'some value'} icon="pen" class="danger" />
            </div>

            <div className="row">
                <div className="col-xl-12 col-lg-12">
                    <OrderList />
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <OrderForm />
                </div>
                <div className="col-md-6">
                    
                    <div className="card card-bottom-list shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Product list</h6>
                        </div>
                        <ProductList
                            onSelect={selectProduct}
                        />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Orders;