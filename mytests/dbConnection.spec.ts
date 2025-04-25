import { test, expect } from '@playwright/test';
import { Database } from '../dbUtils/database.spec.ts';

test('Database connection and query example', async () => {
  const db = new Database();

  // Connect to the database
  await db.connect();

  // Execute a query
  const result = await db.query('SELECT * FROM reportify.run_history WHERE run_uuid="a029fe8e-7f7f-4c09-bff8-37dfff9abdee"');
  console.log('Query Result:', result);

  // Validate the query result
  expect(result).toBeDefined();
  expect(result.length).toBeGreaterThan(0);
  console.log('result.length'+result.length);

  // Close the database connection
  await db.close();
});