// import express from 'express';
const express =require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');
const jsonwebtoken=require('jsonwebtoken');

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
const arr2=[]
//http://localhost:5090/api/accounts/sayHello
// router.get('/sayHello',(req,res)=>{
//     return res.status(200).json({
//         message: 'Say Hello from API route'
//     });
// })

// router.post('/sayHello',(req,res)=>{

//     // const f_name = req.body.full_name;

//     // const usename=req.body.usename;
//     // const password=req.body.password;

//     const{email,password,name}=req.body;

//     const filterdUser= arr.find( x=>x.email==email);
    

//     if (!filterdUser) {
//         return res.status(200).json({
//             message: `username not found`
//             });
//     } else {
//         if(password==filterdUser.password)
//         {
//             return res.status(200).json({
//                 message: `hello ${filterdUser.username} ya gever `
//             })
//         }else
//         {
//             return res.status(200).json({
//                 message: `worng password`
//             })
//         }
//     }

    
// })



//router.post('/sayHello',(req,res)=>{

//     // const f_name = req.body.full_name;

//     // const usename=req.body.usename;
//     // const password=req.body.password;

//     const{email,password,name}=req.body;

//     const filterdUser= arr.find( x=>x.email==email);
    

//     if (!filterdUser) {
//         return res.status(200).json({
//             message: `username not found`
//             });
//     } else {
//         if(password==filterdUser.password)
//         {
//             return res.status(200).json({
//                 message: `hello ${filterdUser.username} ya gever `
//             })
//         }else
//         {
//             return res.status(200).json({
//                 message: `worng password`
//             })
//         }
//     }

    
// })


router.post('/push',async(req,res)=>{   
       
        const{email,password,name}=req.body;     
        const filterdUser= arr2.find( x=>x.email==email);

        if (req.body.email==null||req.body.password==null) {
                    return res.status(200).json({
                        message: `please fill  the fields of name and password`
                        });
                } else {
                    if(filterdUser!=null)
                    {
                        return res.status(200).json({
                            message: `the user name is exist please enter diffrent user name `
                        })
                    }else
                    {
                        const hash_password = await bcryptjs.hash(req.body.password,10);
                        arr2.push({email:req.body.email,password:hash_password,name:req.body.name   });  
                        console.log(arr);
                        return res.status(200).json({   
                        message: `sucsses`
                        })
                    }
                }
    })

module.exports = router;







router.post('/singIn',async(req,res)=>{
    const{email,password}=req.body;     
    const filterdUser= arr2.find( x=>x.email==email);

    if (req.body.email==null||req.body.password==null) 
    {
                return res.status(200).json({
                    message: `please fill  the fields of name and password`
                    });
            } else {
                if(filterdUser!=null)
                {
                    const isMatch = await bcryptjs.compare(password,filterdUser.password);
                    const token=await jsonwebtoken.sign(filterdUser,`<xlwwx4W;T#v8!4'jyTt&]#Q!>DZ.(`);
                    if(isMatch){
                        return res.status(200).json({

                            message:token
                        
                        })
                    }
                    else{
                        return res.status(200).json({

                            message:`worng password`
                        
                        })
                    }
                }else
                {
                    return res.status(200).json({

                        message:`the username not found`
                    
                    })
                }
            }
    })


module.exports = router;
    
    // const hash_password = await bcryptjs.hash(password,10);

    // const isMatch = await bcryptjs.compare(password,hash_password);


    
    // const token=await jsonwebtoken.sign(arr,'ngfshghdxzhkxzk');




    // if(isMatch)
    // {
    //     return res.status(200).json({
    //         message:`True`
    //     });
    // }
    // else{
    //     return res.status(200).json({
    //         message:`False`
    //     });
    // }

    



