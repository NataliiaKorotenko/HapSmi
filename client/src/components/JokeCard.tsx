import React from 'react';

interface JokeCardProps {
  joke: string;
}

const JokeCard: React.FC<JokeCardProps> = ({ joke }) => {
  return (
    <div style={styles.card}>
      <p>{joke}</p>
    </div>
  );
};

const styles = {
  card: {
    padding: '1rem',
    margin: '1rem auto',
    maxWidth: '600px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  } as React.CSSProperties,
};

export default JokeCard;