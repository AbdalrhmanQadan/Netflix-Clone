import Movie from './Movie'
const MovieList = ({ movieState }) => {

    return (
        <>
            {
                movieState.map(movieState => {
                    return (
                        <div key={movieState}>
                        </div>
                    );
                })
            }
            <Movie movieState={movieState} />
        </>
    )

}

export default MovieList;