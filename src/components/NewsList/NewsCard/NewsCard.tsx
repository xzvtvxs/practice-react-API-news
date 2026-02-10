import type { Articles } from '../../../types/news';
import css from './NewsCard.module.css';
interface NewsCardProps{
    article: Articles,
}
const NewsCard = ({article}:NewsCardProps) => {
  return (
    <div className={css['newsCard']}>
          <p>{article.author} {article.title}</p>
    </div>
  );
};

export default NewsCard;