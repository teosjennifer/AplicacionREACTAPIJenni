import React from 'react';
import Button from './Button';

/**
 * Reusable Card component for displaying course information
 * @param {Object} props - Component props
 * @param {Object} props.course - Course data to display
 * @param {function} props.onEdit - Edit handler function
 * @param {function} props.onDelete - Delete handler function
 */
function Card({ course, onEdit, onDelete }) {
  return (
    <div className="card">
      <div className="card-header">
        <h3>{course.curso}</h3>
        <span className="card-badge">{course.tematica}</span>
      </div>
      
      <div className="card-body">
        <p><strong>Instructor:</strong> {course.instructor}</p>
        <p className="description">{course.descripcion}</p>
      </div>
      
      <div className="card-footer">
        <div className="btn-group">
          <Button
            variant="secondary"
            onClick={() => onEdit(course)}
            className="edit-btn"
          >
            Editar
          </Button>
          <Button
            variant="danger"
            onClick={() => onDelete(course.id)}
            className="delete-btn"
          >
            Eliminar
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Card;
