const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('messages', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false
        }, 
        message: { 
            type: DataTypes.STRING,
            allowNull: false,
        },

    }
   )
};
