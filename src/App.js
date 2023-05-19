import React, { useEffect, useState } from 'react';
import DataDisplay from './components/DataDisplay';
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {
const [jsonData, setJsonData] = useState();

useEffect(() => {
const fetchdata = async()=>{
  const res = await fetch("https://raw.githubusercontent.com/dixitsoham7/dixitsoham7.github.io/main/index.json", {
    method: 'GET',
    redirect: 'follow'
  })
  if (res.ok)
  {
    const json = await res.json();
    setJsonData(json);
  }
};
fetchdata();
  }, []);

  return (
    <>
    <Header></Header>
    <div>
      <DataDisplay data={jsonData} />
    </div>
    <Footer></Footer>
    </>
  );
};

export default App;
