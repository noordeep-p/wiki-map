-- CREATE USER MAP CONTRIBUTIONS TABLE

CREATE TABLE contributions (
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  map_id INTEGER REFERENCES maps(id) ON DELETE CASCADE
);