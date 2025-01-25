import { calculate, display } from './Callback'
import { Download } from './Dowload';   
import  { start }   from "./AsyncAwait";


console.log("เริ่มต้นโหลด")
setTimeout(() => {
    console.log("กำลังดาวน์โหลดข้อมูล")
    calculate (50, 100,display)

    const download = new Download();
    download.downloadFile();  

    start();


}, 1000);
console.log("จบการทำงาน")
