let store = {
    _state: {
        profilePage: {
            posts:[
                {id: 1, massage: 'Hi, how are you?', likesCount: 5},
                {id: 2, massage: "It's my first post", likesCount: 20},
                {id: 2, massage: "TEST", likesCount: 2},
                {id: 2, massage: "TES2", likesCount: 24},
                {id: 3, likesCount: 1},
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
    addPost () {
        let newPost = {
            id: 5,
            massage: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newPost) {
        this._state.profilePage.newPostText = newPost;
        this._callSubscriber(this._state);
    },
    sendMessage() {
        let newMessage = {
            id: 5,
            massage: this._state.dialogPage.newMessage,
            likesCount: 0
        };
        this._state.dialogPage.massages.push(newMessage);
        this._state.dialogPage.newMessage = '';
        this._callSubscriber(this._state);
    },
    updateNewMessageText (newMess) {
        this._state.dialogPage.newMessage = newMess;
        this._callSubscriber(this._state);
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },
}




export default store;
window.stote = store;
// store - OOP