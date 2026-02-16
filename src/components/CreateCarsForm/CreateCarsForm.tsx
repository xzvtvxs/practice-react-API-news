import { useMutation, useQueryClient } from '@tanstack/react-query';
import css from './CreateCarsForm.module.css';
import type { CreateCarsBody } from '../../types/cars';
import { createCar } from '../../services/carsService';

const CreateCarsForm = () => {

    const queryClient = useQueryClient();

    const createMutation = useMutation({
        mutationKey: ['createCar'],
        mutationFn: (carBody: CreateCarsBody) => createCar(carBody),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['getCars'],
            })
        }
    })

    const handlelSubmit = (formData: FormData) => {
        const makeValue = formData.get('make') as string;
        const modelValue = formData.get('model') as string;
        const yearValue = Number(formData.get('year'));
        const colorValue = formData.get('color') as string;
        const priceValue = Number(formData.get('price'));
        const mileageValue = Number(formData.get('mileage'));
        const fuelTypeValue = formData.get('fuelType') as string;
        const descriptionValue = formData.get('description') as string;

        const allValue = {
            make: makeValue,
            model: modelValue,
            year: yearValue,
            color: colorValue,
            price: priceValue,
            mileage: mileageValue,
            fuelType: fuelTypeValue,
            description: descriptionValue,
        }

        createMutation.mutate(allValue)
    }
  return (
    <div className={css['createCarsForm']}>
          <h2 className={css['title']}>Create Car</h2>
          <form action={handlelSubmit} className={css['form']}>
              <input className={css['input']} type='text' name='make' placeholder='make: string' required />
              <input className={css['input']} type='text' name='model' placeholder='model: string' required />
              <input className={css['input']} type='number' name='year' placeholder='year: number' required />
              <input className={css['input']} type='text' name='color' placeholder='color: string' required />
              <input className={css['input']} type='number' name='price' placeholder='price: number' required />
              <input className={css['input']} type='number' name='mileage' placeholder='mileage: number' required />
              <input className={css['input']} type='text' name='fuelType' placeholder='fuelType: string' required />
              <textarea className={css['textarea']} name='description' placeholder='description: string' rows={3} />
              <button className={css['submitButton']} type='submit'>
                  {createMutation.isPending ? 'Saving...' : 'Submit'}
              </button>
      </form>
    </div>
  );
};

export default CreateCarsForm;
