import { useState } from 'react';
import css from './CarsList.module.css';
import { useQuery } from '@tanstack/react-query';
import { getCars } from '../../services/carsService';
import CarCard from './CarCard/CarCard';

const CarsList = () => {

    const [page, setPage] = useState(1);

    const carsQuery = useQuery({
        queryKey: ['getCars', page],
        queryFn: () => getCars({
            page: page,
            perPage: 4
        }),
        enabled: page > 0,
    })

    const cars = carsQuery.data?.items || [];


    const hasNextPage = carsQuery.data?.hasNextPage ?? false;
    const hasPreviousPage = carsQuery.data?.hasPreviousPage ?? page > 1;

  return (
    <div className={css['carsList']}>
          <div className={css['topRow']}>
              <h2 className={css['title']}>Cars</h2>
              <span className={css['pageBadge']}>Page {page}</span>
          </div>
          {carsQuery.isLoading && <p className={css['status']}>Loading cars...</p>}
          {carsQuery.isError && <p className={css['status']}>Failed to load cars.</p>}
      <ul className={css['list']}>{cars.map((car) => {
         return <li className={css['item']} key={car._id}>
            <CarCard car={car}/>
         </li>
      })}</ul>
          <div className={css['actions']}>
              <button
                  className={css['button']}
                  type='button'
                  onClick={() => setPage(page - 1)}
                  disabled={!hasPreviousPage || carsQuery.isLoading}
              >
                  Prev Page
              </button>
              <button
                  className={css['button']}
                  type='button'
                  onClick={() => setPage(page + 1)}
                  disabled={!hasNextPage || carsQuery.isLoading}
              >
                  Next Page
              </button>
          </div>
    </div>
  );
};

export default CarsList;
