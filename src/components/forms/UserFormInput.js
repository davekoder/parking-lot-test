import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ParkingLot from "../ParkingLot";
import "./userFormInput.scss";

const UserFormInput = () => {
  const { parking } = useSelector((state) => ({ ...state }));

  const [plateNumber, setPlateNumber] = useState("");
  const [color, setColor] = useState("");
  const carsParked = parking.totalCarsParked;
  let dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (plateNumber && color) {
      dispatch({
        type: "CAR_DETAILS",
        payload: {
          maxParkingLots: parking.maxParkingLots - 1,
          totalCarsParked: carsParked + 1,
          parkedCars: [
            ...parking.parkedCars,
            {
              lotNumber: parking.totalCarsParked + 1,
              plateNumber,
              color,
            },
          ],
        },
      });
    } else {
      alert("Plate Number and Color needs values");
    }
  };
  return (
    <div className='container'>
      <h2>Number for Total Parking Slots: {parking.maxParkingLots}</h2>
      {parking.maxParkingLots === 0 ? (
        <h1>Maximum Number of Parked Cars Reached</h1>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label>Plate Number:</label>
            <input
              type='text'
              className='form-control'
              onChange={(e) => {
                setPlateNumber(e.target.value);
              }}
              value={plateNumber}
              autoFocus
              required
            />
            <label>Car Color:</label>
            <input
              type='text'
              className='form-control'
              onChange={(e) => {
                setColor(e.target.value);
              }}
              value={color}
              required
            />
            <br />

            <button className='btn btn-outline-primary'>Park</button>
          </div>
        </form>
      )}
      <Link className='btn btn-outline-danger' to='/'>
        Set Parking Slots
      </Link>
      <br />
      <ParkingLot />
    </div>
  );
};

export default UserFormInput;
