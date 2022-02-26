const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('rooms', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false
        }, 
        roomName: { 
            type: DataTypes.STRING,
            allowNull: false,
        },

    },
    {
        timestamps: false
    })
};
