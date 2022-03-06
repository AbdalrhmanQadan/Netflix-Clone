import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import ModalMovie from './ModalMovie';
const Movie = ({ movieState }) => {
    const [favmovie, setFavmovie] = useState([]);

    function handeladdfav(favmovie, e) {
        e.preventDefault(setFavmovie);
        addToFavMovie(favmovie)
    }


    async function addToFavMovie(movie) {
        const url = `${process.env.REACT_APP_MOVIE_SERVER}/addmovietable`
        const data = {
            title: movie.title,
            release_date: movie.release_date,
            poster_path: movie.poster_path,
            overview: movie.overview
        }
        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        const jsondata = await response.json()
        console.log(jsondata);

    }
    return (
        <>
            {
                movieState.map(movieState => {
                    return (
                        <div key={movieState.id}>
                            <div className="card-body">
                                <h5 className="card-title">{movieState.title}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{movieState.overview}</h6>
                                <p className="card-text">{movieState.release_date}</p>
                                <button type="button" className="btn btn-success"
                                    onClick={() => handeladdfav(movieState)}>Add to favorite list</button>
                            </div>
                        </div>
                    );
                })
            }
            {favmovie && <ModalMovie addToFavMovie={addToFavMovie} />}
        </>
    )
}

export default Movie;