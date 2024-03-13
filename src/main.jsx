import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App.jsx";
import HomePage from './pages/HomePage.jsx';
import CharacterByList from './pages/CharacterByList.jsx';
import PlanetByList from './pages/PlanetByList.jsx';
import CharacterDetail from './components/CharacterDetail.jsx';
import PlanetDetail from './components/PlanetDetail.jsx';


const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/dragonball/character",
        element: <CharacterByList />,
      },
      {
        path: "/dragonball/planet",
        element: <PlanetByList />,
      },
      {
        path: "/dragonball/character/:id" ,
        element: <CharacterDetail />,
        loader:({params}) => {
          return fetch(`https://dragonball-api.com/api/characters/${params.id}`);
        }
      },
      {
        path: "/dragonball/character/:id" ,
        element: <CharacterDetail />,
        loader:({params}) => {
          return fetch(`https://dragonball-api.com/api/characters/${params.id}/`);
        }
      },
      {
        path: "/dragonball/planet/:id" ,
        element: <PlanetDetail />,
        loader:({params}) => {
          return fetch(`https://dragonball-api.com/api/planets/${params.id}`);
        }
      }
    ]
  }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
