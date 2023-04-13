import React, { useRef, useState, useEffect } from "react";
import { timeZones } from "../constants/data";
import Clock from "./Clock";

function Clocks() {
  const [timeZoneList, setTimeZoneList] = useState([]);
  const [clockInterval, setClockInterval] = useState(null);
  const [myTimeZone, setMyTimeZone] = useState(null);
  const selectRef = useRef(null);

  const handleRemoveClock = (id) => {
    setTimeZoneList((prev) => prev.filter((timeZone) => timeZone.id !== id));
  };

  const handleAddClock = () => {
    if (!selectRef.current.value) return alert("지역을 선택해 주세요.");
    const tz = timeZones.find(
      (timeZone) => timeZone.id === Number(selectRef.current.value)
    );
    if (!tz) return alert("선택한 시간대를 찾을 수 없습니다.");

    setTimeZoneList((prev) => [...prev, tz]);
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
          )
            .then((response) => response.json())
            .then((data) => {
              const userTimeZone = {
                name: data.localityInfo.administrative[0].name,
                timeZone: data.localityInfo.informative[1].name,
              };
              setMyTimeZone(userTimeZone);
            });
        },
        (error) => alert("위치 정보 적용 실패")
      );
    }
  }, []);

  useEffect(() => {
    const clockInterval = setInterval(() => {
      setClockInterval(new Date().getTime());
    }, 1000);

    return () => clearInterval(clockInterval);
  }, [timeZoneList]);

  return (
    <>
      <h1>내 시계</h1>
      <ul>
        {myTimeZone !== null && (
          <Clock
            name={myTimeZone.name}
            timeZone={myTimeZone.timeZone}
            clockInterval={clockInterval}
          />
        )}
      </ul>

      <div>
        <label htmlFor="timeZoneSelect">시계 추가하기</label>
        <select name="timeZoneSelect" ref={selectRef} defaultValue="">
          <option value="">지역 선택</option>
          {timeZones.map((timeZone) => (
            <option key={timeZone.id} value={timeZone.id}>
              {timeZone.name}
            </option>
          ))}
        </select>
        <button onClick={handleAddClock}>추가</button>
      </div>

      <ul>
        {timeZoneList?.map((timeZoneObj) => (
          <li>
            <Clock
              key={timeZoneObj.id}
              name={timeZoneObj.name}
              timeZone={timeZoneObj.timeZone}
              clockInterval={clockInterval}
            />
            <button onClick={() => handleRemoveClock(timeZoneObj.id)}>
              삭제
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Clocks;
