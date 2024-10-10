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
    //Implement CRUD
    //Create, Read, Update, Delete

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

    static async read(req, col){
        try {
            const RESULT = await sequelize.query(`SELECT * FROM words WHERE 
                ${["A_Core_Word", "Eng_Word", "Word_Definition", "Part_Of_Speech"][col - 1]} = "${req}"`, {
                type: QueryTypes.SELECT,
            });
            console.log(RESULT);
        }catch (error) {
            console.error('Unable to request data. ', error);
            }
    }

    static async readAll(){
        try {
            const RESULT = await sequelize.query(`SELECT * FROM words`, {type: QueryTypes.SELECT});
            console.log(RESULT);
        }catch (error) {
            console.error('Unable to request data. ', error);
        }
    }
}
