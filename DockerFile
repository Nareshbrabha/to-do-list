from node:23
workdir /app
copy . .
run npm install
expose 3000
cmd ["npm","start"]