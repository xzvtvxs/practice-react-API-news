// import css from './App.module.css';
// import LessonsList from './components/LessonsList/LessonsList';
// import CreateForm from './components/CreateForm/CreateForm';

// const App = () => {


//   return (
//     <div className={css['app']}>
//       <CreateForm />
//       <LessonsList />
//     </div>
//   );
// };

// export default App;

// import { useEffect, useState } from 'react';
// import css from './App.module.css';
// import type { CreateTodosBody, Todo } from './types/todos';
// import { createTodos, deliteTodos, getTodos } from './services/todosService';
// import TodosList from './components/TodosList/TodosList';
// import CreateTodosForm from './components/CreateTodosForm/CreateTodosForm';

// const App = () => {


//   return (
//     <div className={css['app']}>
//       <CreateTodosForm />
//       <TodosList />
//     </div>
//   );
// };

// export default App;


// import { useEffect, useState } from 'react';
// import css from './App.module.css';
// import type { CreateSongBody, Song } from './types/songs';
// import { createSong, deleteSong, getSongs } from './services/songsService';
// import SongsList from './components/SongsList/SongsList';
// import CreateSongsForm from './components/CreateSongsForm/CreateSongsForm';

// const App = () => {


  

//   return (
//     <div className={css['app']}>
//       <CreateSongsForm />
//       <SongsList />
//     </div>
//   );
// };

// export default App;

// import css from './App.module.css';
// import CarsList from './components/CarsList/CarsList';
// import CreateCarsForm from './components/CreateCarsForm/CreateCarsForm';

// const App = () => {
//   return (
//     <div className={css['app']}>
//       <CreateCarsForm />
//       <CarsList/>
//     </div>
//   );
// };

// export default App;

import css from './App.module.css';
import CreateMoviesForm from './components/CreateMoviesForm/CreateMoviesForm';
import MoviesList from './components/MoviesList/MoviesList';

const App = () => {
  return (
    <div className={css['app']}>
      <MoviesList />
      <CreateMoviesForm/>
    </div>
  );
};

export default App;