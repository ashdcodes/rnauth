import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('rnauth', 'newuser', 'password', {
    dialect: 'mysql',
    host: 'localhost', 
});

export default sequelize;