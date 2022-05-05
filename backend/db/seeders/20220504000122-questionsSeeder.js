'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Questions', [
      {body: "What is the crown?", answerId: 14, userId: 3},
      {body: "Who is Santa Claus", answerId: 1, userId: 3},
      {body: "What is hydrogen?", answerId: 3, userId: 1},
      {body: "What is a glove?", answerId: 15, userId: 2},
      {body: "What is purple?", answerId: 2, userId: 1},
      {body: "What is Fermium?", answerId: 8, userId: 2},
      {body: "What is the Missouri?", answerId: 13, userId: 3},
      {body: "What is the Mississippi?", answerId: 13, userId: 2},
      {body: "What is 'I Cry'?", answerId: 11, userId: 1},
      {body: "What is 'in a laboratory'?", answerId: 10, userId: 3},
      {body: "Who are the Baha Men?", answerId: 7, userId: 3},
      {body: "What is Iron?", answerId: 8, userId: 1},
      {body: "What is 'equal'?", answerId: 10, userId: 2},
      {body: "What is the Potomac?", answerId: 9, userId: 2},
      {body: "What are penguins?", answerId: 6, userId: 3},
      {body: "What is ham?", answerId: 4, userId: 3},
      {body: "What is the South Pole?", answerId: 5, userId: 3},
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Questions', null, {})
  }
};
