const https = require('https');

const server = https.createServer((req,res) => {
  console.log("reqmade");
});

// server.listen(5501,'127.0.0.1',() => {
//   console.log("listneing for request");
// });

https.get('https://demo.techmbs.in/LP_POC//Api/LPService/UserBill?acc_id=2020011131', (res) => {
  //console.log(req);
  let data = "";
  res.on('data' , (chunk) => {
    data = data+chunk;
  });
  res.on('end',() =>{
    console.log("M" +data);
    return data;
  });
  
}).on('error' , (err) => {
  console.log(err);
});


