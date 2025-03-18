const API_KEY ="3ff3733c6b65c3728162c23912dfd113"
const BASE_URL ="https://api.themoviedb.org/3"

export const getPopularMovies = async() => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
    const data = await response.json()
    return data.results
}

export const searchMovies = async(query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`)
    const data = await response.json()
    return data.results
}

export const getMovieDetails = async(id) => {
    const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`)
    const data = await response.json()
    return data
}

