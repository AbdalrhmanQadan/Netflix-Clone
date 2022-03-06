import { useEffect, useState } from 'react';
import MovieList from './MovieList'

const Home = () => {
    const [state, setState] = useState([]);
    async function gitData() {
        let respons = await fetch(`${process.env.REACT_APP_MOVIE_SERVER}/trending`);
        let data = await respons.json();
        setState(data);
    }
    useEffect(() => {
        gitData();
    }, []);
    return (
        <>
            {state && <MovieList movieState={state} />}
        </>
    );
}

export default Home;