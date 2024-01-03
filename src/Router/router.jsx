import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import MarketingLayout from '../MainLayout/MarketingLayout';

import Login from '../pages/Login';
import Register from '../pages/Register';
import PrivateRoute from './PrivateRoute';

// marketing routes
import MarketingAdmin from '../marketing/pages/MarketingAdmin';
import LeadCollector from '../marketing/pages/LeadCollector';
import Caller from '../marketing/pages/Caller';
import AddLead from '../marketing/pages/AddLead';
import EditLead from '../marketing/pages/EditLead';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
  // marketing routes
  {
    path: '/marketing',
    element: <MarketingLayout />,
    children: [
      {
        path: '/marketing',
        element: (
          // <PrivateRoute>
          <MarketingAdmin />
          // </PrivateRoute>
        ),
      },
      {
        path: '/marketing/lead-collector',
        element: (
          // <PrivateRoute>
          <LeadCollector />
          // </PrivateRoute>
        ),
      },
      {
        path: '/marketing/lead-collector/add',
        element: (
          // <PrivateRoute>
          <AddLead />
          // </PrivateRoute>
        ),
      },
      {
        path: '/marketing/lead-collector/edit',
        element: (
          // <PrivateRoute>
          <EditLead />
          // </PrivateRoute>
        ),
      },
      {
        path: '/marketing/caller',
        element: (
          // <PrivateRoute>
          <Caller />
          // </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
