import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import { useState,useEffect } from "react";
import ReactPlayer from "react-player"

const MovieDetails = ({movies,}) => {
    const {id} = useParams ();
    const {movieDetails,setMovieDetails} = useState({});
    useEffect(() => {
        setMovieDetails(movies.find ((Filter) => Filter.id === id));
    }, [id]);
    console . log (movieDetails)
    return (
        <div>
            <img src={movieDetails.image} alt={movieDetails.discription} />
            <h4>{movieDetails.title}</h4>
            <h6> {movieDetails.discription}</h6>
            <ReactPlayer url={movieDetails.trailer} />
        </div>
    )
}

export default MovieDetails
