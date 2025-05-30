// This is a helper script to download the company logos
// You should run this script with Node.js

const fs = require('fs');
const path = require('path');
const https = require('https');

// Create the directory if it doesn't exist
const dir = path.join(__dirname, 'public', 'images', 'clients');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

const logos = [
  {
    name: 'innoplexus.png',
    url: 'https://raw.githubusercontent.com/github/explore/main/topics/nodejs/nodejs.png' // Replace with actual URL
  },
  {
    name: 'piramal.png',
    url: 'https://raw.githubusercontent.com/github/explore/main/topics/react/react.png' // Replace with actual URL
  },
  {
    name: 'amazon.png',
    url: 'https://raw.githubusercontent.com/github/explore/main/topics/aws/aws.png' // Replace with actual URL
  },
  {
    name: 'iit.png',
    url: 'https://raw.githubusercontent.com/github/explore/main/topics/typescript/typescript.png' // Replace with actual URL
  }
];

// Function to download a file
function downloadFile(url, filePath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filePath);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
        console.log(`Downloaded: ${filePath}`);
      });
    }).on('error', (err) => {
      fs.unlink(filePath, () => {}); // Delete the file if there's an error
      reject(err);
    });
  });
}

// Download all logos
async function downloadLogos() {
  for (const logo of logos) {
    const filePath = path.join(dir, logo.name);
    await downloadFile(logo.url, filePath);
  }
  console.log('All logos downloaded successfully!');
}

downloadLogos().catch(console.error); 