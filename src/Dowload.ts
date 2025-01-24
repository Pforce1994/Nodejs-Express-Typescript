export class Download {
    public url: string = 'https://www.google.com';
  constructor() {
    console.log(`Download class from `);
  }
    public downloadFile(): void {
        console.log(`Downloading file...${this.url}`);
    }
  
}
