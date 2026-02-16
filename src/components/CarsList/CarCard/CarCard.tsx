import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { Car } from '../../../types/cars';
import css from './CarCard.module.css';
import { deleteCar } from '../../../services/carsService';
interface CarCardProps{
    car: Car,
}
const CarCard = ({ car }: CarCardProps) => {
    
    const queryClient = useQueryClient();

    const carsMutation = useMutation({
        mutationKey: ['onDelite'],
        mutationFn: (carId: string) => deleteCar(carId),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['getCars']
            })
        }
    })

    const handleDelete = () => {
        carsMutation.mutate(car._id)
    }

  return (
    <div className={css['carCard']}>
          <div className={css['header']}>
              <h3 className={css['name']}>{car.make} {car.model}</h3>
              <span className={css['year']}>{car.year}</span>
          </div>
          <p className={css['description']}>{car.description}</p>
          <div className={css['meta']}>
              <span>{car.color}</span>
              <span>{car.fuelType}</span>
              <span>{car.mileage.toLocaleString()} km</span>
          </div>
          <div className={css['footer']}>
              <strong className={css['price']}>${car.price.toLocaleString()}</strong>
              <button
                  className={css['deleteButton']}
                  type='button'
                  onClick={handleDelete}
                  disabled={carsMutation.isPending}
              >
                  {carsMutation.isPending ? 'Deleting...' : 'Delete'}
              </button>
          </div>
    </div>
  );
};

export default CarCard;
