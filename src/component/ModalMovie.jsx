import { useState, useEffect } from "react";

const ModalMovie = (addToFavMovie) => {
    console.log(addToFavMovie)
    const [favmovies, setFavMovies] = useState([]);

    async function getFavmovie() {
        const response = await fetch(`${process.env.REACT_APP_SERVER}/favRecipes`);
        const data = await response.json();

        setFavMovies(data);
    }

    async function deleteToFavMovie(movie) {
        const url = `${process.env.REACT_APP_MOVIE_SERVER}/deletemovietables`
        const response = fetch(url, {
            method: "DELETE", // *GET, POST, PUT, DELETE, etc
        }).then(() => {
            // we recall the getFavRecipe to get the data from the server again after deleting and
            // it will rernder the component because it is modifying the state
            getFavmovie();
        });
        const jsondata = await response.json()
        console.log(jsondata);
    }
    useEffect(() => {
        getFavmovie();
    }, []);
    console.log(favmovies);
    return (
        <>
            <div key={addToFavMovie.id}>
                <div className="card-body">
                    <h5 className="card-title">{addToFavMovie.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{addToFavMovie.overview}</h6>
                    <p className="card-text">{addToFavMovie.release_date}</p>
                    <button type="button" className="btn btn-success"
                        onClick={() => deleteToFavMovie(addToFavMovie)}>Delete</button>
                </div>
            </div>
        </>
    );
}

export default ModalMovie;