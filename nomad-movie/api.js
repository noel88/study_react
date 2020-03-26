import axios from "axios"

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "8597e491ed6e80f0de12e349eb60ea6e",
        language: "en-US"
    }
});

export const moviesApi = {
    nowPlaying: () => api.get("movie/now_playing"),
    upcoming: () => api.get("movie/upcoming"),
    popular: () => api.get("movie/popular"),
    movieDetail: id =>
        api.get(`movie/${id}`, {
            params: {
                append_to_response: "videos"
            }
        }),
    search: term =>
        api.get("search/movie", {
            params: {
                query: encodeURIComponent(term)
            }
        })
};

export const tvApi = {
    airingThisWeek: () => api.get("tv/on_the_air"),
    popular: () => api.get("tv/popular"),
    airingToday: () => api.get("tv/airing_today"),
    showDetail: id =>
        api.get(`tv/${id}`, {
            params: {
                append_to_response: "videos"
            }
        }),
    search: term =>
        api.get("search/tv", {
            params: {
                query: encodeURIComponent(term)
            }
        })
};

export default api;
