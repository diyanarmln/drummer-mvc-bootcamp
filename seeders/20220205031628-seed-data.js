module.exports = {
  async up(queryInterface, Sequelize) {
    const drummersList = [
      {
        name: 'zach',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'diyana',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'kimmi',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'zaver',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'graham',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'eric',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'ck',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'ben',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'mike',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'robert',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];
    await queryInterface.bulkInsert('drummers', drummersList);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('drummers', null, {});
  },
};
