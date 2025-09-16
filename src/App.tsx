import "./App.css";

import Sidebar from "./components/Sidebar";
import Home from "./components/ui/home";
import NewsTable from "./components/ui/NewsTable";
import PrestasiTable from "./components/ui/prestasiTable";
import Jurusan from "./components/ui/jurusan";
import React, { useState } from "react";

function App() {
  const [page, setPage] = useState("home");
  return (
    <div className="flex bg-white min-h-screen">
      <Sidebar onNavigate={setPage} page={page} />
      <div className="flex-1">
        {page === "home" && <Home />}
        {page === "news" && <NewsTable />}
        {page === "prestasi" && <PrestasiTable />}
        {page === "jurusan" && <Jurusan />}
      </div>
    </div>
  );
}

export default App;
