import axios from 'axios';

const GetMovieReviews = async movieId => {
  const BASE_URL = 'https://api.themoviedb.org/3';
  const API_KEY = '2ec93d095b3f7dd7321ac567053c0ad5';

  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );

  return response;
};

export default GetMovieReviews;
