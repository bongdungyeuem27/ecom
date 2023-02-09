import axiosServices from '@/apis/axiosServices';

export interface IUser {
    _id: string
    username: string
    email: string
    phone: string
  }

  
export interface ILogin {
    user: IUser
    accessToken: string
  }
export const login = (username: string, password: string) =>{
    return axiosServices.post<ILogin>(`${import.meta.env.VITE_BACKEND}auth/login`, {username, password})
}

export const register = (username: string, email: string, phone: string, password: string) =>{
    return axiosServices.post(`${import.meta.env.VITE_BACKEND}auth/register`, {username, email, phone, password})
}