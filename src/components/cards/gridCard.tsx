import React from "react";
import Card from "./card";
import type { OrderData } from "../../types/order";

type OrdersGridProps = {
    orders: OrderData[];
    loading: boolean;
};

const OrdersGrid: React.FC<OrdersGridProps> = ({ orders, loading }) => {
    if (loading) {
        return (
            <section className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </section>
        );
    }

    if (orders?.length === 0) {
        return (
            <section className="text-center py-12">
                <div className="text-gray-400 text-lg mb-2">
                    No orders found
                </div>
                <p className="text-gray-500">
                    Try adjusting your search or filters
                </p>
            </section>
        );
    }

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {orders?.map((order, index) => (
                <Card key={order.do_id || index} order={order} />
            ))}
        </section>
    );
};

export default OrdersGrid;
