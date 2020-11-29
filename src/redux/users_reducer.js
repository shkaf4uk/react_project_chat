// import avatar from './../images/photo_2020-11-05_10-43-38.jpg';
const FOLLOW = 'FOLLOW';
const UN_FOLLOW = 'UN_FOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        // {
        //     id: 1,
        //     followed: true,
        //     fullName: 'Max',
        //     photo: './../images/photo_2020-11-05_10-43-38.jpg',
        //     status: 'I am learning React',
        //     location: {city: 'Slavutych', country: 'Ukraine'}
        // },
        // {
        //     id: 2,
        //     followed: false,
        //     fullName: 'Sasha',
        //     photo: './../images/photo_2020-11-05_10-43-38.jpg',
        //     status: 'I am learning React too',
        //     location: {city: 'Moscow', country: 'Russia'}
        // },
        // {
        //     id: 3,
        //     followed: false,
        //     fullName: 'Dmitry',
        //     photo: '',
        //     status: 'I am your teacher',
        //     location: {city: 'Minsk', country: 'Belarus'}
        // },
        // {
        //     id: 4,
        //     followed: true,
        //     fullName: 'Oleg',
        //     photo: '',
        //     status: 'I am front-end developer. I can help you',
        //     location: {city: 'Slavutych', country: 'Ukraine'}
        // },
    ]
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UN_FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {...state, users: [...state.users, action.users]}

        default:
            return state;
    }
};

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unFollowAC = (userId) => ({type: UN_FOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});

export default usersReducer;