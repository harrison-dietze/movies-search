const BASE_URL = "http://localhost:3000/movies"; // Replace with your API URL

const fetchMovies = async (searchQuery, param = "title") => {
  const response = await fetch(
    `${BASE_URL}?filter=${searchQuery}&param=${param}`
  );
  const data = await response.json();
  return data;
};

export default {
  fetchMovies,
};
