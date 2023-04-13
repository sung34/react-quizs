import React, { useRef, useState } from "react";
import { timeZones } from "../constants/data";
import Clock from "./Clock";

function Clocks() {
  const [timeZoneList, setTimeZoneList] = useState([]);
  const selectRef = useRef(null)
  const handleRemoveClock = (id) => {
    setTimeZoneList((prev) => prev.filter((timeZone) => timeZone.id === id));
  };
  const handleAddClock = () => {
    const tz = timeZones.find(timeZone => timeZone.id === selectRef.current.value)
    tz && setTimeZoneList(prev => [...prev, tz])
  };
  return (
    <>
      <h3>현재 내 위치: </h3>
      <span>현재 내 시간: </span>
      <div>
        <select name="timeZone" ref={selectRef}>
          {timeZones.map(timeZone => {
            <option value={timeZone.id}>{timeZone.name}</option>
          })}
        </select>
        <button onClick={handleAddClock}>추가</button>
      </div>

      <ul>
        {timeZoneList?.map((timeZone) => (
          <Clock key={timeZone.id} props={timeZone}>
            <button onClick={() => handleRemoveClock(timeZone.id)}>삭제</button>
          </Clock>
        ))}
      </ul>
    </>
  );
}

export default Clocks;
