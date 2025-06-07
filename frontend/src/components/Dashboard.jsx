import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import CourseForm from './CourseForm';
import Card from './ui/Card';
import Title from './ui/Title';
import Message from './ui/Message';
import Modal from './ui/Modal';
import Button from './ui/Button';
import { useFetchData } from '../hooks/useFetchData';
import { useCourseData } from '../hooks/useCourseData';

function Dashboard() {
  const API_URL = 'https://retoolapi.dev/6QbyzP/cursos-online';
  
  const [isEditing, setIsEditing] = useState(false);
  const [currentEditItem, setCurrentEditItem] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [deleteModal, setDeleteModal] = useState({
    isOpen: false,
    courseId: null,
    courseName: ''
  });
  
  // Use our custom hooks
  const { data: courses, loading, error, refetch } = useFetchData(API_URL);
  const { loading: mutationLoading, createCourse, updateCourse, deleteCourse } = useCourseData();

  // Form submission handler for creating or updating courses
  const handleFormSubmit = async (data) => {
    if (isEditing && currentEditItem) {
      await updateCourse(currentEditItem.id, data);
    } else {
      await createCourse(data);
    }
    setShowForm(false);
    setIsEditing(false);
    setCurrentEditItem(null);
    refetch();
  };

  // Handler for editing a course
  const handleEdit = (course) => {
    setCurrentEditItem(course);
    setIsEditing(true);
    setShowForm(true);
  };

  // Open delete confirmation modal
  const openDeleteModal = (id, courseName) => {
    setDeleteModal({
      isOpen: true,
      courseId: id,
      courseName: courseName
    });
  };

  // Close delete confirmation modal
  const closeDeleteModal = () => {
    setDeleteModal({
      isOpen: false,
      courseId: null,
      courseName: ''
    });
  };

  // Handler for confirming course deletion
  const handleDeleteConfirm = async () => {
    if (deleteModal.courseId) {
      await deleteCourse(deleteModal.courseId);
      refetch();
      if (isEditing && currentEditItem?.id === deleteModal.courseId) {
        setShowForm(false);
        setIsEditing(false);
        setCurrentEditItem(null);
      }
      closeDeleteModal();
    }
  };
  
  // Handler for canceling form edit/create
  const handleCancel = () => {
    setShowForm(false);
    setIsEditing(false);
    setCurrentEditItem(null);
  };

  return (
    <div className="dashboard-container">
      {/* Toast notifications container */}
      <Toaster position="top-right" toastOptions={{
        duration: 3000,
        style: { background: '#ff6b9e', color: 'white' },
      }} />
      
      {/* Delete confirmation modal */}
      <Modal
        isOpen={deleteModal.isOpen}
        onClose={closeDeleteModal}
        title="Confirmar Eliminación"
        actions={
          <>
            <Button variant="text" onClick={closeDeleteModal}>Cancelar</Button>
            <Button variant="danger" onClick={handleDeleteConfirm}>Eliminar</Button>
          </>
        }
      >
        <p>¿Estás seguro de que deseas eliminar el curso <strong>"{deleteModal.courseName}"</strong>?</p>
        <p className="mt-2 text-danger">Esta acción no se puede deshacer.</p>
      </Modal>

      <div className="dashboard-header">
        <Title level="h1">Gestión de Cursos Online</Title>
        
        {!showForm && (
          <button 
            className="btn btn-primary" 
            onClick={() => setShowForm(true)}
          >
            Nuevo Curso
          </button>
        )}
      </div>

      {/* Show form when adding new course or editing */}
      {showForm && (
        <div className="form-container">
          <div className="form-header">
            <Title level="h2">{isEditing ? 'Editar Curso' : 'Agregar Nuevo Curso'}</Title>
            <button className="btn btn-text" onClick={handleCancel}>✖</button>
          </div>
          
          <CourseForm 
            onSubmit={handleFormSubmit} 
            initialValues={currentEditItem} 
            buttonText={isEditing ? 'Actualizar Curso' : 'Agregar Curso'}
          />
        </div>
      )}

      {/* Loading state */}
      {(loading || mutationLoading) && <p className="loading">Cargando...</p>}
      
      {/* Error state */}
      {error && <Message type="error">Error al cargar los cursos: {error}</Message>}

      {/* Empty state */}
      {!loading && !error && courses.length === 0 && (
        <div className="empty-state">
          <p>No hay cursos disponibles. ¡Agrega tu primer curso!</p>
        </div>
      )}

      {/* Course list */}
      {!loading && !error && courses.length > 0 && (
        <div className="cards-container">
          {courses.map((course) => (
            <Card
              key={course.id}
              course={course}
              onEdit={handleEdit}
              onDelete={() => openDeleteModal(course.id, course.curso)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Dashboard;
