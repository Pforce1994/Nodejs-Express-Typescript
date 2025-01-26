import express from 'express';
import path from 'path';
import router from './Router/myRouter';

const app: express.Application = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(router);
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});