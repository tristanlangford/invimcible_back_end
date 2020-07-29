const { client } = require('./dbConfig');

async function save(level, position, saveName) {
    const text = {
        text: `INSERT INTO saved_data (saveName, level, position) VALUES(${saveName}, ${level}, ${position})`
      };
      await client.query(text)
}

async function getSave(saveName) {
    const save =  await client.query('SELECT * FROM saved_data WHERE saveName <> $1', [saveName])
    return save;
  }




exports.save = save;
exports.getSave = getSave