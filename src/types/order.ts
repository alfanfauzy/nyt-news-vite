export interface OrderResponse {
    summary_do: SummaryDo[];
    order_list: OrderList[];
}

export interface SummaryDo {
    status: number;
    total: number;
}

export interface OrderList {
    created_at: string;
    updated_at: string;
    do_id: number;
    do_no: string;
    goods_name: string;
    goods_qty: number;
    goods_qty_ton: number;
    goods_unit: string;
    order_type: string;
    order_type_name: string;
    origin_name: string;
    origin_code: string;
    destination_name: string;
    destination_code: string;
    destination_address: string;
    ref_no: string;
    status: number;
}

export type OrderData = Pick<
    OrderList,
    "do_id" | "goods_name" | "origin_name" | "destination_name"
>;
