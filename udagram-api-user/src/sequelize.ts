import {Sequelize} from 'sequelize-typescript';

export const sequelize = new Sequelize({
  'username': "postgres",
  'password': "password",
  'database': "postgres",
  'host': "udagram-db.cpuoz88bjhgj.us-east-2.rds.amazonaws.com",

  'dialect': "postgres",
  'storage': ':memory:',
});