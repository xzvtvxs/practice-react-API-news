import { useMutation, useQueryClient } from '@tanstack/react-query';
import css from './CreateForm.module.css';
import { createSong } from '../../services/songsService';
import type { CreateSongBody } from '../../types/songs';
import type { CreateLessonsParams } from '../../types/lessons';
import { createLessons } from '../../services/lessonsService';

const CreateForm = () => {

  const queryClient = useQueryClient();
  
  const lessonsMutation = useMutation({
    mutationKey: ['createLesson'],
    mutationFn: (lessonBody: CreateLessonsParams) => createLessons(lessonBody),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['getLessons'],
      })
    }
  })


  const handlelSubmit = (formData: FormData) => {
    const titleValue = formData.get('title') as string;
    const subjectValue = formData.get('subject') as string;
    const levelValue = formData.get('level') as string;
    const teacherValue = formData.get('teacher') as string;
    const durationMinutesValue = Number(formData.get('durationMinutes'));
    const publishedAtValue = formData.get('publishedAt') as string;
    const summaryValue = formData.get('summary') as string;

    const allValue = {
      title: titleValue,
      subject: subjectValue,
      level: levelValue,
      teacher: teacherValue,
      durationMinutes: durationMinutesValue,
      publishedAt: publishedAtValue,
      summary: summaryValue,
    };

    lessonsMutation.mutate(allValue)
  }

  return (
    <div className={css['createForm']}>
      <form action={handlelSubmit}>
        <input type='text' name='title'/>
        <input type='text' name='subject'/>
        <input type='text' name='level'/>
        <input type='text' name='teacher'/>
        <input type='number' name='durationMinutes'/>
        <input type='text' name='publishedAt'/>
        <input type='text' name='summary' />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default CreateForm;
