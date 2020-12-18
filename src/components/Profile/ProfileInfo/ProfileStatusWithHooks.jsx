import React, {useState} from "react";

const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    const activatedEditMode = () => {
        setEditMode(true);
    }

    const deActivatedEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return <>
        {!editMode &&
            <div>
            <span onDoubleClick={activatedEditMode}><b>Status:</b> {props.status ? props.status : '-----'}</span>
            </div>}
        {editMode &&
        <div>
            <input onChange={onStatusChange} autoFocus={true}
                   onBlur={deActivatedEditMode} value={status}/>
        </div>}
    </>
}

export default ProfileStatusWithHooks