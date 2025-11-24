import type { Dispatch, SetStateAction } from "react";

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
  setTip: Dispatch<SetStateAction<number>>
};

export default function TipPercentageForm({setTip}: TipPercentageFormProps) {
  return (
    <div>
      <h3 className="font-black text-2xl">Propina:</h3>

      <form action="">
        {tipOptions.map((tip) => (
          <div className="flex gap-2" key={tip.id}>
            <label htmlFor={tip.id}>{tip.label}</label>

            {/* Con el signo de: +, lo convierte a NUMBER */}
            <input type="radio" name="tip" id={tip.id} value={tip.value} onChange={e => setTip(+e.target.value)}/>
          </div>
        ))}
      </form>
    </div>
  );
}
