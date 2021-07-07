const fs = require('fs');

const folders = ['desert', 'pizza', 'salat'];

const randomWeight = () => Math.trunc(Math.random() * 30 + 20) * 10;
const randomPrice = () => Math.trunc(Math.random() * 18 + 10) * 10;

folders.map(folder => 
  fs.readdir(`./front/public/${folder}`, (err, res) => {
    console.log(
      res
      .map(img => `
        INSERT INTO good VALUES (default, t, 'n', 'd', ${randomWeight()}, ${randomPrice()}, '/${folder}/${img}');
      `.trim())
      .join('\n')
    )
  })
)
