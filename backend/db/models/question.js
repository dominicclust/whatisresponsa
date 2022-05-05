'use strict';
module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
    body: {
      type: DataTypes.STRING,
      validate: {len: [7, 300]}
    },
    answerId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Question.associate = function(models) {
    Question.belongsTo(models.Answer, {foreignKey: 'answerId'})
    Question.belongsTo(models.User, {foreignKey: 'userId'})
  };
  return Question;
};
