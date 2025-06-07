import { useForm } from 'react-hook-form';
import Button from './ui/Button';

function CourseForm({ onSubmit, initialValues = null, buttonText = 'Agregar Curso' }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    defaultValues: initialValues || {
      curso: '',
      tematica: '',
      instructor: '',
      descripcion: ''
    }
  });

  const onFormSubmit = (data) => {
    onSubmit(data);
    if (!initialValues) {
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="course-form">
      <div className="form-group">
        <input
          type="text"
          placeholder="Nombre del curso"
          {...register('curso', { 
            required: 'El nombre del curso es requerido',
            minLength: {
              value: 3,
              message: 'El nombre debe tener al menos 3 caracteres'
            }
          })}
          className={errors.curso ? 'input-error' : ''}
        />
        {errors.curso && <span className="error-message">{errors.curso.message}</span>}
      </div>

      <div className="form-group">
        <input
          type="text"
          placeholder="Temática"
          {...register('tematica', { 
            required: 'La temática es requerida' 
          })}
          className={errors.tematica ? 'input-error' : ''}
        />
        {errors.tematica && <span className="error-message">{errors.tematica.message}</span>}
      </div>

      <div className="form-group">
        <input
          type="text"
          placeholder="Instructor"
          {...register('instructor', { 
            required: 'El nombre del instructor es requerido' 
          })}
          className={errors.instructor ? 'input-error' : ''}
        />
        {errors.instructor && <span className="error-message">{errors.instructor.message}</span>}
      </div>

      <div className="form-group">
        <textarea
          placeholder="Descripción del curso"
          {...register('descripcion', { 
            required: 'La descripción es requerida',
            minLength: {
              value: 10,
              message: 'La descripción debe tener al menos 10 caracteres'
            } 
          })}
          className={errors.descripcion ? 'input-error' : ''}
        />
        {errors.descripcion && <span className="error-message">{errors.descripcion.message}</span>}
      </div>

      <Button 
        type="submit" 
        variant="primary"
        className="submit-btn"
      >
        {buttonText}
      </Button>
    </form>
  );
}

export default CourseForm;
