import { Sequelize, DataTypes, QueryTypes } from 'sequelize';


const sequelize = new Sequelize('DragonData', 'ApiUser', '@piUs3rP@ssw0rd', {
    host: '192.168.2.110',
    dialect: 'mysql'
});

const DataModel = sequelize.define(
    'data',
    {
        url:{
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        },
        description:{
            type: DataTypes.STRING,
            allowNull: true,
        }
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
);

const AuthModel = sequelize.define(
    'login',
    {
        username:{
            type: DataTypes.STRING,
            allowNull: false
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false
        },
        APIkey:{
            type: DataTypes.STRING,
            allowNull: true
        }
    },
    {
        tableName: 'logins',
        schema: 'Auth',
        freezeTableName: true,
        timestamps: false

    }
);


export class SQLrequest {

    static async createLogin(username, password){
        try {
            const RESULT = await AuthModel.create(
                {
                    username: username,
                    password: password
                }
            );
            console.log(RESULT);
        }catch (error) {
            console.error('Unable to create new user account. ', error);
            }
    }

    static async readAll(){
        try {
            const RESULT = await sequelize.query(`SELECT * FROM DragonData.Data`, {type: QueryTypes.SELECT});
            return RESULT;

        }catch (error) {
            return ('Unable to request data from sql read query.', error);
        }
    }
}
