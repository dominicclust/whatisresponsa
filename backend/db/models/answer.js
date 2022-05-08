'use strict';
module.exports = (sequelize, DataTypes) => {
  const Answer = sequelize.define('Answer', {
    body: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER
    }
  }, {});
  Answer.associate = function(models) {
    Answer.belongsTo(models.User, {foreignKey: 'userId'})
    Answer.hasMany(models.Question, {foreignKey: 'answerId', onDelete: 'cascade'})
  };
  return Answer;
};
