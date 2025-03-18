import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "../css/MovieDetails.css"
import { getMovieDetails } from "../services/api";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const data = await getMovieDetails(id)
        setMovie(data)
      } catch (error) {
        setError("Failed to fetch movie details.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails()
  }, [id]);

  if (loading) return <h2>Loading...</h2>
  if (error) return <h2>{error}</h2>

  return (
    <div className="movie-details">
    <div className="movie-header">
      <h1 className="movie-title">{movie.title}</h1>
    </div>
    <div className="movie-content">
      <div className="movie-poster">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      </div>
      <div className="movie-info">
        <div className="info-section">
          <h3>Overview</h3>
          <p className="overview">{movie.overview}</p>
        </div>
        <div className="info-section">
          <h3>Release Date</h3>
          <p className="release-date">{movie.release_date}</p>
        </div>
        <div className="info-section">
          <h3>Rating</h3>
          <p className="rating">⭐ {movie.vote_average.toFixed(1)}</p>
        </div>
      </div>
    </div>
  </div>
  );
}

export default MovieDetails
