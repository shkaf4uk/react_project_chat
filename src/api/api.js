import * as axios from "axios";

const instanse = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instanse.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    getProfile(userId) {
        console.warn('Use profileAPI please')
        return profileAPI.getProfile(userId)
    },
}

export const profileAPI = {
    getProfile(userId) {
        return instanse.get(`profile/${userId}`)
    },
    getStatus(userId) {
        return instanse.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instanse.put(`profile/status/`, {status: status})
    }
}

export const loginAPI = {
    getAuth() {
        return instanse.get(`auth/me`, {withCredentials: true})
    }
}

