import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Board from './pages/Board';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Root from './pages/Root';
import './board.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: 'board', element: <Board />}
    ]
  },
  {
    path: "/board",
    element: <Board />
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
