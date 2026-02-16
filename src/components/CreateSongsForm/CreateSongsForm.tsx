import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createSong } from '../../services/songsService';
import type { CreateSongBody } from '../../types/songs';
import css from './CreateSongsForm.module.css';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from "yup";


const SongSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, '> 2')
    .max(10, '<= 10')
    .required('!'),
  artist: Yup.string()
    .min(2, '>2')
    .max(10, '>= 10')
    .required('!'),
  album: Yup.string()
    .min(2, '> 2')
    .max(10, '>= 10')
    .required('1'),
 });


interface FormValues {
  title: string,
  artist: string,
  album: string,
}


const initialValues = {
      title: '',
      artist: '',
      album: '',
}

const CreateSongsForm = () => {



    const queryClient = useQueryClient();
    
    const songsMutation = useMutation({
    mutationKey: ['createSong'],
    mutationFn: (songBody: CreateSongBody) => createSong(songBody),
    onSuccess: () => {
        console.log('good');
        queryClient.invalidateQueries({
            queryKey: ['getSongs'],
        })
      
    }
  });

  const handleSubmit = (values: FormValues) => { 

        const allValue = {
            title: values.title,
            artist: values.artist,
            album: values.album,
            genre: "string",
            "releaseYear": 2015,
            "durationSeconds": 2,
            "label": "string",
            "language": "string",

        }

        songsMutation.mutate(allValue);
    };
  return (
    <div className={css['createSongsForm']}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={SongSchema}>
          <Form>
          <Field type='text' name='title' />
          <ErrorMessage component={'span'} name='title' className={css['error']}/>
              <Field type='text' name='artist'/>
              <Field type='text' name='album' />
              <button type='submit'>Submit</button>
        </Form>
        </Formik>
    </div>
  );
};

export default CreateSongsForm;



