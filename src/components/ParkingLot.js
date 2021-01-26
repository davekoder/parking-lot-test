import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import "./ParkingLot.scss";

const ParkingLot = () => {
  const { parking } = useSelector((state) => ({ ...state }));
  const [vacantLots, setVacantLots] = useState([]);

  let slots = [];

  useEffect(() => {
    setEmptySlots();
  }, [parking]);

  const setEmptySlots = () => {
    const maxParkingLots = parking.maxParkingLots;
    for (let i = 1; i <= maxParkingLots; i++) {
      slots.push({
        lotNumber: i,
        plateNumber: "empty",
        color: "none",
      });
    }
    console.log(slots);
    setVacantLots(slots);
  };
  return (
    <div>
      <h1>Occupied Lots: {parking.totalCarsParked}</h1>
      {parking.parkedCars.map((slot, id) => (
        <h5 key={id} className='occupied-lot'>
          Parking Lot {slot.lotNumber} <br /> Plate Number:(
          {slot.plateNumber}) <br /> Color: ({slot.color})
        </h5>
      ))}

      <h1>
        Vacant Lots:{" "}
        {parking.maxParkingLots === 0 ? (
          <h2>Parking Full</h2>
        ) : (
          parking.maxParkingLots
        )}
      </h1>
      {vacantLots.map((slot, id) => (
        <h5 key={id} className='vacant-lot'>
          Parking Lot {slot.lotNumber + parking.totalCarsParked} <br /> Plate
          Number:(
          {slot.plateNumber}) <br /> Color: ({slot.color})
        </h5>
      ))}
    </div>
  );
};

export default ParkingLot;
