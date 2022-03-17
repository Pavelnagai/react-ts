import axios from "axios";

const instans = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '2a3c113a-9f81-44c2-8055-fcb19926514f',
    },
})

export const UsersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instans.get(`users?page=${currentPage}&count=${pageSize}`)
    },
}

export const followingAPI = {
    followUsers(id: string) {
        return instans.post(`follow/${id}`)
    },

    unfollowUsers(id: string) {
        return instans.delete(`follow/${id}`)
    },
}

export const AuthAPI = {
    me() {
        return instans.get(`auth/me`)
    },
    login(email: string, password: string, rememberMe: boolean = false) {
        return instans.post(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instans.delete(`auth/login`)
    },

}

export const profileAPI = {
    getProfile(userId: string) {
        return instans.get(`profile/${userId}`)
    },
    getStatus(userId: string) {
        return instans.get(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instans.put(`profile/status`, {status})
    }

}