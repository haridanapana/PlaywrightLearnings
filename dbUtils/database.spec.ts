import mysql from 'mysql2/promise';

export class Database {
  private connection: mysql.Connection | null = null;

  // Connect to the database
  async connect() {
    this.connection = await mysql.createConnection({
        host: '10.1.13.80', // Replace with your DB host
        user: 'reportifyiUser',      // Replace with your DB username
        password: 'Reportifyi@123', // Replace with your DB password
        database: 'reportify', // Replace with your DB name
        port: 3306,
        ssl: undefined
    });
    console.log('Connected to the database');
  }

  // Execute a query
  async query(sql: string): Promise<any> {
    if (!this.connection) {
      throw new Error('Database connection is not established');
    }
    const [rows] = await this.connection.execute(sql);
    return rows;
  }

  // Close the connection
  async close() {
    if (this.connection) {
      await this.connection.end();
      console.log('Database connection closed');
    }
  }
}