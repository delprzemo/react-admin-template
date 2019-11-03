import { Route, Redirect, RouteProps } from "react-router";
import React from "react";
import { useSelector } from "react-redux";
import { IStateType } from "../../store/models/root.interfaces";
import { IAccount } from "../../store/models/account.interface";
import Login from "../../components/Account/Login";


export function AccountRoute({ children, ...rest }: RouteProps): JSX.Element {

    const account: IAccount = useSelector((state: IStateType) => state.account);

    return (
        <Route
            {...rest}
            render={() =>
                account.email ? (
                    <Redirect
                        to={{
                            pathname: "/admin/home"
                        }}
                    />
                ) : <Login />
            }
        />
    );
}