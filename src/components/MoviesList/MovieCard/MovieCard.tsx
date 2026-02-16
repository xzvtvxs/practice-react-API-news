import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { Movie } from '../../../types/movies';
import css from './MovieCard.module.css';
import { deleteMovie } from '../../../services/moviesService';
interface MovieCardProps{
    movie: Movie,
}
const MovieCard = ({ movie }: MovieCardProps) => {
    
    const queryClient = useQueryClient();

    const movieMutation = useMutation({
        mutationKey: ['onDelete'],
        mutationFn: (movieId: string) => deleteMovie(movieId),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['getMovies']
            })
        }
    })

    const handleDelete = () => {
        movieMutation.mutate(movie._id)
    }

  return (
    <div className={css['movieCard']}>
          <p>{movie.title} {movie.director}</p>
          <button type='button' onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default MovieCard;