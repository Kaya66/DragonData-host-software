import { Sequelize, DataTypes, QueryTypes } from 'sequelize';


const sequelize = new Sequelize('ACore', 'ApiUser', '@piUs3rP@ssw0rd', {
    host: '192.168.2.110',
    dialect: 'mysql'
});

const words = sequelize.define(
    'Words',
    {
        word:{
            type: DataTypes.STRING,
            AllowNull: false,
            primaryKey: true,
        },
        english_word:{
            type: DataTypes.STRING,
            AllowNull: true,
        },
        definition:{
            type: DataTypes.STRING,
            AllowNull: false,
        },
        pos: {
            type: DataTypes.ENUM('verb', 'noun', 'adjective', 'adverb', 'interjection'),
            allowNull: false
          }
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
);


export class SQLrequest {

    static async create(acore, eng, def, speech){
        try {
            const RESULT = await LanguageModel.create(
                {
                    word: acore,
                    english_word: eng,
                    definition: def,
                    pos: speech
                }
            );
            console.log(RESULT);
        }catch (error) {
            console.error('Unable to create new entry. ', error);
            }
    }


    static async readAll(){
        try {
            const RESULT = await sequelize.query(`SELECT * FROM ACore.words`, {type: QueryTypes.SELECT});
            return RESULT;
        }catch (error) {
            return ('Unable to request data. ', error);
            
        }
    }
}
