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
            .then(responce => {
                return responce.data
            })
    },
    followUsers(id: string) {
        return instans.post(`follow/${id}`)
            .then(responce => {
                return responce.data
            })
    },
    UnfollowUsers(id: string) {
        return instans.delete(`follow/${id}`)
            .then(responce => {
                return responce.data
            })
    },
    loginAutorizUser() {
        return instans.get(`auth/me`)
            .then(responce => {
                return responce.data
            })
    },

}