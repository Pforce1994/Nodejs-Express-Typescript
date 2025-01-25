// Non-Blocking
import * as fs from 'fs';

// อ่านไฟล์แบบ Non-Blocking โดยใช้ fs.readFile() และแสดงผลข้อมูลที่ได้
   fs.readFile('./src/MyFile/input.txt', 'utf8', (err: Error, data: string) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
    
    const outputText: string = `Hello World \n ${new Date()}`;
    fs.writeFile("./src/MyFile/output.txt", outputText, (err: Error) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log('File is written');
    });
    console.log("จบการทำงานของ fs.readFile()");
  });