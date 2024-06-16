const fs = require('fs');
const os = require('os');
const _ = require('lodash')
const express = require('express');
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json()); //req.body

// const Person = require('./models/Person');
// const MenuItem = require('./models/MenuItem');

//****Important : We don't write the API end point directly here. We use route and the folder structure Also




app.get('/', (req, res)=> {
    res.send(`welcome to myHotols db's collections`)
})





// import the router files
const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');


// Use the routes
app.use('/person', personRoutes);
app.use('/menu', menuItemRoutes);











app.listen(3000,()=>{
    console.log('Listing on port 3000');
});




// app.post('/person', async(req, res) => {
//     try{
//         const data = req.body; //Assuming the request body constins the person data

//         //Create a new person document using the Mongoose model
//         const newPerson = new Person(data);

//         const savedPerson = await newPerson.save();
//         console.log('data saved');
//         res.status(200).json(savedPerson);

//         // Save the new person to the database  old method deprycated , instead use async await with try catch block
//         // newPerson.save((error, savedPerson) =>{
//         //     if(error){
//         //         console.log('Error saving person:', error);
//         //         res.status(500).json({error: 'Internal server error'})
//         //     }else{
//         //         console.log('data saved successfully');
//         //         res.status(200).json({savedPerson})
//         //     }
//         // })
//     }
//     catch(err){
//         console.log(err);
//         res.status(500).json({error:'Internal Server error'});
//     }
// })

// app.get('/person', async(req , res)=>{
//     try{
//         const data = await Person.find();
//         console.log('data fetched');
//         res.status(200).json(data);
//     }
//     catch(err){
//         console.log(err);
//         res.status(500).json({error:'Internal Server error'});
//     }
// })

// app.get('/person/:workType', async(req, res) => {
//     try {
//         const workType = req.params.workType;
//         if(workType == 'chef' || workType == 'manager' || workType == 'waiter'){
//             const response = await Person.find({work: workType});
//             console.log(response);
//             res.status(200).json(response);
//         }else{
//             res.status(404).json({error: 'Invalid work type'});
//         }
//     } catch (error) {
//         console.log(err);
//         res.status(500).json({error:'Internal Server error'});
//     }
// })

// app.post('/menu', async(req ,res) => {
//     try {
//         const data = req.body;
//         const newItem = new MenuItem(data);
//         const response = await newItem.save();
//         console.log('item saved');
//         res.status(200).json(newItem);
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({error: 'Internal server error'});
//     }

// })

// app.get('/menu', async(req,res)=>{
//     try {
//         const data = await MenuItem.find();
//         res.status(200).json(data);
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({error:'Internal server error'});
//     }
// })

// ========================






// app.get('/data', (req, res)=> {
//     res.send('data are available soon....')
// })




// ===========================================
// const note = require('./note');
// console.log(note.age)

// const data = ['puja', 'puja', 2,5,6,2,"sibu"]

// console.log(_.uniq(data))

// =======================================

// const user = os.userInfo();
// console.log(user);
// console.log(user.username)

// fs.appendFile('greeting.txt', 'hi \n' + ' ' + user.username + "!",()=>{
//     console.log('file is created successfull !!!')
// });

// =============================================






// const sayHello = (result) => {
//     console.log("Hello world",result)
// }

// const Add = (a,b,z) => {
//     let result = a +b;
//     z(result);
// }

// Add(5,4,sayHello)