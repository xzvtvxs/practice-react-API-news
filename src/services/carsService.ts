import type { Car, CreateCarsBody, GetCarsParams, GetCarsResposnse } from "../types/cars";
import { serverAPI } from "./serverConfig";

export async function getCars(userParams: GetCarsParams) {
    const params = {
        ...userParams,
    }

    const result = await serverAPI.get<GetCarsResposnse>('/public/cars', { params });

    return result.data;
}

export async function createCar(carBody:CreateCarsBody) {
    const result = await serverAPI.post<{
        item: Car
    }>('/public/cars', carBody);

    return result.data;
}

export async function deleteCar(carId: string) {
    await serverAPI.delete(`/public/cars/${carId}`);
}