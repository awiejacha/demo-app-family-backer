import knex from 'knex';
import TaskRepository from '../../domain/TaskRepository';
import KnexTaskRepository from '../../infrastructure/KnexTaskRepository';

export default function (): TaskRepository {
  const db = knex({
    client: 'mysql2',
    connection: {
      host: process.env.APP_DB_HOST,
      user: process.env.APP_DB_USER,
      password: process.env.APP_DB_PASS,
      database: process.env.APP_DB_NAME,
    },
  });
  return new KnexTaskRepository(db);
}
