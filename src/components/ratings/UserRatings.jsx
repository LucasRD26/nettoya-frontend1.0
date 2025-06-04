import React, { useEffect, useState } from 'react';
import RatingService from '../../api/ratings';
import Loader from '../layout/Loader';
import StarRating from '../ratings/StarRating';

const UserRatings = () => {
  const [ratings, setRatings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRatings = async () => {
      try {
        const data = await RatingService.getUserRatings();
        setRatings(data);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };
    fetchRatings();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="user-ratings">
      {ratings.length === 0 ? (
        <p>No has realizado calificaciones aún.</p>
      ) : (
        <ul>
          {ratings.map(rating => (
            <li key={rating.id}>
              <strong>Limpiador:</strong> {rating.cleaner?.nombre} {rating.cleaner?.apellido} <br />
              <StarRating rating={rating.valor} readOnly />
              <div><em>{rating.comentario}</em></div>
              <span>{new Date(rating.fecha).toLocaleDateString()}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserRatings;
