import type { AxiosResponse } from "axios";
import type { OrderData, OrderResponse } from "../types/order";
import { apiClient } from "./config";
import type { Filters } from "../App";

// API service methods
export const apiService = {
    async fetchData(
        keyword = "",
        filters: Filters,
        page = 1
    ): Promise<OrderData[]> {
        try {
            const payload = {
                keyword: keyword.trim(),
                filter: {
                    order_status: [0],
                    origin_code: filters.origin_code || [],
                    destination_code: filters.destination_code || [],
                },
                page: page,
            };

            console.log("Fetching orders with payload:", payload);

            const response: AxiosResponse<OrderResponse> = await apiClient.post(
                "/orders",
                payload
            );

            if (response.data) {
                const orderData = response.data.order_list.map((order) => ({
                    do_id: order.do_id,
                    goods_name: order.goods_name,
                    origin_name: order.origin_name,
                    destination_name: order.destination_name,
                }));

                return orderData;
            } else {
                throw new Error("Invalid response structure");
            }
        } catch (error) {
            console.error("Error fetching orders:", error);
            throw error;
        }
    },
};
