const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('contacts', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false
        }, 
        phoneNumber: { 
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        timestamp: false
    })
};
