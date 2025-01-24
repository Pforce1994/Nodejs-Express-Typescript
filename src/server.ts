import { calculate, display } from './Callback'
import { Download } from './Dowload';   

console.log("เริ่มต้นโหลด")
setTimeout(() => {
    console.log("กำลังดาวน์โหลดข้อมูล")
    calculate (50, 100,display)

    const download = new Download();
    download.downloadFile();  
}, 1000);
console.log("จบการทำงาน")
