import React, {ComponentType, Suspense} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/store-redux";


export function WithSuspense<T>(Component: ComponentType<T>) {
    return (props: any) => {
        return <Suspense fallback={<div>Загрузка...</div>}>
            <Component {...props} />
        </Suspense>
    }
}