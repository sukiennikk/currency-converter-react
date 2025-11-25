import { LabelText } from "./styled";

export default function RateSelect({ currency, setCurrency }) {
  return (
    <LabelText>
      Wymiana na:
      <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
        <option value="EUR">EUR</option>
        <option value="USD">USD</option>
      </select>
    </LabelText>
  );
}
