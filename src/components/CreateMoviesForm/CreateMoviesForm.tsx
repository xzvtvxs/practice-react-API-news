import { useMutation, useQueryClient } from '@tanstack/react-query';
import css from './CreateMoviesForm.module.css';
import type { CreateMovieBody } from '../../types/movies';
import { createMovie } from '../../services/moviesService';

const CreateMoviesForm = () => {

    const queryClient = useQueryClient();

    const createMutation = useMutation({
        mutationKey: ['createMovie'],
        mutationFn: (movieBody: CreateMovieBody) => createMovie(movieBody),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['getMovies'],
            })
        }
    })

    const handlelSubmit = (formData: FormData) => {

        const titleValue = formData.get('title') as string;
        const directorValue = formData.get('director') as string;
        const genreValue = formData.get('genre') as string;
        const releaseYearValue = Number(formData.get('releaseYear'));
        const ratingValue = Number(formData.get('rating'));
        const durationMinutesValue = Number(formData.get('durationMinutes'));
        const languageValue = formData.get('language') as string;
        const summaryValue = formData.get('summary') as string;

        const allValue = {
            title: titleValue,
            director: directorValue,
            genre: genreValue,
            releaseYear: releaseYearValue,
            rating: ratingValue,
            durationMinutes: durationMinutesValue,
            language: languageValue,
            summary: summaryValue,
        }

        createMutation.mutate(allValue)
    }
  return (
    <div className={css['createMoviesForm']}>
          <form action={handlelSubmit}>
              <input type='text' name='title' placeholder='string'/>
              <input type='text' name='director' placeholder='string'/>
              <input type='text' name='genre' placeholder='string'/>
              <input type='text' name='releaseYear' placeholder='number'/>
              <input type='text' name='rating' placeholder='rating number'/>
              <input type='text' name='durationMinutes' placeholder='number'/>
              <input type='text' name='language' placeholder='string'/>
              <input type='text' name='summary' placeholder='string' />
              <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default CreateMoviesForm;

