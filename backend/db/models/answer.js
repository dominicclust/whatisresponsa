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
  Answer.prototype.toSafeObject = function() {
    const {body, userId} = this;
    return {body, userId}
  }
  Answer.associate = function(models) {
    Answer.belongsTo(models.User, {foreignKey: 'userId'})
  };
  return Answer;
};
