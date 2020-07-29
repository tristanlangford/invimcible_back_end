const { client } = require('./dbConfig');

async function save(level, position, saveName) {
    const text = {
        text: `INSERT INTO saved_data (saveName, level, position) VALUES(${saveName}, ${level}, ${position})`
      };
      await client.query(text)
}

async function getSave(saveName) {
  console.log(saveName, 'getSave')
    const save =  await client.query(`SELECT * FROM saved_data`)
    console.log(save, "save after db")
    return save.rows[0];
  }




exports.save = save;
exports.getSave = getSave