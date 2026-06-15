import { useState } from "react";
import "./App.css";
import movies from "./movies";

function App() {

  const [page, setPage] = useState(1);

  const [selectedMovie, setSelectedMovie] = useState(null);

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    mobile: ""
  });

  const bookingId =
    "BK" +
    Math.floor(
      100000 + Math.random() * 900000
    );



  if (page === 1) {
    return (
      <div className="container">

        <h1>Movie Booking</h1>

        <div className="grid">

          {movies.map(movie => (

            <div
              key={movie.id}
              className="card"
              onClick={() => {
                setSelectedMovie(movie);
                setPage(2);
              }}
            >
              <img
                src={movie.image}
                alt={movie.title}
              />

              <h3>{movie.title}</h3>

            </div>

          ))}

        </div>

      </div>
    );
  }



if (page === 2) {

  return (
    <div className="container">

      <h1>{selectedMovie.title}</h1>

      <div className="booking-card movie-details-card">

        <img
          className="poster"
          src={selectedMovie.image}
          alt={selectedMovie.title}
        />

        <p className="detail-line">
  <span className="label">Genre:</span> {selectedMovie.genre}
</p>

<p className="detail-line">
  <span className="label">Duration:</span> {selectedMovie.duration}
</p>

        <p className="description">
          {selectedMovie.description}
        </p>

      </div>

      <button
        onClick={() => setPage(3)}
      >
        Book Seat
      </button>

    </div>
  );
}



  if (page === 3) {

    return (
      <div className="booking-card"> 

        <h1>Booking Form</h1>

        <input
          placeholder="Name"
          onChange={(e) =>
            setUserData({
              ...userData,
              name: e.target.value
            })
          }
        />

        <input
          placeholder="Email"
          onChange={(e) =>
            setUserData({
              ...userData,
              email: e.target.value
            })
          }
        />

        <input
          placeholder="Mobile"
          onChange={(e) =>
            setUserData({
              ...userData,
              mobile: e.target.value
            })
          }
        />

        <button
          onClick={() => setPage(4)}
        >
          Submit
        </button>

      </div>
    );
  }



 if (page === 4) {

  return (

    <div className="success-container">

      <div className="booking-card">

        <h1>Seat Booked Successfully</h1>

        <h2>
          Booking ID: {bookingId}
        </h2>

        <p className="detail-line">
          <span className="label">Movie:</span> {selectedMovie.title}
        </p>

        <p className="detail-line">
          <span className="label">Name:</span> {userData.name}
        </p>

        <p className="detail-line">
          <span className="label">Email:</span> {userData.email}
        </p>

        <p className="detail-line">
          <span className="label">Mobile:</span> {userData.mobile}
        </p>

      </div>

    </div>
  );
}
}

export default App;