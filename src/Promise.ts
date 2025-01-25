
    export function dowloading(url:string) { 
        const connect:boolean = true;
        return new Promise(function(resolve, reject) {
            if (connect) {
                resolve(`โหลดไฟล์จาก ${url}`);
            } else {
                reject(new Error('Connection failed'));
            }
        });
    }

dowloading('https://www.google.com').then(result => {
    console.log(result);
}).catch(error => {
    console.error(error);
}).finally(() => {
    console.log('จบการทำงาน');
});

