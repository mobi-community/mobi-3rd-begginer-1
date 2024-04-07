import { createBrowserRouter } from 'react-router-dom';
// import App from '../../App';
import MainPage from '../../pages/mainPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
]);

export default router;
