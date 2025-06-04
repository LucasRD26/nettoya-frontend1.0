import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { NotificationProvider } from './contexts/NotificationContext';
import PrivateRoute from './components/PrivateRoute';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import Loader from './components/layout/Loader';

// Pages
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import CleanerDetailPage from './pages/CleanerDetailPage';
import SearchPage from './pages/SearchPage';
import LocationPage from './pages/LocationPage';
import BookingsPage from './pages/BookingsPage';
import NotFoundPage from './pages/NotFoundPage';
import BookingsNewPage from './pages/BookingsNewPage';


import './App.css';

// ... imports previos
import DashboardPage from './pages/DashboardPage';
import CleanersPage from './pages/CleanersPage';
import RatingsPage from './pages/RatingsPage';
import NotificationsPage from './pages/NotificationsPage';

const App = () => (
  <AuthProvider>
    <NotificationProvider>
      <BrowserRouter>
        <Navbar />
        <div className="main-layout">
          <Sidebar />
          <main className="main-content">
            <React.Suspense fallback={<Loader />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/location" element={<LocationPage />} />
                <Route path="/cleaners/:cleanerId" element={<CleanerDetailPage />} />
                
                {/* Rutas Protegidas */}
                <Route element={<PrivateRoute />}>
                  <Route path="/dashboard" element={<DashboardPage />} />
                  <Route path="/cleaners" element={<CleanersPage />} />
                  <Route path="/ratings" element={<RatingsPage />} />
                  <Route path="/notifications" element={<NotificationsPage />} />
                  <Route path="/profile" element={<ProfilePage />} />
                  <Route path="/bookings/*" element={<BookingsPage />} />
                  <Route path="/bookings/new" element={<BookingsNewPage />} />
                </Route>

                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </React.Suspense>
          </main>
        </div>
      </BrowserRouter>
    </NotificationProvider>
  </AuthProvider>
);


export default App;
