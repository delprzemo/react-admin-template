import React, {  } from "react";
import { useSelector } from "react-redux";
import { IOrder } from "../../store/models/order.interfaces";
import { IStateType } from "../../store/models/root.interfaces";

const OrderList: React.FC = () => {
    const orders: IOrder[] = useSelector((state: IStateType) => state.orders.orders);

    const orderList: JSX.Element[] = orders.map(order => {
        return (
            <tr className={`table-row`}
                key={`order_${order.id}`}>
                <th scope="row">{order.id}</th>
                <td>{order.name}</td>
                <td>{order.product.name}</td>
                <td>{order.amount}</td>
                <td>{order.totalPrice}</td>
            </tr>);
    })

    return (

        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Order List</h6>
                <div className="header-buttons">
                </div>
            </div>
            <div className="card-body">
                <div className="table-responsive portlet">

                    <table className="table">
                        <thead className="thead-light">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Product</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Total price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orderList}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default OrderList;