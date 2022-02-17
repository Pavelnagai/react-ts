import React from 'react';
import s from "./Profileinfo.module.css"
import Preloader from "../../../common/Preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus";

type ProfileInfoProps = {
    profile: any
    status: string
    updateStatus: (status: string) => void
}
const ProfileInfo = (props: ProfileInfoProps) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={s.content}>
            <div className={s.decription}>
                <img src={props.profile.photos.large}/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                <div>{props.profile.contacts.vk}</div>
                <div>{props.profile.fullName}</div>
                <div>{props.profile.aboutMe}</div>
            </div>
        </div>
    )

}
export default ProfileInfo
