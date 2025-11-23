import { useState, useEffect } from "react";

export default function Clock() {
  const [now, setNow] = useState(new Date()); // działa od razu

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(intervalId); // sprzątanie
  }, []);

  const formattedDate = now.toLocaleString("pl-PL", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <p style={{ 
     textAlign: "right", 
     fontSize: "14px", 
     color: "#777",
     fontFamily: "'Cutive Mono', monospace",
     fontWeight: 300,
     margin: "0 0 20px 0" }}>
      Dzisiaj jest {formattedDate}
    </p>
  );
}


