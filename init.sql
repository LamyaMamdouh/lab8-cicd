CREATE DATABASE IF NOT EXISTS tasksdb;
USE tasksdb;

CREATE TABLE IF NOT EXISTS tasks (
  id INT PRIMARY KEY,
  name VARCHAR(100),
  status VARCHAR(50)
);

INSERT INTO tasks VALUES
  (1, 'Buy groceries', 'pending'),
  (2, 'Walk the dog', 'done'),
  (3, 'Read a book', 'pending'),
  (4, 'Write report', 'done'),
  (5, 'Call mom', 'pending'),
  (6, 'Fix bug', 'done');
