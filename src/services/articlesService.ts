import type { AxiosResponse } from "axios";
import { apiClient } from "./api";
import { BASE_CONFIG } from "../config/config";
import type { NYTResponse, SearchParams } from "../types/article";
import { formatSearchParams } from "../utils/searchUtils";

const API_KEY = BASE_CONFIG.api.apiKey;

export const articleService = {
    async searchArticles(params: SearchParams): Promise<NYTResponse> {
        try {
            const formattedParams = {
                ...formatSearchParams(params),
                ["api-key"]: API_KEY, // ⬅️ tambahkan api-key di setiap request
            };

            const response: AxiosResponse<NYTResponse> = await apiClient.get(
                "/articlesearch.json",
                { params: formattedParams }
            );

            if (response.data) {
                return response.data;
            } else {
                throw new Error("Invalid response structure");
            }
        } catch (error) {
            console.error("Error searching articles:", error);
            throw error;
        }
    },

    async getArticlesByQuery(
        query: string,
        page: number = 0
    ): Promise<NYTResponse> {
        return this.searchArticles({
            q: query,
            page,
            sort: "newest",
        });
    },

    async getArticleById(id: string): Promise<NYTResponse> {
        return this.searchArticles({
            q: `_id:"${id}"`,
        });
    },
};
