import { dowloading } from "./Promise";
export { start };

async function start() {
    console .log(await dowloading('https://www.google.com123'));
    await dowloading('https://www.google.com')
}

start();