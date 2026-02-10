import css from './CreateForm.module.css';
interface CreateFormProps{
    
}
const CreateForm = ({ }: CreateFormProps) => {
    
    const handleSubmit = (formData: FormData) => {
        const titleValue = formData.get('title') as string;
        const descrValue = formData.get('description') as string;

        const allValue = {
            title: titleValue,
            description: descrValue,
        }

    }

  return (
    <div className={css['createForm']}>
          <form action={}>
              
      </form>
    </div>
  );
};

export default CreateForm;