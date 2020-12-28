import * as axios from "axios";

const instanse = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "85dc7a58-6eaf-4275-9c0a-798e2f927814"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instanse.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    follow(userId) {
        return instanse.post(`follow/${userId}`)
    },
    unFollow (userId) {
        return instanse.delete(`follow/${userId}`)
    }
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
    },
    saveProfile(profile) {
        return instanse.put(`profile`, profile)
    },
    savePhoto(file) {
        let formData = new FormData();
        formData.append("image", file);
        return instanse.put(`profile/photo/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}

export const loginAPI = {
    getAuth() {
        return instanse.get(`auth/me`);
    },
    login(email, password, rememberMe = false) {
        return instanse.post(`auth/login`, {email, password, rememberMe});
    },
    logout(email, password, rememberMe = false) {
        return instanse.delete(`auth/login`);
    },
}

