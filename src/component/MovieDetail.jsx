// src/components/MovieDetail.jsx
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import './MovieDetail.css';

// function MovieDetail() {
//   const { movieId } = useParams(); // get movie id from URL
//   const [data, setData] = useState(null);

// const fetchData = async () => {
//   try {
//     const res = await axios.get(`http://localhost:3000/Movies?id=${movieId}`);
//     if (res.data.length === 0) {
//       console.error("Movie not found");
//     } else {
//       setData(res.data[0]);
//     }
//   } catch (err) {
//     console.error("Axios Error:", err.message);
//   }
// };

//   useEffect(() => {
//     fetchData();
//   }, [movieId]);

//   if (!data) return <div>Loading...</div>;

//   return (
//     <div className="movie-container">
//       <div className="image-container">
//         <img src={data.Url} alt={data.Title} />
//       </div>
//       <center>
//       <ul className="details-list">
//         <li><strong>Title:</strong> {data.Title} </li>
//         <li><strong>Year:</strong> {data.Year}</li>
//         <li><strong>Rated:</strong> {data.Rated}</li>
//         <li><strong>Genre:</strong> {data.Genre}</li>
//         <li><strong>Director:</strong> {data.Director}</li>
//         <li><strong>Writer:</strong> {data.Writer}</li>
//         <li><strong>Actors:</strong> {data.Actors}</li>
//         <li><strong>Language:</strong> {data.Language}</li>
//         <li><strong>Awards:</strong> {data.Awards}</li>
//         <li><strong>Type:</strong> {data.Type}</li>
//         <li><strong>IMDb Rating:</strong> {data.imdbRating}</li>
//       </ul>
//       </center>
//     </div>
//   );
// }

// export default MovieDetail;




import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './MovieDetail.css';

function MovieDetail() {
  const { movieId } = useParams();
  const [data, setData] = useState(null);
  const [showTrailer, setShowTrailer] = useState(false);

  const fetchData = async () => {
    try {
      const res = await axios.get(`http://localhost:10000/Movies?id=${movieId}`);
      if (res.data.length === 0) {
        console.error("Movie not found");
      } else {
        setData(res.data[0]);
      }
    } catch (err) {
      console.error("Axios Error:", err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [movieId]);

  const getYouTubeId = (url) => {
    const regExp = /^.*(?:youtu.be\/|v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[1].length === 11 ? match[1] : null;
  };

  if (!data) return <div>Loading...</div>;

  return (
    <div className="movie-container">
      <div className="image-container">
        {showTrailer ? (
          <div className="video-wrapper">
            <iframe
              width="100%"
              height="400"
              src={`https://www.youtube.com/embed/${getYouTubeId(data.TrailerUrl)}`}
              title="YouTube trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          <img
            src={data.Url}
            alt={data.Title}
            onClick={() => setShowTrailer(true)}
            style={{ cursor: 'pointer' }}
          />
        )}
      </div>

      <center>
        <ul className="details-list">
          <li><strong>Title:</strong> {data.Title}</li>
          <li><strong>Year:</strong> {data.Year}</li>
          <li><strong>Rated:</strong> {data.Rated}</li>
          <li><strong>Genre:</strong> {data.Genre}</li>
          <li><strong>Director:</strong> {data.Director}</li>
          <li><strong>Writer:</strong> {data.Writer}</li>
          <li><strong>Actors:</strong> {data.Actors}</li>
          <li><strong>Language:</strong> {data.Language}</li>
          <li><strong>Awards:</strong> {data.Awards}</li>
          <li><strong>Type:</strong> {data.Type}</li>
          <li><strong>IMDb Rating:</strong> {data.imdbRating}</li>
        </ul>
      </center>
    </div>
  );
}

export default MovieDetail;
