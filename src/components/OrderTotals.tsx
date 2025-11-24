import { useMemo } from 'react';
import { OrderItem } from '../types/index';
import { formatCurrency } from '../helpers/index';

type OrderTotalsProps = {
  order: OrderItem[],
};

export default function OrderTotals({ order }: OrderTotalsProps) {
  const subtotalAmount = useMemo(() => order.reduce((total, item) => total + item.price * item.quantity, 0), [order]);

  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-4xl">Totales y Propina</h2>

        <p className="text-2xl my-5">
          Subtotal a pagar: {''}
            <span className="font-bold">{formatCurrency(subtotalAmount)}</span>
        </p>

        <p className="text-2xl my-5">
          Propina: {''}
            <span className="font-bold">$0</span>
        </p>

        <p className="text-2xl my-5">
          Total a pagar: {''}
            <span className="font-bold">$0</span>
        </p>
      </div>

      <button></button>
    </>
  )
};