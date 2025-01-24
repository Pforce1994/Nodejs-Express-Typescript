
const calculate=(x: number, y: number,callback: (result: number) => void) => {
    const sum:number = x + y;
    callback(sum);
  return x + y;
}
const display=(result: number) => {
  console.log(`ผลบวก =${result}`);
}


export {calculate, display}