import React from 'react';
import CleanerSearch from '../components/cleaners/CleanerSearch';
import TopCleaners from '../components/cleaners/TopCleaners';

const CleanersPage = () => (
  <div className="cleaners-page">
    <h1>Encuentra Limpiadores</h1>
    <CleanerSearch />
    <section className="top-cleaners">
      <h2>Los Mejores Valorados</h2>
      <TopCleaners />
    </section>
  </div>
);

export default CleanersPage;
