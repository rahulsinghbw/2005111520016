import React from 'react'

const TrainCard = ({ train }) => {
  return (
    <article className="train">
        <h2>Train Name: { train.trainName }</h2>
        <h5>Train Number: {train.trainNumber }</h5>

        <p className="departure__time">
            Departure Time: {train.departureTime.Hours}H {train.departureTime.Minutes}M Left
        </p>

        <div className="train__info">
            <p>Seats Available in Sleeper: { train.seatsAvailable.sleeper }</p>
            <p>Sleeper seat price: {train.price.sleeper}</p>

            <p>Seats Available in AC: { train.seatsAvailable.AC }</p>
            <p>AC seat price: {train.price.AC}</p>

        </div>
    </article>
  )
}

export default TrainCard
