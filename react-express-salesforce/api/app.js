if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

//const http = require('http') 
//const PORT = 8080 
var express = require('express')
var cors = require('cors')
app = express()
app.set('port', process.env.PORT || 3001)

app.options('*', cors()) // include before other routes
/*var corsOptions = {
  origin: 'https://salesforce.deochoaseis.com',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}*/

//app.use(express.json());
//app.use(express.urlencoded({ extended: true }));

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var jsforce = require('jsforce');

  const conn = new jsforce.Connection({
  oauth2 : {
      // you can change loginUrl to connect to sandbox or prerelease env.
      // loginUrl : 'https://test.salesforce.com',
      clientId : process.env.SALES_CLIENTID,
      clientSecret : process.env.SALES_CLIENTSECRET,
      redirectUri : process.env.SALES_REDIRECTURI
    },
  version: '59.0'
  });
  conn.login(process.env.SALES_USERNAME, process.env.SALES_PASSWORD, function(err, userInfo) {
    if (err) { return console.error(err); }
    // Now you can get the access token and instance URL information.
    // Save them to establish connection next time.
    console.log(conn.accessToken);
    console.log(conn.instanceUrl);
    // logged in user property
    console.log("User ID: " + userInfo.id);
    console.log("Org ID: " + userInfo.organizationId);
    //res.json({ message: {"User ID" : userInfo.id } });
    // ...
  });

app.post("/api", cors(), async (req, res, next) => {
  
  conn.login(process.env.SALES_USERNAME, process.env.SALES_PASSWORD, function(err, userInfo) {
    if (err) { return console.error(err); }
    // Now you can get the access token and instance URL information.
    // Save them to establish connection next time.
    console.log(conn.accessToken);
    console.log(conn.instanceUrl);
    // logged in user property
    console.log("API - User ID: " + userInfo.id);
    console.log("API - Org ID: " + userInfo.organizationId);
    
    const body = { FirstName : name, LastName: lastname, Email: email, AccountId: "001Hr00001rvHf9IAE" };

    //console.log("conn:"+JSON.stringify(conn));
    conn.insert("Contact", body, function(err, resx) {
      if (err) { 
        res.json({ message: { "Result" : err } });
        return console.error(err); 
      }
      console.log(resx)
      res.json({ message: { "Result" : resx } });

    });

  });

  
  const name = req.body.name;
  const email = req.body.email;
  const lastname = req.body.lastname;
  
  console.log("Email: " + email + " Name: " + name + " LastName: " + lastname);
  
  /* @interactive */
/*const requestBody = {
  operation: 'query',
  query: 'SELECT Id, Name FROM Account LIMIT 1000',
};

conn.requestPost('/services/data/v59.0/search', requestBody).then(response => {
  console.log(response);
});*/
  
  //CASE 1 -- passed
  /*var records = [];
  var query = conn.query("SELECT Id, Name FROM Account Where Account.Name='Account created from API' ")
  .on("record", function(record) {
    records.push(record);
  })
  .on("end", function() {
    console.log("total in database : " + query.totalSize);
    console.log("total fetched : " + query.totalFetched);
  })
  .on("error", function(err) {
    console.error(err);
  })
  .run({ autoFetch : true, maxFetch : 4000 });*/
  
//  const requestBody = {
//    operation: 'query',
//    query: 'SELECT Id, Name FROM Account LIMIT 1000'
//  };
  
  
  
  // Single record creation
  /*conn.sobject("Contact").create({ FirstName : email, Email: email, AccountId: "001Hr00001rvHf9IAE" }, function(err, ret) {
    if (err || !ret.success) { return console.error(err, ret); }
    console.log("Created record id : " + ret.id);
    // ...
  });*/
  
  
  //console.log(JSON.stringify(req.body));
  //res.json({ message: "Hello from server!" });
});

app.listen(app.get('port'), () => {
  console.log('Server listening on '+ app.get('port'));
});
  
/*
// Create a server object: 
const server = http.createServer(function (req, res) { 
  
    // Write a response to the client 
    res.write('Starting') 
  
    // End the response  
    res.end() 
}) 
  
// Set up our server so it will listen on the port 
server.listen(port, function (error) { 
  
    // Checking any error occur while listening on port 
    if (error) { 
        console.log('Something went wrong', error); 
    } 
    // Else sent message of listening 
    else { 
        console.log('Server is listening on port' + port); 
    }
    
})*/