import React, {ChangeEvent, useEffect, useState} from "react";

type ProfileStatusPropsType = {
    status: string,
    updateStatus: (status: string) => void
    owner: boolean
}

export const ProfileStatus = (props: ProfileStatusPropsType) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

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
            {props.owner && !editMode &&
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