import { useState } from 'react';

function CourseForm({ onAddCourse }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCourse({ name, description });
    setName('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="course-form">
      <input
        type="text"
        placeholder="Nombre del curso"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <textarea
        placeholder="Descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit">Agregar Curso</button>
    </form>
  );
}

export default CourseForm;
