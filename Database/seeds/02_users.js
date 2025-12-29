const bcrypt = require('bcrypt');

exports.seed = async function(knex) {
  await knex('users').del();
  const hash = await bcrypt.hash('password123', 10);
  await knex('users').insert([
    { id: 1, email: 'admin@example.com', password_hash: hash, role_id: 1 },
    { id: 2, email: 'user@example.com', password_hash: hash, role_id: 2 }
  ]);
};
