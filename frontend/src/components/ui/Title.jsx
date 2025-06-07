import React from 'react';

/**
 * Reusable Title component for consistent headings
 * @param {Object} props - Component props
 * @param {string} props.level - Heading level (h1, h2, h3, h4, h5, h6)
 * @param {React.ReactNode} props.children - Title content
 * @param {string} props.className - Additional CSS classes
 */
function Title({ level = 'h1', children, className }) {
  const Tag = level;
  
  return (
    <Tag className={`title ${level} ${className || ''}`}>
      {children}
    </Tag>
  );
}

export default Title;
