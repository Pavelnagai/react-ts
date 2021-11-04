import React from "react";
import s from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div className={s.dialog + " " + s.active}>
                    Pavel
                </div>
                <div className={s.dialog}>
                    Andrei
                </div>
                <div className={s.dialog}>
                    David
                </div>
                <div className={s.dialog}>
                    Anna
                </div>
                <div className={s.dialog}>
                    Alina
                </div>
                <div className={s.dialog}>
                    Sergei
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hy</div>
                <div className={s.message}>Hello dad</div>
                <div className={s.message}>Year good</div>
            </div>
        </div>
    )
}
export default Dialogs