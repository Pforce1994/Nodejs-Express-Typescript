import express from 'express';
import myRouter from './Router/myRouter';

const app: express.Application = express();

app.use(myRouter);


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});