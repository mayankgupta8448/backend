const http = require('http');
const axios = require('axios');

const port = 4000;

const server = http.createServer(async (req, res) => {
    console.log('New request received');
    res.writeHead(200, { 'Content-Type': 'text/html' });

    const response = await axios.get("https://api.github.com/search/users", {
      params: {
        q: "location:ghaziabad"
      }
    });
    const userdata = response.data.items;
    let frontdata =` <html><head></head><body>`;

    userdata.forEach((user) => {
        frontdata += `<div><img src="${user.avatar_url}" ></div>`;
    });

    frontdata +=` </body></html>`;
    res.end(frontdata);
});

server.listen(port, () => {
    console.log(`Server is run ${port}`);;
});
