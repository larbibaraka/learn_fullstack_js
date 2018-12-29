import express from 'express';

const router = express.Router();


router.get('/', (req , res)=>{
  res.send({data : ['haha','jzjzj']});
});

export default router;