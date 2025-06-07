import { useState } from 'react';
import toast from 'react-hot-toast';

const API_URL = 'https://retoolapi.dev/6QbyzP/cursos-online';

/**
 * Custom hook for handling course data CRUD operations
 * @returns {Object} - Functions for creating, updating, and deleting course data
 */
export const useCourseData = () => {
  const [loading, setLoading] = useState(false);

  /**
   * Create a new course
   * @param {Object} courseData - The course data to create
   * @returns {Promise} - Promise that resolves to the created course data
   */
  const createCourse = async (courseData) => {
    setLoading(true);
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(courseData),
      });

      if (!response.ok) {
        throw new Error('Error al crear el curso');
      }

      const result = await response.json();
      toast.success('Curso creado con éxito!');
      return result;
    } catch (error) {
      toast.error(`Error: ${error.message}`);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  /**
   * Update an existing course
   * @param {number} id - The ID of the course to update
   * @param {Object} courseData - The updated course data
   * @returns {Promise} - Promise that resolves to the updated course data
   */
  const updateCourse = async (id, courseData) => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(courseData),
      });

      if (!response.ok) {
        throw new Error('Error al actualizar el curso');
      }

      const result = await response.json();
      toast.success('Curso actualizado con éxito!');
      return result;
    } catch (error) {
      toast.error(`Error: ${error.message}`);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  /**
   * Delete a course
   * @param {number} id - The ID of the course to delete
   * @returns {Promise} - Promise that resolves when the course is deleted
   */
  const deleteCourse = async (id) => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Error al eliminar el curso');
      }

      toast.success('Curso eliminado con éxito!');
      return true;
    } catch (error) {
      toast.error(`Error: ${error.message}`);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    createCourse,
    updateCourse,
    deleteCourse,
  };
};
