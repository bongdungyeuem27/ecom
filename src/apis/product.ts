import axiosServices from "./axiosServices"

export type IProduct =  {
    _id: number;
    name: string;
    category: string;
    price: number;
    __v: number;
}

export const getAll = async ()=>{
    return await axiosServices.get<IProduct[]>(`${import.meta.env.VITE_BACKEND}product/all`).then(success => success.data)
}