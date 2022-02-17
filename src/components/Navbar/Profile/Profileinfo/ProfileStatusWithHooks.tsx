import React, {ChangeEvent, useState} from "react";

export const ProfileStatusWithHooks = (props: any) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    const activateEditeMode = () => {
        setEditMode(true)
    }

    const deactivateEditeMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {
                !editMode &&
                <div>
                    <span onDoubleClick={activateEditeMode}>{props.status || '------'}</span>
                </div>
            }
            {
                editMode &&
                <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditeMode}
                           value={status}/>
                </div>
            }
        </div>

    )
}