import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import MovieInfo from "./MovieInfo";
import SearchPage from "./SearchPage";
import PersonPage from "./PersonPage";
import TvPage from "./TvPage";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path:"/movieInfo/:movieId",
      element:<MovieInfo/>,
    },
    {
      path:"/search",
      element:<SearchPage/>
    },
    {
      path:"/person/:personId",
      element:<PersonPage/>
    },
    {
      path:"/tvShow/:showId",
      element:<TvPage/>
    }
  ]);
  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
};

export default Body;
