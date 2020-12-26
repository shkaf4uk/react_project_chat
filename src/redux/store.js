// import profileReducer from "./profile_reducer";
// import dialogReducer from "./dialogs_reducer";
// import sidebarReducer from "./sidebar_reducer";
//
// let store = {
//     _state: {
//         profilePage: {
//             posts:[
//                 {id: 1, massage: 'Hi, how are you?', likesCount: 5},
//                 {id: 2, massage: "It's my first post", likesCount: 20},
//             ],
//             newPostText: '',
//         },
//         dialogPage: {
//             dialogs:[
//                 {id: 1, name: 'Mike'},
//                 {id: 2, name: 'Andrey'},
//                 {id: 3, name: 'Nasty'},
//                 {id: 4, name: 'Max'},
//                 {id: 5, name: 'Alla'},
//                 {id: 6, name: 'Nikolai'},
//             ],
//             massages:[
//                 {id: 1, massage: 'Hi'},
//                 {id: 2, massage: 'Hello'},
//                 {id: 3, massage: 'Старт!'},
//                 {id: 4, massage: 'Yo'},
//                 {id: 5, massage: 'Yo'},
//                 {id: 6, massage: 'Yo'},
//             ],
//             newMessage: '',
//         },
//         sidebar: {}
//     },
//     _callSubscriber() {
//         console.log('State was change');
//     },
//     getState() {
//         return this._state
//     },
//     subscribe (observer) {
//         this._callSubscriber = observer;
//     },
//
//     dispatch(action){
//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.dialogPage = dialogReducer(this._state.dialogPage, action);
//         this._state.sidebar = sidebarReducer(this._state.sidebar, action);
//
//         this._callSubscriber(this._state);
//     },
// }
//
// export default store;
// window.store = store;
// // store - OOP