import React from 'react';
import styles from './MessageContainer.module.css';

interface DiscountCardProps {
  eventName: string;
  message: string;
  customStyle?: string;
}

const MessageContainer: React.FC<DiscountCardProps> = ({ eventName, message, customStyle }) => {
  const containerClass = customStyle && styles[customStyle] ? styles[customStyle] : styles.messageContiner_Wrapper;

  return (
    <div className={containerClass}>
      <h1 className={styles.messageContainer_header}>{eventName}</h1>
      <p className={styles.messageContainer_para}>{message}</p>
    </div>
  );
};

export default MessageContainer;