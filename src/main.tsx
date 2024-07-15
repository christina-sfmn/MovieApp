import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import "./index.css";
import { Layout } from "./Layout.tsx";
import App from "./App.tsx";
import { MovieDetail } from "./components/MovieDetail.tsx";
import { MovieFavorites } from "./components/MovieFavorites.tsx";

// Setup QueryClient
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "movie/:movieId",
        element: <MovieDetail />,
      },
      {
        path: "favorites",
        element: <MovieFavorites />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
