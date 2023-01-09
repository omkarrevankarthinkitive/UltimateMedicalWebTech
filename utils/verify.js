
import Jwt  from "jsonwebtoken"


  //verify the token
  const verifyToken=async (req,res,next)=>{
    try {
    //   if(!req.body.Authorization){
    //     res.send({val:false})
        
    //   }
    //   let token=req.body.Authorization

    console.log(req.header,"gggggggg")
    let token=req.header("Authorization")
    
    //token = token.slice(14);
    console.log(token,"qiqiqiqi")
      const decode = Jwt.verify(token, "hello");
      console.log("decoed",decode)
    if(decode){
      
      next()
    }else{
      res.send({val:false})
     
    }
      
    } catch (error) {
      console.log(error.message)
      res.send({val:false})
  
    }
   
  
   }
    export default verifyToken