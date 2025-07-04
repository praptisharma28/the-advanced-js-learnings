import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([
    {
        message: 'Type in your URL',
        name: 'url',
    },
  ])
  .then((answers) => {
    const url = answers.url;
    const qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_code.png'));
    fs.writeFile('URL.txt', url, (err) => {
      if (err) {
        console.error('Error saving QR code:', err);
      } else {
        console.log('QR code saved as qr_code.png');
      }
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.error('Prompt couldn\'t be rendered in the current environment');
    }
    else {
      console.error('An error occurred:', error);
    }
  });
