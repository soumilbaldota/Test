import React, { useEffect, useState } from 'react';
import DataDisplay from './components/DataDisplay';
import Footer from './components/Footer';
import Header from './components/Header';
import "./App.css";
const App = () => {
const [jsonData, setJsonData] = useState();
const [name_query, setname_query] = useState("");
const [designation_query, setdesignation_query] = useState("");
const [skills_query, setskills_query] = useState("");
useEffect(() => {
const fetchdata = async()=>{
  const res = await fetch("https://raw.githubusercontent.com/dixitsoham7/dixitsoham7.github.io/main/index.json", {
    method: 'GET',
    redirect: 'follow'
  })
  if (res.ok)
  {
    const json = await res.json()
    setJsonData(json);
  }
};
fetchdata();
  }, []);

  return (
    <>
    <Header></Header>
    <div className= ' center bg-gray-600 sm:px-16 lg:px-48 py-4'>
    <input placeholder="Search By Name" 
    onChange={event => setname_query(event.target.value)} />
    </div>
    <div className= ' justify-center bg-gray-600 sm:px-16 lg:px-48 py-4'>
    <input placeholder="Search By Designation" 
    onChange={event => setdesignation_query(event.target.value)} />
    </div>
    <div className= ' justify-center bg-gray-600 sm:px-16 lg:px-48 py-4'>
    <input placeholder="Search By Skills" 
    onChange={event => setskills_query(event.target.value)} />
    </div>
    <div>
      <DataDisplay data={jsonData} names = {name_query} designation = {designation_query} skills = {skills_query}/>
    </div>
    <Footer></Footer>
    </>
  );
};

export default App;
