## Donuts Pad

A implementation like dontpad to you run locally :)
## Running

### With npx
 ```bash
 npx donuts-pad
 ```
 ### With npm globally
 Install Donuts globally
 ```bash
 npm install -g donuts-pad
 ```
 And run:
  ```bash
 donuts
 ```
 Output:
 ```bash
  🍩🍩🍩 Donuts works in port 3131 :) 🍩🍩🍩
 ```

 ### With Docker 
 Run docker command:
 ```bash
  docker run --name donuts -p 3132:3131 -d valcinei/donuts:release-1.0.0 
  ```
Run with docker-compose:
 
 docker-compose.yml:
 ```bash
  version: "3.5"

services:
    donuts:
        container_name: donuts
        restart: always
        image: valcinei/donuts:release-1.0.0
        ports: 
            - 3132:3131
  ```

   ```bash
  docker-compose up -d
  ```

Contribute with this project:  
https://github.com/valcinei/donuts-pad  

Clone:  
```bash
  git clone https://github.com/valcinei/donuts-pad.git
```

Install dependencies: 
```bash
  npm install
```
Run:
```bash
  npm run dev
```
or
```bash
  npm run start
```