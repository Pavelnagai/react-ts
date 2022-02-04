import React from "react";

export class ProfileStatus extends React.Component<any, any> {
    state = {
        editMode: false
    }

    activateEditeMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditeMode = () => {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div>{
                !this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditeMode}>{this.props.status}</span>
                </div>
            }
                {

                    this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.deactivateEditeMode} value={this.props.status}
                               type="text"/>
                    </div>
                }


            </div>

        )

    }
}