import { useState } from 'react';
import LessonCard from './LessonCard/LessonCard';
import css from './LessonsList.module.css';
import { useQuery } from '@tanstack/react-query';
import { getLessons } from '../../services/lessonsService';

const LessonsList = () => {

  const [page, setPage] = useState(1)

  const lessonsQuery = useQuery({
    queryKey: ['getLessons', page],
    queryFn: () => getLessons({
      page: page,
      perPage: 3
    }),
    enabled: page > 0,
  })

  const lessons = lessonsQuery.data?.items || [];
  return (
    <div className={css['lessonsList']}>
      <ul>{lessons.map((lesson, i) => {
         return <li key={i}>
            <LessonCard lesson={lesson}/>
         </li>
      })}</ul>
      <button onClick={() => setPage(page + 1)}>Next page</button>
      <button onClick={() => setPage(page - 1)}>Prev page</button>
    </div>
  );
};

export default LessonsList;