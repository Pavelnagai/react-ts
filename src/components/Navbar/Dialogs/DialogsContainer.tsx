import React, {ComponentType} from "react";
import {InitialStateDialogType, sendMessageCreate} from "../../../redux/dialog-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/store-redux";
import {compose} from "redux";
import {withAuthRedirect} from "../../common/hoc/WithAuthRedirect";

type MapStateType = {
    dialogPage: InitialStateDialogType,
    isAuth: any
}
type MapDispatchType = {
    sendMessageCreate: (newMessageBody: string) => void
}

export type DialogType = MapStateType & MapDispatchType
let mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        dialogPage: state.dialogPage,
        isAuth: state.auth.isAuth,
    }
}

export default compose<ComponentType>(
    connect(mapStateToProps, {sendMessageCreate}),
    withAuthRedirect
)(Dialogs)