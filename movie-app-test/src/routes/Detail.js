import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Movie} from "../components/Movie";

export function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState("");
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie)
    console.log(json.data.movie)
  }
  useEffect(() => {
    getMovie()
  }, [])
  return (
    <div>
      <h2>{movie.title}</h2>
    </div>
  )
}
