const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MASSAGE_TEXT = 'UPDATE-NEW-MASSAGE-TEXT';

const dialogReducer = (state, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 5,
                massage: state.newMessage,
                likesCount: 0
            };
            state.massages.push(newMessage);
            state.newMessage = '';
            return state;
        case UPDATE_NEW_MASSAGE_TEXT:
            state.newMessage = action.newMess;
            return state;
        default:
            return state;
    }
}

export const addMassageActionCreator = () => ({type:'SEND-MESSAGE'});
export const changeMassage = (text) => ({type:'UPDATE-NEW-MASSAGE-TEXT', newMess: text});
export default dialogReducer;