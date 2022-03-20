import React, {ChangeEvent} from 'react';
import s from "./Profileinfo.module.css"
import Preloader from "../../../common/Preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus";
import image from "../../../../assect/images/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png";


type ProfileInfoProps = {
    profile: any
    status: string
    updateStatus: (status: string) => void
    savePhoto: any
    owner: boolean
}
const ProfileInfo = (props: ProfileInfoProps) => {
    if (!props.profile) {
        return <Preloader/>
    }
    const changeMainPhotos = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            props.savePhoto(e.target.files[0])
        }
    }
    return (
        <div className={s.content}>
            <div className={s.decription}>
                <img src={props.profile.photos.large || image} className={s.myPhoto}/>
                {props.owner && <input type="file" onChange={changeMainPhotos}/>}
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                <div>{props.profile.contacts.vk}</div>
                <div>{props.profile.fullName}</div>
                <div>{props.profile.aboutMe}</div>
            </div>
        </div>
    )

}
export default ProfileInfo
