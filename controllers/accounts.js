// import express from 'express';
const express =require('express');
const router = express.Router();

const arr=[
    { 
        email:'biili@microsoft.com',
        password:'123456',
        username:'bill gates',
    },
    { 
        email:'itamarcohen2001@gmail.com',
        password:'789',
        username:'itamar cohen'
        
    },
    { 
        email:'dovblum@gmail.com',
        password:'king',
        username:'dov blum'
        
    },
    { 
        email:'ordadon33@gmail.com',
        password:'solid',
        username:'or dadon'
        
    }
];

//http://localhost:5090/api/accounts/sayHello
// router.get('/sayHello',(req,res)=>{
//     return res.status(200).json({
//         message: 'Say Hello from API route'
//     });
// })

router.post('/sayHello',(req,res)=>{

    // const f_name = req.body.full_name;

    // const usename=req.body.usename;
    // const password=req.body.password;

    const{email,password,name}=req.body;

    const filterdUser= arr.find( x=>x.email==email);
    

    if (!filterdUser) {
        return res.status(200).json({
            message: `not found`
            });
    } else {
        if(password==filterdUser.password)
        {
            return res.status(200).json({
                message: `hello ${filterdUser.username}`
            })
        }else
        {
            return res.status(200).json({
                message: `worng password`
            })
        }
    }

  
    
})



module.exports = router;




