import React from 'react';

/**
 * Message component for displaying notifications
 * @param {Object} props - Component props
 * @param {string} props.type - Message type (info, success, warning, error)
 * @param {React.ReactNode} props.children - Message content
 */
function Message({ type = 'info', children }) {
  return (
    <div className={`message message-${type}`}>
      {type === 'error' && <span className="message-icon">❌</span>}
      {type === 'success' && <span className="message-icon">✅</span>}
      {type === 'warning' && <span className="message-icon">⚠️</span>}
      {type === 'info' && <span className="message-icon">ℹ️</span>}
      <div className="message-content">{children}</div>
    </div>
  );
}

export default Message;
