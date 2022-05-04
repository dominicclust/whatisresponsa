'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Answers', [
      {body: "According to a children's song, he 'sees you when you\'re sleeping and knows when you're awake", userId: 1},
      {body: "The chemical Iodine is associated with this color, along with royalty and a dinosaur who loves you.", userId: 2},
      {body: "When you see starlight, know it's from the star burning this gas, whose symbol is H.", userId: 3},
      {body: "In the title of a Dr. Seuss book, it's served with Green Eggs.", userId: 1},
      {body: "First reached in 1911, it's the point in Antarctica through which the Earth's axis passes.", userId: 2},
      {body: "Two species of these birds that inhabit Antarctica are the adelie and the emperor.", userId: 2},
      {body: "Logically enough, these 'Who Let the Dogs Out?' hitmakers come from the Bahamas.", userId: 1},
      {body: "You're very busy if you have too many bars of this element, symbol Fe, in the fire.", userId: 3},
      {body: "It flows through Washington D.C., and on past Mount Vernon.", userId: 1},
      {body: "According to the Declaration of Independence, 'All men are created' this way.", userId: 1},
      {body: "'LTIC' means 'Laughing til' this happens.", userId: 2},
      {body: "This river of the Pacific Northwest provides much of the boundary between Washington and Oregon.", userId: 3},
      {body: "The Falls of St. Anthony stop this mighty river from being navigable north of St. Paul, Minnesota.", userId: 1},
      {body: "Covered by enamel, this visible part of a tooth sounds like something a king wears.", userId: 2},
      {body: "Romeo sighs 'O! that I were' one of these 'upon that hand that I might touch that cheek.'", userId: 3}
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Answers', null, {})
  }
};
