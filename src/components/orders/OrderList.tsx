import React, { Fragment, Dispatch } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IOrder } from "../../store/models/order.interfaces";
import Card from "../../common/elements/Card";

const OrderList: React.FC = () => {
    const dispatch: Dispatch<any> = useDispatch();

    const orders: IOrder[] = [
        {
            id: 1,
            name: "Apple order",
            amount: 12,
            totalPrice: 100,
            product: {
                id: 2, name: "Apple", description: "This is Apple and it is healthy",
                amount: 5, price: 2, hasExpiryDate: true, category: "Fruit"
            },
        },
        {
            id: 2,
            name: "Straw order",
            amount: 7,
            totalPrice: 7,
            product: {
                id: 3, name: "Straw", description: "This is Straw and you can use it for your drink",
                amount: 100, price: 1, hasExpiryDate: false, category: "Kitchen"
            },
        }
    ]

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