import React, { useState } from "react"
import Header from "./components/Header"
import CompanyTable from "./components/CompanyTable"

function App() {
  const [showTable,setShowTable] = useState(false);
  const [search,setSearch] = useState("");

  return (
    <div data-theme="sunset" className="min-h-screen">
      <Header onGenerate={setShowTable} onSearch={setSearch}/>
      <div className="px-6">
        <CompanyTable active={showTable} search={search}/>
      </div>
    </div>
  )
}

export default App;
