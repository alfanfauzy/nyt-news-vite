import type { SearchParams } from "../types/article";

export const formatSearchParams = (
    params: SearchParams
): Record<string, any> => {
    const formattedParams: Record<string, any> = {};

    if (params.q) {
        formattedParams.q = params.q;
    }

    if (params.page !== undefined) {
        formattedParams.page = params.page;
    }

    if (params.sort) {
        formattedParams.sort = params.sort;
    }

    if (params.fq) {
        formattedParams.fq = params.fq;
    }

    if (params.begin_date) {
        formattedParams.begin_date = params.begin_date;
    }

    if (params.end_date) {
        formattedParams.end_date = params.end_date;
    }

    return formattedParams;
};
