const fs = require('fs');
const data = require('../src/data/themes.json');
const { generateText } = require('./file');

const keys = Object.keys(data);

keys.map(fileName => {
  const fileText = generateText(fileName);
  fs.writeFileSync(
    `./../src/pages/${fileName
      .split(' ')
      .join('')
      .trim()
      .toLowerCase()}.jsx`,
    fileText,
    {
      encoding: 'utf8',
      flag: 'w',
    }
  );
});
