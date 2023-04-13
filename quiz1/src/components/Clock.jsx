import React, { useEffect, useState } from "react";
import { format } from 'date-fns-tz'

function Clock({ timeZone }) {
  const [formattedTime, setFormattedTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setFormattedTime( format(now, "HH:mm:ss", { timeZone }) );
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h3>{timeZone}</h3>
      <span>{formattedTime}</span>
    </div>
  );
}

export default Clock

