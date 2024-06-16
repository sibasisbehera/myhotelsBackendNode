const express = require('express');
const router = express.Router();

const Person = require('../models/Person');

router.post('/', async(req, res) => {
    try{
        const data = req.body; //Assuming the request body constins the person data

        //Create a new person document using the Mongoose model
        const newPerson = new Person(data);

        const savedPerson = await newPerson.save();
        console.log('data saved');
        res.status(200).json(savedPerson);

        // Save the new person to the database  old method deprycated , instead use async await with try catch block
        // newPerson.save((error, savedPerson) =>{
        //     if(error){
        //         console.log('Error saving person:', error);
        //         res.status(500).json({error: 'Internal server error'})
        //     }else{
        //         console.log('data saved successfully');
        //         res.status(200).json({savedPerson})
        //     }
        // })
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server error'});
    }
})

router.get('/', async(req , res)=>{
    try{
        const data = await Person.find();
        console.log('data fetched');
        res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server error'});
    }
})

router.get('/:workType', async(req, res) => {
    try {
        const workType = req.params.workType;
        if(workType == 'chef' || workType == 'manager' || workType == 'waiter'){
            const response = await Person.find({work: workType});
            console.log(response);
            res.status(200).json(response);
        }else{
            res.status(404).json({error: 'Invalid work type'});
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({error:'Internal Server error'});
    }
})

router.put('/:id', async(req, res) => {
    try {
        const personId = req.params.id;
        const updatedPersonData = req.body;
        
        const response = await Person.findByIdAndUpdate(personId,updatedPersonData,{
            new: true, // return the updated document
            runValidators: true, //Run mongoose validation
        })

        if (!response){
            return res.status(404).json({error: 'Person not found !!!'})
        }

        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({error:'Internal Server error'});
    }
})

router.delete('/:id', async(req, res) => {
    try {
        const personId = req.params.id;
        const response = await Person.findByIdAndDelete(personId);

        if (!response){
            return res.status(404).json({error: 'Person not found !!!'})
        }

        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({error:'Internal Server error'});
    }
})

module.exports = router;