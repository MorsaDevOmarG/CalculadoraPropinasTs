export default function OrderTotals () {
  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-4xl">Totales y Propina</h2>

        <p className="text-2xl my-5">
          Subtotal a pagar: {''}
            <span className="font-bold">$0</span>
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