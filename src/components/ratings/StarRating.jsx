import React from 'react';

const StarRating = ({ rating = 0, max = 5, onRate, readOnly = false }) => {
  const [hovered, setHovered] = React.useState(null);

  return (
    <div className="star-rating">
      {[...Array(max)].map((_, i) => {
        const value = i + 1;
        return (
          <span
            key={value}
            style={{
              cursor: readOnly ? 'default' : 'pointer',
              color: (hovered ?? rating) >= value ? '#FFD700' : '#ccc',
              fontSize: '1.5rem'
            }}
            onClick={() => !readOnly && onRate?.(value)}
            onMouseEnter={() => !readOnly && setHovered(value)}
            onMouseLeave={() => !readOnly && setHovered(null)}
            role={readOnly ? undefined : 'button'}
            aria-label={`Calificar con ${value} estrellas`}
          >
            ★
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
