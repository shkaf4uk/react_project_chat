import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    activatedEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deActivatedEditMode() {
        this.setState({
            editMode: false
        })
    }

    render() {
        return <>
            {!this.state.editMode &&
            <div>
                <span onDoubleClick={this.activatedEditMode.bind(this)}>{this.props.status}</span>
            </div>
            }
            {this.state.editMode &&
            <div>
                <input autoFocus={true} onBlur={this.deActivatedEditMode.bind(this)} value={this.props.status}/>
            </div>
            }
        </>
    }
}

export default ProfileStatus