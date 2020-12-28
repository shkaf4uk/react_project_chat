import {usersAPI} from "../api/api";
import {objectInArray} from "../utils/helperForUserReducer";

const FOLLOW = 'FOLLOW';
const UN_FOLLOW = 'UN_FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS';

let initialState = {
    users: [],
    pageSize: 5,
    totalItemsCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: false,
    portionSize: 10,
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: objectInArray(state.users, action.userId, {followed: true}),
            }
        case UN_FOLLOW:
            return {
                ...state,
                users: objectInArray(state.users, action.userId, {followed: false}),
            }
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USER_COUNT:
            return {...state, totalItemsCount: action.totalItemsCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case FOLLOWING_IN_PROGRESS:
            return {...state, followingInProgress: action.isFetching}
        default:
            return state;
    }
};

export const follow = (userId) => ({type: FOLLOW, userId});
export const unFollow = (userId) => ({type: UN_FOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage: currentPage});
export const setUserTotalCount = (totalItemsCount) => ({type: SET_TOTAL_USER_COUNT, totalItemsCount: totalItemsCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching: isFetching});

export const getUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(currentPage));

    let data = await usersAPI.getUsers(currentPage, pageSize);

    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setUserTotalCount(data.totalCount));
}

export const Follow = (userId) => async (dispatch) => {
    const response = await usersAPI.follow(userId);
    console.log('response', response)
    dispatch(follow(userId))
}

export const UnFollow = (userId) => async (dispatch) => {
    const response = await usersAPI.unFollow(userId);
    console.log('response', response)
    dispatch(unFollow(userId))
}

export default usersReducer;