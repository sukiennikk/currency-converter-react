import { useState, useEffect } from "react";

export function useRates() {
  const [rates, setRates] = useState(null);
  const [date, setDate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch(
          `https://api.currencyapi.com/v3/latest?apikey=cur_live_DXQYGSe7Q4lsByyNKfuS8DsBPov7YVn0qBtfIjbm&currencies=EUR,USD&base_currency=PLN`
        );
        if (!response.ok) throw new Error("Network error");

        const data = await response.json();

        setRates({
          EUR: data.data.EUR.value,
          USD: data.data.USD.value,
        });

        setDate(new Date(data.meta.last_updated_at));
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchRates();
  }, []);

  return { rates, date, loading, error };
}
