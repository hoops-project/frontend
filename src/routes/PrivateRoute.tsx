import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useToast } from '../hooks/useToast';

const PrivateRoute: React.FC = () => {
  const { toastError } = useToast();
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem('Access-Token');

  useEffect(() => {
    if (!isAuthenticated) {
      toastError('로그인을 진행해주세요!');
      navigate('/sign-in');
    }
  }, [isAuthenticated, toastError, navigate]);

  if (!isAuthenticated) {
    return null;
  }

  return <Outlet />;
};

export default PrivateRoute;
