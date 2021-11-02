import React from 'react';

const Like = (props: any) => {
    if (props.value === 1) {
        return (
            <div>
                <LikeView selected={true}/>
                <LikeView selected={false}/>
                <LikeView selected={false}/>
                <LikeView selected={false}/>
                <LikeView selected={false}/>
            </div>
        )

    }
    if (props.value === 2) {
        return (
            <div>
                <LikeView selected={true}/>
                <LikeView selected={true}/>
                <LikeView selected={false}/>
                <LikeView selected={false}/>
                <LikeView selected={false}/>
            </div>
        )

    }
    if (props.value === 3) {
        return (
            <div>
                <LikeView selected={true}/>
                <LikeView selected={true}/>
                <LikeView selected={true}/>
                <LikeView selected={false}/>
                <LikeView selected={false}/>
            </div>
        )

    }
    if (props.value === 4) {
        return (
            <div>
                <LikeView selected={true}/>
                <LikeView selected={true}/>
                <LikeView selected={true}/>
                <LikeView selected={true}/>
                <LikeView selected={false}/>
            </div>
        )

    }
    if (props.value === 5) {
        return (
            <div>
                <LikeView selected={true}/>
                <LikeView selected={true}/>
                <LikeView selected={true}/>
                <LikeView selected={true}/>
                <LikeView selected={true}/>
            </div>
        )
    } else {
        return (
            <div>
                <LikeView selected={true}/>
                <LikeView selected={true}/>
                <LikeView selected={true}/>
                <LikeView selected={true}/>
                <LikeView selected={true}/>
            </div>
        )
    }

}

const LikeView = (props: any) => {
    if (props.selected === true) {
        return <span><b>Like</b> </span>
    } else {
        return <span>Like </span>
    }
}
export default Like
