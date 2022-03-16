import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {List} from "./routes/board/List";
import {Add} from "./routes/board/Add";
import {Detail} from "./routes/board/Detail";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/add" element={<Add />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  )
}
