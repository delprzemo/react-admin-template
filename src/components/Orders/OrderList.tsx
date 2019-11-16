import React, { } from "react";
import { useSelector } from "react-redux";
import { IOrder } from "../../store/models/order.interface";
import { IStateType } from "../../store/models/root.interface";

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
    )
}

export default OrderList;