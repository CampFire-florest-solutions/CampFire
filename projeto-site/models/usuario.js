'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Usuario = sequelize.define('Usuario', {
        id: {
            field: 'id',
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            field: 'nomes',
            type: DataTypes.STRING,
            allowNull: false
        },
        login: {
            field: 'logins',
            type: DataTypes.STRING,
            allowNull: false
        },
        senha: {
            field: 'senhas',
            type: DataTypes.STRING,
            allowNull: false
        },
        codigo: {
            field: 'codigo',
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        tableName: 'usuarios',
        freezeTableName: true,
        underscored: true,
        timestamps: false,
    });

    return Usuario;
};