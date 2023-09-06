const http = require("http");
const port = 3000;
const data = [
  {
    name:"vipul",
    fullname:"vipul thakur",

  },
  {
    name:"vivek",
    fullname:"vivek thakur",
    
  },
  {
    name:"umesh",
    fullname:"umesh thakur",
    
  }
]
const app = http.createServer((req,res)=>{
  if (req.url == "/data") {
    res.write(JSON.stringify(data));
    res.end()
  }
  // res.write("<html>");
  // res.write("<body>");
  // res.write("<h1>About node.js</h1>");
  // res.write("<p>node js is an a open source platform , javascript runtime enviroment that runs the code outside the browser</p>");
  // res.write("<p>node js is an a open source platform , javascript runtime enviroment that runs the code outside the browser</p>");
  // res.write("</body>");
  // res.write("</html>");

  // res.end()
})

app.listen(port,()=>{
    console.log(`port running on ${port}`);
})