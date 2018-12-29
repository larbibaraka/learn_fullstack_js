import config , {nodeEnv} from './config';
import express from 'express';
import ApiRouter from './api';

const server = express();


//adding the api route
server.use('/api', ApiRouter);
//using ejs as a template engine
server.set('view engine' , 'ejs');

server.get('/', (req, res)=>{
  res.render('index' , {
    content : 'assalam alykoum welcome to my page'
  });
});
//serving the static files like css , images ...etc
server.use(express.static('public'));

server.listen(config.port, ()=>{
  console.log('hello this is working on port ', config.port );
});



 