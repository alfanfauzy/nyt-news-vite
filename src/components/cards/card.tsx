import React from "react";
import { Eye, MoveRight } from "lucide-react";
import type { OrderData } from "../../types/order";

type CardProps = {
    order: OrderData;
};

const Card: React.FC<CardProps> = ({ order }) => {
    return (
        <article className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <header className="space-y-3">
                <div className="flex flex-row items-center border-b-1 border-b-slate-400 gap-2">
                    <p className="font-medium text-gray-400 text-sm">
                        Order ID :
                    </p>
                    <h3 className="font-semibold text-gray-800 text-3xl">
                        {order.do_id}
                    </h3>
                </div>

                <section className="space-y-2">
                    <div>
                        <p className="font-medium text-gray-800 text-2xl">
                            {order.goods_name}
                        </p>
                    </div>

                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-sm text-gray-600">Origin</p>
                            <p className="font-medium text-gray-800">
                                {order.origin_name}
                            </p>
                        </div>
                        <MoveRight />
                        <div className="text-right">
                            <p className="text-sm text-gray-600">Destination</p>
                            <p className="font-medium text-gray-800">
                                {order.destination_name}
                            </p>
                        </div>
                    </div>
                </section>

                <button className="w-full mt-4 flex items-center justify-center gap-2 py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer">
                    <Eye className="w-4 h-4" />
                    Lihat Detail
                </button>
            </header>
        </article>
    );
};

export default Card;
