import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import MovieInfo from "./MovieInfo";
import SearchPage from "./SearchPage";
import PersonPage from "./PersonPage";
import TvPage from "./TvPage";
import MoviePage from "./MoviePage";
import TvShowPage from "./TvShowPage";
import TrendingPersonPage from "./TrendingPersonPage";
import DeveloperPage from "./DeveloperPage";
import Error from "./Error";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      errorElement:<Error/>
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
    },{
      path:"/movies",
      element:<MoviePage/>
    },{
      path:"/tvShow",
      element:<TvShowPage/>
    },{
      path:"/person",
      element:<TrendingPersonPage/>
    },
    {
      path:"/developerInfo",
      element:<DeveloperPage/>
    }
  ]);
  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
};

export default Body;
