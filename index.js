import express from 'express';
const app = express();
const port=process.env.PORT || 3000;
const databaseURL="mongodb://localhost:27017/schooldb";

app.listen(port,()=>console.log("hello world"));



import connectDB from './connectdb.js';
import './student.js';
import * as myfun from './result.js';
connectDB(databaseURL);

//JSON
app.use(express.json());

app.get('/',myfun.getAllDoc);

app.post('/',myfun.createDoc);

app.get('/:id',myfun.getSingleDocById);

app.put('/:id',myfun.updateDocById)

app.delete('/:id',myfun.deleteDocById)