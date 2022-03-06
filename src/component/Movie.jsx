import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import ModalMovie from './ModalMovie';
const Movie = ({ movieState }) => {
    const [favmovie, setFavmovie] = useState([]);

    function handeladdfav(favmovie) {
        setFavmovie(favmovie)
    }
    console.log(movieState)
    return (
        <>
            {
                movieState.map(movieState => {
                    return (

                        <div key={movieState.id}>
                            <div class="card-body">
                                <h5 class="card-title">{movieState.title}</h5>
                                <h6 class="card-subtitle mb-2 text-muted">{movieState.overview}</h6>
                                <p class="card-text"><p>{movieState.release_date}</p></p>
                                <button type="button" class="btn btn-success"
                                    onClick={() => handeladdfav(movieState)}>Add to favorite list</button>
                                <ModalMovie favmovie={favmovie} />
                            </div>
                        </div>
                    );
                })
            }
        </>
    )
}

export default Movie;