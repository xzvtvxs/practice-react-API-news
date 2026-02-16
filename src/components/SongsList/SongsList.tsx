import { useQuery } from '@tanstack/react-query';
import SongCard from './SongCard/SongCard';
import css from './SongsList.module.css';
import { getSongs } from '../../services/songsService';
import { useState } from 'react';


const SongsList = () => {

  const [page, setPage] = useState(1)

  const songsQuery = useQuery({
    queryKey: ['getSongs', page],
    queryFn: () => getSongs({
      page: page,
      perPage: 2
    }),
    enabled: page > 0, 
  })

  const songs = songsQuery.data?.items || [];


    
  return (
    <div className={css['songsList']}>
      <ul>{songs.map((song, i) => {
         return <li key={i}>
            <SongCard song={song}/>
         </li>
      })}</ul>
      <button onClick={() => setPage(page + 1)}> Nex page</button>
      <button onClick={() => setPage(page - 1)}> Prev page</button>
    </div>
  );
};

export default SongsList;