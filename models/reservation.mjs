export default function initReservationModel(sequelize, DataTypes) {
    return sequelize.define(
      'reservation',{
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        date: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        drummer_id: {
          type: Sequelize.INTEGER,
          references: {
            model: 'drummers',
            key: 'id',
          },
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      });
    },
    underscored: true,
    },
  };
  