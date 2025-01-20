import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { ChatPage } from './pages/Chat.page';
import HoverNavbar from './components/Navbar/hover-navbar';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path:'/chat/:id',
    element: <ChatPage />,
  }
]);

export function Router() {
    return (
      <div className="flex">
        <HoverNavbar />
        <div className="flex-grow">
          <RouterProvider router={router} />
        </div>
      </div>
    );
  }
