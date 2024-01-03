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
import AddCaller from '../marketing/pages/AddCaller';
import EditCaller from '../marketing/pages/EditCaller';

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
        path: '/marketing/lead-collector/:id',
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
      {
        path: '/marketing/caller/add',
        element: (
          // <PrivateRoute>
          <AddCaller />
          // </PrivateRoute>
        ),
      },
      {
        path: '/marketing/caller/:id',
        element: (
          // <PrivateRoute>
          <EditCaller />
          // </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
