#Typescript
pnpm init
pnpm i -D typescript
tsc --init

คำสั่ง build file js
ตั้งค่า ใน package.json
"scripts": {
    "build": "tsc",
    "start": "tsx src/server.ts"
  }
pnpm build

pnpm install express