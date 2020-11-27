let store = {
    _state: {
        profilePage: {
            posts:[
                {id: 1, massage: 'Hi, how are you?', likesCount: 5},
                {id: 2, massage: "It's my first post", likesCount: 20},
            ],
            newPostText: '',
        },
        dialogPage: {
            dialogs:[
                {id: 1, name: 'Mike'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Nasty'},
                {id: 4, name: 'Max'},
                {id: 5, name: 'Alla'},
                {id: 6, name: 'Nikolai'},
            ],
            massages:[
                {id: 1, massage: 'Hi'},
                {id: 2, massage: 'Hello'},
                {id: 3, massage: 'Старт!'},
                {id: 4, massage: 'Yo'},
                {id: 5, massage: 'Yo'},
                {id: 6, massage: 'Yo'},
            ],
            newMessage: '',
        },
    },
    _callSubscriber() {
        console.log('State was change');
    },

    getState() {
        return this._state
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },

    dispatch(action){
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                massage: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT'){
            this._state.profilePage.newPostText = action.newPost;
            this._callSubscriber(this._state);
        } else if (action.type === 'SEND-MESSAGE'){
            let newMessage = {
                id: 5,
                massage: this._state.dialogPage.newMessage,
                likesCount: 0
            };
            this._state.dialogPage.massages.push(newMessage);
            this._state.dialogPage.newMessage = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-MASSAGE-TEXT') {
            this._state.dialogPage.newMessage = action.newMess;
            this._callSubscriber(this._state);
        }
    }

}




export default store;
window.stote = store;
// store - OOP