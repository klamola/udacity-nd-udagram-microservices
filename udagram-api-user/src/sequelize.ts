import {Sequelize} from 'sequelize-typescript';

export const sequelize = new Sequelize({
  'username': "postgres",
  'password': "password",
  'database': "postgres",
  'host': "udagram-db.cii0cgoo5lpk.us-east-1.rds.amazonaws.com",

  'dialect': "postgres",
  'storage': ':memory:',
});