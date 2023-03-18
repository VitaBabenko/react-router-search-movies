import { useParams, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import GetMovieDetails from '../services/GetMovieDetails';
import AboutMovie from '../components/AboutMovie';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      GetMovieDetails(movieId)
        .then(respMovieId => {
          console.log(respMovieId.data);
          setMovie(respMovieId.data);
        })
        .catch(error => setError(error))
        .finally(() => setLoading(false));
    }, 2000);
  }, [movieId]);

  return (
    <>
      {loading && <h2>Loading...</h2>}
      {error && <h2>Error</h2>}
      {movie && <AboutMovie movie={movie} />}
      <Outlet />
    </>
  );
};

export default MovieDetails;
