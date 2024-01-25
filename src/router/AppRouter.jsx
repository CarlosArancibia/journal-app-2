import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { JournalRoutes } from '../journal/routes/JournalRoutes';
import { Spinner } from '../ui/Spinner';
import { useCheckAuth } from '../hooks/useCheckAuth';

export const AppRouter = () => {
  const { status } = useCheckAuth();
  if (status === 'checking') return <Spinner />;

  return (
    <Routes>
      {status === 'not-authenticated' ? (
        <Route path="auth/*" element={<AuthRoutes />} />
      ) : (
        <Route path="/*" element={<JournalRoutes />} />
      )}

      <Route path="/*" element={<Navigate to={'/auth/login'} />} />
    </Routes>
  );
};
