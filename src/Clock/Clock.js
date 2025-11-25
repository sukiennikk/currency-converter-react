import { useCurrentDate } from "../hooks/useCurrentDate";
import { ClockText } from "./styled";

export default function Clock() {
  const now = useCurrentDate();

  const formattedDate = now.toLocaleString("pl-PL", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return <ClockText>Dzisiaj jest {formattedDate}</ClockText>;
}
