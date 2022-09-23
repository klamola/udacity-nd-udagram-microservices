import {Sequelize} from 'sequelize-typescript';

export const sequelize = new Sequelize({
  'username': "postgres",
  'password': "password",
  'database': "udagram-db.cpuoz88bjhgj.us-east-2.rds.amazonaws.com",
  'host': "5432",

  'dialect': "postgres",
  'storage': ':memory:',
});