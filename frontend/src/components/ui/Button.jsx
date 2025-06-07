import React from 'react';

/**
 * Reusable button component with different variants
 * @param {Object} props - Component props
 * @param {string} props.variant - Button variant (primary, secondary, danger)
 * @param {string} props.type - Button type (button, submit, reset)
 * @param {function} props.onClick - Click handler function
 * @param {boolean} props.disabled - Disabled state
 * @param {React.ReactNode} props.children - Button label/content
 */
function Button({ variant = 'primary', type = 'button', onClick, disabled, children, className }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`btn btn-${variant} ${className || ''}`}
    >
      {children}
    </button>
  );
}

export default Button;
