import React from 'react';
import "./index.css";
import WebseriesData from './WebseriesData';
import Webseris from './Webseris';
const App = () => {
  return (
    <>
      <h1>Top WebSeries</h1>
      <div className='container'>

        {WebseriesData.map((values)=>{
          return(
        <>
          <Webseris
            title={values.title}
            imgsrc={values.imgsrc}
            description={values.description}
            link={values.link}
          />
        </>
        );
        })}
      </div>
    </>
  );
}

export default App;