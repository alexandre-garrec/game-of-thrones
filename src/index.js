import React from "react";
import { render } from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "react-query";
import FavoriteCharacter from "./contexts/FavoriteCharacter";

import ListBooks from "./pages/ListBooks.page";
import Books from "./pages/Book.page";
import { ROUTES } from "./const";

const queryClient = new QueryClient();

const rootElement = document.getElementById("root");
render(
  <QueryClientProvider client={queryClient}>
    <FavoriteCharacter>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListBooks />} />
          <Route path={ROUTES.BOOK()} element={<Books />} />
        </Routes>
      </BrowserRouter>
    </FavoriteCharacter>
  </QueryClientProvider>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
