import * as http from 'http';
import * as fs from 'fs';
import * as url from 'url';

const indexPage=  fs.readFileSync(`${__dirname}/templates/index.html`, 'utf-8');
const produstPage1  =  fs.readFileSync(`${__dirname}/templates/product1.html`, 'utf-8')
const produstPage2  =  fs.readFileSync(`${__dirname}/templates/product2.html`, 'utf-8')
const produstPage3 =  fs.readFileSync(`${__dirname}/templates/product3.html`, 'utf-8')



const server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
    const { pathname, query } = url.parse(req.url ?? '', true);
    console.log("url = ",pathname);
    console.log("query = ",query);
    if (pathname === '/' || pathname === '/index.html' ) {
        res.write(indexPage);
        return res.end();   
    } else if (pathname === '/product') {
        if(query.id === '1'){
            res.end(produstPage1);
        }else if(query.id === '2'){
            res.end(produstPage2);
        }else if(query.id === '3'){
            res.end(produstPage3);
        }else{
            res.end('<h1>404 Not Found</h1>');
        }
        console.log("query = ",query.id);;
        return res.end();
    }else{
        res.end('<h1>404 Not Found</h1>');
    }

    const myhtml:string = `
            <h1>Pichaya Koedchai</h1>
    `;

    res.write(myhtml);
    res.end('<h1>Hello Got Pichaya</h1>');
    }).listen(3000, 'localhost', () => {
    console.log(`Server is running on port 3000`);
});
