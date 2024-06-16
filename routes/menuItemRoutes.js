const express = require('express');
const router = express.Router();

const MenuItem = require('../models/MenuItem');

router.post('/', async(req ,res) => {
    try {
        const data = req.body;
        const newItem = new MenuItem(data);
        const response = await newItem.save();
        console.log('item saved');
        res.status(200).json(newItem);
    } catch (err) {
        console.log(err);
        res.status(500).json({error: 'Internal server error'});
    }

})

router.get('/', async(req,res)=>{
    try {
        const data = await MenuItem.find();
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({error:'Internal server error'});
    }
})

router.get('/:taste', async(req,res)=>{
    try {
        const tasteParams = req.params.taste;
        if(tasteParams == 'sweet' || tasteParams == 'spicy' || tasteParams == 'sour'){
            const response = await MenuItem.find({taste: tasteParams});
            res.status(200).json(response);
        }else{
            res.status(404).json({error: 'Invalid taste !!!'})
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({error:'Internal server error'});
    }
})

module.exports = router;