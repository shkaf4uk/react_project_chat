let rerenderEntriesTree = () => {
    console.log('State was change');
}

let state = {
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
}

window.state = state;

export let addPost = () => {
    let newPost = {
        id: 5,
        massage: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntriesTree(state);
}

export let updateNewPostText = (newPost) => {
    state.profilePage.newPostText = newPost;
    rerenderEntriesTree(state);
}

export let sendMessage = () => {
    let newMessage = {
        id: 5,
        massage: state.dialogPage.newMessage,
        likesCount: 0
    };
    state.dialogPage.massages.push(newMessage);
    state.dialogPage.newMessage = '';
    rerenderEntriesTree(state);
}

export let updateNewMessageText = (newMess) => {
    state.dialogPage.newMessage = newMess;
    rerenderEntriesTree(state);
}

export const subscribe = (observer) => {
    rerenderEntriesTree = observer;
}

export default state;

// store - OOP