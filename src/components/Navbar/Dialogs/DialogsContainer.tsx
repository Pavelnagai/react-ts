import React, {ComponentType} from "react";
import {InitialStateDialogType, sendMessageCreate, updateMessageTextAC} from "../../../redux/dialog-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/store-redux";
import {compose} from "redux";
import {WithAuthRedirect} from "../../common/hoc/WIthAuthRedirect";

type MapStateType = {
    dialogPage: InitialStateDialogType,
    isAuth: any
}
type MapDispatchType = {
    updateMessageText: (body: string) => void,
    sendMessageCreate: () => void
}
export type DialogType = MapStateType & MapDispatchType
let mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        dialogPage: state.dialogPage,
        isAuth: state.auth.isAuth,
    }
}

export default compose<ComponentType>(
    connect(mapStateToProps, {updateMessageTextAC, sendMessageCreate}),
    WithAuthRedirect
)(Dialogs)