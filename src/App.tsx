import { useEffect, useState } from 'react';
import css from './App.module.css';
import type { Articles } from './types/news';
import NewsList from './components/NewsList/NewsList';
import { getNews } from './services/news.service';

const App = () => {

  const [news, setNews] = useState<Articles[]>([]);

  useEffect(() => {
     async function fetchData() {
       const data = await getNews({ q: "Bitcoin", pageSize: 10});
        setNews(data.articles);
     }
     
     fetchData();
  }, []);

  return (
    <div className={css['app']}>
      <NewsList news={news}/>
    </div>
  );
};

export default App;