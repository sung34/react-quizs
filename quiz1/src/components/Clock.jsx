  import React, { useEffect, useState } from "react";
  import { format, utcToZonedTime } from 'date-fns-tz'

  function Clock({ name, timeZone, clockInterval }) {
    const [formattedTime, setFormattedTime] = useState("");

    useEffect(() => {
      if (timeZone) {
        const date = new Date();
        const zonedDate = utcToZonedTime(date, timeZone)
        const pattern = 'yyyy.M.d HH:mm:ss \'GMT\' XXX (z)'
        setFormattedTime(format(zonedDate, pattern, timeZone));
      }
    }, [clockInterval]);
    

    return (
      <>
        <h3>{name}</h3>
        <span>{formattedTime}</span>
      </>
    );
  }

  export default Clock

