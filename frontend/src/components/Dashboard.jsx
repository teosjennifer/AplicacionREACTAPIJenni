import { useState } from 'react';

function Dashboard() {
  const [courses, setCourses] = useState([]);
  const [form, setForm] = useState({
    name: '',
    instructor: '',
    duration: '',
    level: 'Básico',
    description: ''
  });
  const [isEditing, setIsEditing] = useState(false);
  const [currentEditIndex, setCurrentEditIndex] = useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      const updatedCourses = [...courses];
      updatedCourses[currentEditIndex] = form;
      setCourses(updatedCourses);
      setIsEditing(false);
      setCurrentEditIndex(null);
    } else {
      setCourses([...courses, form]);
    }
    setForm({ name: '', instructor: '', duration: '', level: 'Básico', description: '' });
  };

  const handleEdit = (index) => {
    setForm(courses[index]);
    setIsEditing(true);
    setCurrentEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedCourses = courses.filter((_, i) => i !== index);
    setCourses(updatedCourses);
    if (isEditing && index === currentEditIndex) {
      setForm({ name: '', instructor: '', duration: '', level: 'Básico', description: '' });
      setIsEditing(false);
      setCurrentEditIndex(null);
    }
  };

  return (
    <div className="dashboard container">
      <h2>Gestión de Cursos</h2>

      <form className="course-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre del curso"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="instructor"
          placeholder="Instructor"
          value={form.instructor}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="duration"
          placeholder="Duración (e.g. 4 semanas)"
          value={form.duration}
          onChange={handleChange}
          required
        />
        <select name="level" value={form.level} onChange={handleChange}>
          <option value="Básico">Básico</option>
          <option value="Intermedio">Intermedio</option>
          <option value="Avanzado">Avanzado</option>
        </select>
        <textarea
          name="description"
          placeholder="Descripción breve del curso"
          value={form.description}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">{isEditing ? 'Actualizar Curso' : 'Agregar Curso'}</button>
      </form>

      <ul>
        {courses.map((course, index) => (
          <li key={index}>
            <h3>{course.name}</h3>
            <p><strong>Instructor:</strong> {course.instructor}</p>
            <p><strong>Duración:</strong> {course.duration}</p>
            <p><strong>Nivel:</strong> {course.level}</p>
            <p>{course.description}</p>
            <div className="btn-group">
              <button onClick={() => handleEdit(index)} className="edit">Editar</button>
              <button onClick={() => handleDelete(index)} className="delete">Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
