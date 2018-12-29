import config from './config';
import axios from 'axios';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './src/components/App';

//because we are not using the api dirctly so we are calling it using this way :)
//we can't use this because its inside a promise
const serverRender = () =>
  axios.get(`${config.serverUrl}/api/contests`)
  .then(res=>{
    return ReactDOMServer.renderToString(
      <App initialContests={res.data}/>
    );

  });


export default serverRender;