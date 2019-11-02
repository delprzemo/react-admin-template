import React, { Fragment, Dispatch } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCurrentPath } from "../../store/actions/root.actions";
import { IOrder } from "../../store/models/order.interfaces";
import OrderList from "./OrderList";
import TopCard from "../../common/elements/TopCard";
import OrderForm from "./OrderForm";
import ProductList from "../products/ProductsList";
import { IProduct } from "../../store/models/product.interface";
import { changeSelectedProduct, clearSelectedProduct } from "../../store/actions/products.action";
import { IStateType } from "../../store/models/root.interfaces";

const Orders: React.FC = () => {
    const dispatch: Dispatch<any> = useDispatch();
    const orders: IOrder[] = useSelector((state: IStateType) => state.orders.orders);
    const totalSales: number = orders.reduce((prev, next) => prev + next.totalPrice, 0);
    const totalAmount: number = orders.reduce((prev, next) => prev + next.amount, 0);
    dispatch(updateCurrentPath("orders", "list"));
    dispatch(clearSelectedProduct());

    function selectProduct(product: IProduct): void {
        dispatch(changeSelectedProduct(product));
    }

    return (
        <Fragment>
            <h1 className="h3 mb-2 text-gray-800">Users</h1>
            <p className="mb-4">Users here</p>

            <div className="row">
                <TopCard title="TOTAL SALES" text={totalSales.toString()} icon="donate" class="primary" />
                <TopCard title="TOTAL AMOUNT" text={totalAmount.toString()} icon="calculator" class="danger" />
            </div>

            <div className="row">
                <div className="col-xl-12 col-lg-12">

                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Order List</h6>
                            <div className="header-buttons">
                            </div>
                        </div>
                        <div className="card-body">

                            <OrderList />
                        </div>
                    </div>
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