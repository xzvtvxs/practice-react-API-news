import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { Song } from '../../../types/songs';
import css from './SongCard.module.css';
import { deleteSong } from '../../../services/songsService';
interface SongCardProps{
  song: Song,
}
const SongCard = ({ song }: SongCardProps) => {

  const queryClient = useQueryClient();
  
  const songsMutation = useMutation({
    mutationKey: ['onDelete'],
    mutationFn: (songId: string) => deleteSong(songId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['getSongs']
      })
    }
  })

  const handleDelete = () => {
    songsMutation.mutate(song._id)
  } 

  return (
    <div className={css['songCard']}>
      <p>{song.artist} {song.title}</p>
      <button type='button' onClick={handleDelete}>Delite</button>
    </div>
  );
};

export default SongCard;