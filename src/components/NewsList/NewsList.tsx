import type { Articles } from '../../types/news';
import NewsCard from './NewsCard/NewsCard';
import css from './NewsList.module.css';
interface NewsListProps{
    news: Articles[],
}
const NewsList = ({news}:NewsListProps) => {
  return (
    <div className={css['newsList']}>
      <ul>{news.map((article, i) => {
         return <li key={i}>
             <NewsCard article={article} />
         </li>
      })}</ul>
    </div>
  );
};

export default NewsList;