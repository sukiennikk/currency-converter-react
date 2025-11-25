import { useState } from "react";
import ConverterForm from "../ConverterForm/ConverterForm";
import { Container } from "./styled";
import { useRates } from "../hooks/useRates";

export default function CurrencyConverter() {
  const { rates, loading, error, date } = useRates();
  const [result, setResult] = useState("");

  const calculateResult = (amount, currency) => {
    if (!rates) return null;
    return (amount * rates[currency]).toFixed(2);
  };

  const handleConvert = (amount, currency) => {
    const converted = calculateResult(Number(amount), currency);
    if (!converted) return;
    setResult(`${amount} PLN = ${converted} ${currency}`);
  };

  if (loading) return <Container>Ładowanie aktualnych kursów...</Container>;
  if (error) return <Container>Błąd pobierania danych.</Container>;

  return (
    <Container>
      <ConverterForm
        onConvert={handleConvert}
        result={result}
        date={date}
      />
    </Container>
  );
}
