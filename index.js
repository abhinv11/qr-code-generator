/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import { input } from '@inquirer/prompts';
import qr from 'qr-image';
import fs from 'fs';
import { writeFile } from 'fs/promises';

const answer = await input({ message: 'Enter your URL' });
console.log("URL entered:", answer);

// Generate QR code image and save to PNG file
const qr_svg = qr.image(answer, { type: 'png' });
qr_svg.pipe(fs.createWriteStream('qr_image.png'));

// Save user input to a text file
await writeFile('URL.txt', answer);
console.log('QR code and URL saved!');

 
