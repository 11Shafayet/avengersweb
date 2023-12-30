import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';

import Home from '../pages/Home';
import AllBlogs from '../pages/AllBlogs';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import Register from '../pages/Register';

// admin routes
import AdminLayout from '../MainLayout/AdminLayout';
import MyBlogs from '../admin/pages/MyBlogs';
import AddBlog from '../admin/pages/AddBlog';
import AllUsers from '../admin/pages/AllUsers';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/allblogs',
        element: <AllBlogs />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
  // admin routes
  {
    path: '/dashboard',
    element: <AdminLayout />,
    children: [
      {
        path: '/dashboard',
        element: (
          <PrivateRoute>
            <MyBlogs />
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/add-blog',
        element: (
          <PrivateRoute>
            <AddBlog />
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/all-users',
        element: (
          <PrivateRoute>
            <AllUsers />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
