import react from 'react';
// API
import API from '../API';
// config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL} from '../config';

// components 
import HeroImage from './HeroImage';
import Grid from './Grid';
import Thumb from './Thumb';
import Spinner from './Spinner';


// Hooks
import { useMovieFetch } from '../hooks/useMovieFetch'
// Image
import NoImage from '../images/no_image.jpg';

const Home = () => {
    
    const {state, loading, error}  = useMovieFetch();

    console.log(state);
    return (
        <>
            {state.results[0] && 
            <HeroImage 
                image = {`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                title = {state.results[0].original_title}
                text = {state.results[0].overview}
            />
            }
        <Grid header='Popular Movies'>
            {state.results.map(movie => (
                // <div key={movie.id}>{movie.title}</div>
                <Thumb
                    key={movie.id}
                    clickable = {true}
                    image = {
                        movie.poster_path
                            ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                            : NoImage
                    }
                    movieId = {movie.id}

                />
            ))}
        </Grid>
        <Spinner />
        </>
      )
}

export default Home;
