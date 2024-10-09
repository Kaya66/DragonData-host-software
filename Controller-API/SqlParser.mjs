import { Sequelize, DataTypes, QueryTypes } from 'sequelize';

const sequelize = new Sequelize('A_Core_Language', 'ApiUser', '@piUs3rP@ssw0rd', {
    host: '192.168.2.110',
    dialect: 'mysql'
});

export class SQLrequest {
    static async request(req, col){

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
