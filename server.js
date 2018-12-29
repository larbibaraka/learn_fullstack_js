import config , {nodeEnv} from './config';
import express from 'express';
import ApiRouter from './api';

const server = express();


//adding the api route
server.use('/api', ApiRouter);
//using ejs as a template engine
server.set('view engine' , 'ejs');
//get the data from server and render it by the server
import serverRender from './serverRender';
server.get('/', (req, res)=>{
  serverRender()
    .then(content=>{
      res.render('index' , {
        content
      });
    })
    .catch(console.error);
 
});
//serving the static files like css , images ...etc
server.use(express.static('public'));

server.listen(config.port,config.host, ()=>{
  console.log('hello this is working on port ', config.port );
});



 