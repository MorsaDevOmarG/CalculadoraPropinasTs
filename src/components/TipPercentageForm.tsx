import type { Dispatch, SetStateAction } from "react";
import type { OrderActions } from "../reducers/order-reducer";

const tipOptions = [
  {
    id: "tip-10",
    value: 0.1,
    label: "10%",
  },
  {
    id: "tip-20",
    value: 0.2,
    label: "20%",
  },
  {
    id: "tip-50",
    value: 0.5,
    label: "50%",
  },
];

type TipPercentageFormProps = {
  // setTip: React.Dispatch<React.SetStateAction<number>>
  // setTip: Dispatch<React.SetStateAction<number>>
  // setTip: Dispatch<SetStateAction<number>>,
  dispatch: Dispatch<OrderActions>,
  tip: number
};

// export default function TipPercentageForm({setTip, tip}: TipPercentageFormProps) {
export default function TipPercentageForm({dispatch, tip}: TipPercentageFormProps) {
  return (
    <div>
      <h3 className="font-black text-2xl">Propina:</h3>

      <form action="">
        {tipOptions.map((tipOptions) => (
          <div className="flex gap-2" key={tipOptions.id}>
            <label htmlFor={tipOptions.id}>{tipOptions.label}</label>

            {/* Con el signo de: +, lo convierte a NUMBER */}
            <input
              type="radio"
              name="tip"
              id={tipOptions.id}
              value={tipOptions.value}
              // onChange={(e) => setTip(+e.target.value)}
              onChange={(e) => dispatch({ type: 'add-tip', payload: {value: +e.target.value} })}
              checked={tip === tipOptions.value}
            />
          </div>
        ))}
      </form>
    </div>
  );
}
