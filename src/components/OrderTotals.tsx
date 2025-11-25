import { useMemo } from 'react';
import { OrderItem } from '../types/index';
import { formatCurrency } from '../helpers/index';

type OrderTotalsProps = {
  order: OrderItem[],
  tip: number,
};

export default function OrderTotals({ order, tip }: OrderTotalsProps) {
  const subtotalAmount = useMemo(() => order.reduce((total, item) => total + item.price * item.quantity, 0), [order]);
  const tipAmount = useMemo(() => subtotalAmount * tip, [tip, order]);
  const totalAmount = useMemo(() => subtotalAmount + tipAmount, [tip, order]);

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
          <span className="font-bold">{formatCurrency(tipAmount)}</span>
        </p>

        <p className="text-2xl my-5">
          Total a pagar: {''}
          <span className="font-bold">{formatCurrency(totalAmount)}</span>
        </p>
      </div>

      <button></button>
    </>
  )
};