const SEND_MESSAGE = 'SEND-MESSAGE';

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
}

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return  {
                ...state,
                massages: [...state.massages, {id: 5, massage: action.newMessage, likesCount: 0}],
            };
        default:
            return state;
    }
}

export const addMassageActionCreator = (newMessage) => ({type: 'SEND-MESSAGE', newMessage} );
export default dialogReducer;