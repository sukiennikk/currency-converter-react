import { useState } from "react";
import RateSelect from "../RateSelect/RateSelect";
import Result from "../Result/Result";
import { Form, Fieldset, Caption, LabelText, Button } from "./styled";
import Clock from "../Clock/Clock";

export default function ConverterForm({ onConvert, result }) {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("EUR");

  const onSubmit = (e) => {
    e.preventDefault();
    onConvert(amount, currency);
  };

  return (
    <Form onSubmit={onSubmit}>
      <Clock />
      <Fieldset>
        <Caption>PRZELICZ WALUTĘ</Caption>

        <LabelText>
          Kwota PLN:
          <input
            type="number"
            required
            min="0"
            step="0.01"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </LabelText>

        <RateSelect currency={currency} setCurrency={setCurrency} />
        <Result result={result} />
      </Fieldset>

      <Button>Przelicz</Button>
    </Form>
  );
}
