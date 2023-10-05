import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes.tsx";

const client = new ApolloClient({
  uri: import.meta.env.VITE_GRAPHQL_URL,
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={routes} />
    </ApolloProvider>
  </React.StrictMode>
);
