const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MASSAGE_TEXT = 'UPDATE-NEW-MASSAGE-TEXT';

let initialState = {
    dialogs: [
        {id: 1, name: 'Mike'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Nasty'},
        {id: 4, name: 'Max'},
        {id: 5, name: 'Alla'},
        {id: 6, name: 'Nikolai'},
    ],
    massages: [
        {id: 1, massage: 'Hi'},
        {id: 2, massage: 'Hello'},
        {id: 3, massage: 'Старт!'},
        {id: 4, massage: 'Yo'},
        {id: 5, massage: 'Yo'},
        {id: 6, massage: 'Yo'},
    ],
    newMessage: '',
}

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MASSAGE_TEXT:
            return  {
                ...state,
                newMessage: action.newMess
            };
        case SEND_MESSAGE:
            return  {
                ...state,
                massages: [...state.massages, {id: 5, massage: state.newMessage, likesCount: 0}],
                newMessage: '',
            };
        default:
            return state;
    }
}

export const addMassageActionCreator = () => ({type: 'SEND-MESSAGE'});
export const changeMassage = (text) => ({type: 'UPDATE-NEW-MASSAGE-TEXT', newMess: text});
export default dialogReducer;