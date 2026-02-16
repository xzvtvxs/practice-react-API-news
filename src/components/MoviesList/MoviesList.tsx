import { useQuery } from '@tanstack/react-query';
import css from './MoviesList.module.css';
import { getMovies } from '../../services/moviesService';
import { useState } from 'react';
import MovieCard from './MovieCard/MovieCard';

const MoviesList = () => {

    const [page, setPage] = useState(1);

    const moviesQuery = useQuery({
        queryKey: ['getMovies', page],
        queryFn: () => getMovies({
            page: page,
            perPage: 4,
        }),
        enabled: page > 0,
    })

    const movies = moviesQuery.data?.items || [];


  return (
    <div className={css['moviesList']}>
      <ul>{movies.map((movie, i) => {
         return <li key={i}>
            <MovieCard movie={movie}/>
         </li>
      })}</ul>
      <button onClick={() => setPage(page + 1)}>Next Page</button>
      <button onClick={() => setPage(page - 1)}>Prev Page</button>
    </div>
  );
};

export default MoviesList;