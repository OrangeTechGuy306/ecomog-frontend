import type { CarProps } from "@/types/car-type";
import apiClient from "./api-client";

export class CarServices {

  static async getAllCars(): Promise<CarProps[]> {
    const { data } = await apiClient.get("/cars");
    const { message } = data;
    return message;
  }

  static async getCarById(id: string): Promise<CarProps> {
    const { data } = await apiClient.get(`/car/${id}`);
    const { message } = data;
    return message;
  }
  
}
