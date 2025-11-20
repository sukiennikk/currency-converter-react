import { useState } from "react";
import "../styles/form.css";

export default function CurrencyConverter() {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("EUR");
  const [result, setResult] = useState(null);

  const calculateResult = (amount, currency) => {
    const rateEUR = 4.19;
    const rateUSD = 3.84;

    if (currency === "EUR") return (amount / rateEUR).toFixed(2);
    if (currency === "USD") return (amount / rateUSD).toFixed(2);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const converted = calculateResult(Number(amount), currency);
    setResult(`${amount} PLN = ${converted} ${currency}`);
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <fieldset className="form__fieldset">
        <legend className="caption">PRZELICZ WALUTĘ</legend>

        <p>
          <label className="form__labelText">
            Kwota PLN:
            <input
              type="number"
              required
              min="0"
              step="0.01"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </label>
        </p>

        <p>
          <label className="form__labelText">
            Wymiana na:
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <option value="EUR">EUR</option>
              <option value="USD">USD</option>
            </select>
          </label>
        </p>

        <p className="form__result">
          {result ? result : "Wynik:"}
        </p>
      </fieldset>

      <p>
        <button className="form__button">Przelicz</button>
      </p>
    </form>
  );
}
