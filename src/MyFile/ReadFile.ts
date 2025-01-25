// Blocking
import * as fs from 'fs';

const filePath: string = './src/MyFile/input.txt';

// อ่านไฟล์แบบ Blocking โดยใช้ fs.readFileSync() และแสดงผลข้อมูลที่ได้
    const data = fs.readFileSync(filePath, 'utf8');
    console.log(data);

// เขียนไฟล์แบบ Blocking โดยใช้ fs.writeFileSync() และแสดงผลข้อมูลที่ได้
    const outputText: string = `Hello World \n ${new Date()}`;
    fs.writeFileSync("./src/MyFile/output.txt", outputText);
    console.log('File is written');