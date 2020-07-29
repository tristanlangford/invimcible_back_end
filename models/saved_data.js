'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class saved_data extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  saved_data.init({
    saveName: DataTypes.STRING,
    level: DataTypes.INTEGER,
    position_x: DataTypes.INTEGER,
    position_y: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'saved_data',
  });
  return saved_data;
};