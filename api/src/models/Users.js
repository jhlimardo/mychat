const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
    sequelize.define('users', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false
        }, 
        name: { 
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phoneNumber: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        img:{
            type: DataTypes.STRING,
            allowNull:false,
            defaultValue: 'https://w7.pngwing.com/pngs/855/341/png-transparent-pokemon-pikachu-pikachu-pokemon-x-and-y-pokemon-go-pokemon-ruby-and-sapphire-ash-ketchum-pokemon-dog-like-mammal-cartoon-snout-thumbnail.png',
         },
    },
    {
        timestamps: false
    })
};
