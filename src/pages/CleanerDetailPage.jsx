import React from 'react';
import { useParams } from 'react-router-dom';
import CleanerProfile from '../components/profile/CleanerProfile';

const CleanerDetailPage = () => {
  const { cleanerId } = useParams();

  return (
    <div className="cleaner-detail-page">
      <CleanerProfile cleanerId={cleanerId} />
    </div>
  );
};

export default CleanerDetailPage;
