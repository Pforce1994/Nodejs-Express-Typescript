import * as http from 'http';

const server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
    const pathName: string = req.url ?? '/';
    console.log("url = ",pathName);
    if (pathName === '/about') {
        res.write('<h1>About Us</h1>');
        return res.end();   
    } 
    const myhtml:string = `
            <h1>Pichaya Koedchai</h1>
    `;

    res.write(myhtml);
    res.end('<h1>Hello Got Pichaya</h1>');
    }).listen(3000, 'localhost', () => {
    console.log(`Server is running on port 3000`);
});
