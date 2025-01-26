import express from 'express';
import path from 'path';
// import myRouter from './Router/myRouter';

const app: express.Application = express();
app.use(express.static(path.join(__dirname, 'public')));
// app.use(myRouter);
 

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});