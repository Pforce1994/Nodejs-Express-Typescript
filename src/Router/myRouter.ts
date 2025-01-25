import express from "express";
import path from 'path';

const router = express.Router();

const indexPage= path.join(__dirname, '../templates/index.html');
const product1= path.join(__dirname, '../templates/product1.html');
const product2= path.join(__dirname, '../templates/product2.html');
const product3= path.join(__dirname, '../templates/product3.html');

router.get('/index', (req: express.Request, res: express.Response) => {
    res.status(200).sendFile(indexPage);
})

router.get('/product/:id', (req: express.Request, res: express.Response) => {
    res.status(200);
    // console.log(req.query.id);
    console.log(req.params.id);
    if (req.params.id === '1') {
        res.status(200).sendFile(product1);
        console.log(req.params.id);
    } else if (req.params.id === '2') {
        res.status(200).sendFile(product2);
        console.log(req.params.id);
    } else if (req.params.id === '3') {
        res.status(200).sendFile(product3);
        console.log(req.params.id);
    } else {
        res.redirect('/index');
        
    }
})

export default router;