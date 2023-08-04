import { createPool } from 'mysql2/promise';

export async function connect() {
  
  const connection = await createPool({
    host: 'localhost',
    user: 'root',
    database: 'sample_database',
    connectionLimit: 20
  })
  return connection;
}