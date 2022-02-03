import React from 'react';
import s from "./Profileinfo.module.css"
import Preloader from "../../../common/Preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus";

type ProfileInfoProps = {
    profile: any
}
const ProfileInfo = (props: ProfileInfoProps) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={s.content}>
            <div className={s.avatar}>
                <img
                    src={'https://sun9-60.userapi.com/impg/yGONFffVpZ67ooAuvh9HaHshlK4-pIOjRtBRGA/-nwhVOuxA6g.jpg?size=1066x1600&quality=96&sign=1376f9a53cd4bfd30dc0040b1d037514&type=album'}/>
            </div>
            <div>
                <ProfileStatus status={'Hello Paul'}/>
            </div>
            <div>
                <img src={props.profile.photos.large}/>
                <div>status</div>
                <div>{props.profile.contacts.vk}</div>
                <div>{props.profile.fullName}</div>
                <div>{props.profile.aboutMe}</div>
            </div>
        </div>
    )

}
export default ProfileInfo
