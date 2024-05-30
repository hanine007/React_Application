import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchParams from "./Search";
import Detail from "./details";
import { QueryClientProvider,QueryClient } from "@tanstack/react-query";
import Test from "./test";
require('dotenv').config()
const Queryclient=new QueryClient({
  defaultOptions:{
    queries:{
      staleTime:Infinity,
      cacheTime:Infinity
    }
  }
})
const App = () => {
  return (
    <BrowserRouter>
    <QueryClientProvider client={Queryclient}>
    
      <Routes>
        <Route path="/search" element={<SearchParams />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/Test" element={<Test />} />

      </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
