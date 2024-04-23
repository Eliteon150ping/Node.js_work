const http = require("http");
const fs = require("fs");
const port = 3000;

const routeMap = {
    "/": "views/index.html"
};

const app = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    if (routeMap[req.url]) {
        fs.readFile(routeMap[req.url], (error, data) => {
            res.write(data);
            res.end();
        });
    } else {
        res.end("<h1 style='color: red;'>Sorry page could not be found</h1>");
    }
}).listen(port, () => {
    console.log(`Server started listening at http://localhost:${port}`);
})


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Listing 6.3

// const port = 3000,
// http = require("http"),
// httpStatus = require("http-status-codes"),
// fs = require("fs");

// const getViewUrl = (url) => {
//     return `views${url}`;
// };


// http.createServer((req, res) => {
//     let viewUrl = getViewUrl(req.url);
//     fs.readFile(viewUrl, (error, data) => {
//         if (error) {
//             res.writeHead(httpStatus.NOT_FOUND);
//             res.write("<h1>FILE NOT FOUND</h1>");

//         }
//         else {
//             res.writeHead(httpStatus.OK, {
//                 "Content-Type": "text/html"
//             });
//             res.write(data);

//         }
//         res.end();
//     });
// })
//     .listen(port);
// console.log(`The server has started and is listening on port number: ${port}`);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Listing 6.4


// const sendErrorResponse = res => {
//     res.writeHead(httpStatus.NOT_FOUND, {
//         "Content-Type": "text/html"
//     });
//     res.write("<h1>File Not Found!</h1>");
//     res.end();
// };

// http
//     .createServer((req, res) => {
//         let url = req.url;
//         if (url.indexOf(".html") !== -1) {
//             res.writeHead(httpStatus.OK, {
//                 "Content-Type": "text/html"
//             });


//             customReadFile(`./views${url}`, res);
//         }

//         else if (url.indexOf(".js") !== -1) {
//             res.writeHead(httpStatus.OK, {
//                 "Content-Type": "text/javascript"
//             });


//             customReadFile(`./public/js${url}`, res);
//         }
//     } else if (url.indexOf(".css") !== -1) {
//         res.writeHead(httpStatus.OK, {
//             "Content-Type": "text/css"
//         });
//         customReadFile(`./public/css${url}`, res);
//     } else if (url.indexOf(".png") !== -1) {
//         res.writeHead(httpStatus.OK, {
//             "Content-Type": "image/png"
//         });
//         customReadFile(`./public/images${url}`, res);
//     } else {
//     sendErrorResponse(res);
// }
// })
//   .listen(3000);
