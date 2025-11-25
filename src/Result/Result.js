import { ResultText } from "./styled";

export default function Result({ result }) {
  return <ResultText>{result ? result : "Wynik:"}</ResultText>;
}
