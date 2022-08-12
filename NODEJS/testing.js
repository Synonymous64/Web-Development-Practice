console.log("HELLO WORLD");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Navigation Bar</title>
        <link rel="stylesheet" href="/PROJECTS/Navigation Bar/navigation.css">
    </head>
    <body>
        <div class="navigation">
            <ul>
                <li class="list active">
                    <a href="#">
                        <span class="icon"><ion-icon name="home"></ion-icon></span>
                        <span class="text">Home</span>
                    </a>
                </li>
                <li class="list">
                    <a href="#">
                        <span class="icon"><ion-icon name="contact"></ion-icon></span>
                        <span class="text">Profile</span>
                    </a>
                </li>
                <li class="list">
                    <a href="#">
                        <span class="icon"><ion-icon name="chatbubbles"></ion-icon></span>
                        <span class="text">Messages</span>
                    </a>
                </li>
                <li class="list">
                    <a href="#">
                        <span class="icon"><ion-icon name="images"></ion-icon></span>
                        <span class="text">Photos</span>
                    </a>
                </li>
                <li class="list">
                    <a href="#">
                        <span class="icon"><ion-icon name="cog"></ion-icon></span>
                        <span class="text">Setting</span>
                    </a>
                </li>
                <div class="indicator"></div>
            </ul>
        </div>
        <script>
            const list = document.querySelectorAll('.list');
            function activeLink(){
                list.forEach((item)=>
                item.classList.remove('active'));
                this.classList.add('active');
            }
            list.forEach((item)=>
            item.addEventListener('click',activeLink));
        </script>
        <script src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js"></script>
        <link href="https://unpkg.com/ionicons@4.5.10-0/dist/css/ionicons.min.css" rel="stylesheet">
    </body>
    </html>`);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});