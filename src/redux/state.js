let state = {
    profilePage: {
        posts:[
            {id: 1, massage: 'Hi, how are you?', likesCount: 5},
            {id: 2, massage: "It's my first post", likesCount: 20},
            {id: 2, massage: "TEST", likesCount: 2},
            {id: 2, massage: "TES2", likesCount: 24},
            {id: 3, likesCount: 1},
        ]
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
   },
}

export default state;