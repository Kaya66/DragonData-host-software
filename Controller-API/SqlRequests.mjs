import { Sequelize, DataTypes, QueryTypes } from 'sequelize';


const sequelize = new Sequelize('A_Core_Language', 'ApiUser', '@piUs3rP@ssw0rd', {
    host: '192.168.2.110',
    dialect: 'mysql'
});


const LanguageModel = sequelize.define(
    'Dictionary',
    {
        A_Core_Word:{
            type: DataTypes.STRING,
            AllowNull: false,
            primaryKey: true,
        },
        Eng_Word:{
            type: DataTypes.STRING,
            AllowNull: true,
        },
        Word_Definition:{
            type: DataTypes.STRING,
            AllowNull: false,
        },
        Part_Of_Speech:{
            type: DataTypes.STRING,
            AllowNull: true,
        },
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
            const result = await LanguageModel.create(
                {
                    A_Core_Word: acore,
                    Eng_Word: eng,
                    Word_Definition: def,
                    Part_Of_Speech: speech
                }
            );
            console.log(result);
        }catch (error) {
            console.error('Unable to create new entry. ', error);
            }
    }

    static async read(req, col){
        try {
            const result = await sequelize.query(`SELECT * FROM Dictionary WHERE 
                ${["A_Core_Word", "Eng_Word", "Word_Definition", "Part_Of_Speech"][col - 1]} = "${req}"`, {
                type: QueryTypes.SELECT,
            });
            console.log(result);
        }catch (error) {
            console.error('Unable to request data. ', error);
            }
    }

    static async readAll(){
        try {
            const result = await sequelize.query(`SELECT * FROM Dictionary`, {type: QueryTypes.SELECT});
            console.log(result);
        }catch (error) {
            console.error('Unable to request data. ', error);
        }
    }

    static async update(req, col){
        try {
            const result = await sequelize.query(`SELECT * FROM Dictionary WHERE 
                ${["A_Core_Word", "Eng_Word", "Word_Definition", "Part_Of_Speech"][col - 1]} = "${req}"`, {
                type: QueryTypes.SELECT,
            });
            console.log(result);
        }catch (error) {
            console.error('Unable to connect to the database:', error);
            }
    }

    static async delete(req, col){
        try {
            const result = await sequelize.query(`SELECT * FROM Dictionary WHERE 
                ${["A_Core_Word", "Eng_Word", "Word_Definition", "Part_Of_Speech"][col - 1]} = "${req}"`, {
                type: QueryTypes.SELECT,
            });
            console.log(result);
        }catch (error) {
            console.error('Unable to connect to the database:', error);
            }
    }
}
