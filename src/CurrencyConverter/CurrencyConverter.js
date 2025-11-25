import { useState } from "react";
import Clock from "../Clock/Clock";
import ConverterForm from "../ConverterForm/ConverterForm";
import { Container } from "./styled";

export default function CurrencyConverter() {
  const [result, setResult] = useState("");

  const calculateResult = (amount, currency) => {
    const rateEUR = 4.19;
    const rateUSD = 3.84;
    if (currency === "EUR") return (amount / rateEUR).toFixed(2);
    if (currency === "USD") return (amount / rateUSD).toFixed(2);
  };

  const handleConvert = (amount, currency) => {
    const converted = calculateResult(Number(amount), currency);
    setResult(`${amount} PLN = ${converted} ${currency}`);
  };

  return (
    <Container>
      <Clock />
      <ConverterForm onConvert={handleConvert} result={result} />
    </Container>
  );
}
