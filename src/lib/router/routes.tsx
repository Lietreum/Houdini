import React from 'react';
import type { PathRouteProps } from 'react-router-dom';

const Home = React.lazy(() => import('@/lib/pages/home'));
const Crud = React.lazy(() => import('@/lib/pages/crud/index'));

export const routes: Array<PathRouteProps> = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/gateaway',
    element: <Crud />,
  },
];

export const privateRoutes: Array<PathRouteProps> = [];
