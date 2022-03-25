const express = require('express');
const book=require('../models/book.model');
const router=express.Router();
router.get("/",async(req,res)=>{
    try {
const books=await book.find();
res.status(200).json(books)
    }catch(err){
        res.status(400).json({message: err.message});
    }
});
router.post("/",async(req,res)=>{
    try { 
const books=await book.create(req.body);
res.status(200).json(books)
    }catch(err) {
        res.status(400).json({message: err.message})
    }
});
router.get("/category/:type",async(req,res)=>{
    try {
const books=await book.find({category:req.params.type});
res.status(200).json(books)
    }catch(err){
        res.status(400).json({message: err.message});
    }
});
router.get("/search/:id",async(req,res)=>{
    try {
const books=await book.find({title:req.params.id});
if(book.length==0){
    books=await book.find({author:req.params.id})
    res.status(200).json(books)
}else{
    res.status(200).json(books)
}

    }catch(err){
        res.status(400).json({message: err.message});
    }
});

router.get("/status/:type",async(req,res)=>{
    try {
const books=await book.find({status:req.params.type});

res.status(200).json(books)
    }catch(err){
        res.status(400).json({message: err.message});
    }
});
module.exports=router;