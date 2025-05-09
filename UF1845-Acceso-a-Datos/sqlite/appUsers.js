import promptSync from 'prompt-sync';
import {
  createTable,
  addUser,
  listUsers,
  updateUser,
  deleteUser,
} from './userModel.js';

const prompt = promptSync();
createTable();

function menu() {
  console.log(`\n--- USER MANAGER ---
1. List users
2. Add user
3. Update user
4. Delete user
5. Exit`);
}

let running = true;

while (running) {
  menu();
  const choice = prompt('Choose an option: ').trim();

  switch (choice) {
    case '1':
      listUsers((err, users) => {
        if (err) console.error(err.message);
        else if (users.length === 0) console.log('No users found.');
        else users.forEach(u => console.log(`${u.id}: ${u.name} <${u.email}>`));
      });
      break;

    case '2':
      const name = prompt('Enter name: ');
      const email = prompt('Enter email: ');
      addUser(name, email, (err, id) => {
        if (err) console.error(err.message);
        else console.log(`User added with ID: ${id}`);
      });
      break;

    case '3':
      const updateId = prompt('Enter user ID to update: ');
      const newName = prompt('Enter new name: ');
      updateUser(updateId, newName, (err, changes) => {
        if (err) console.error(err.message);
        else console.log(`Updated ${changes} record(s).`);
      });
      break;

    case '4':
      const deleteId = prompt('Enter user ID to delete: ');
      deleteUser(deleteId, (err, changes) => {
        if (err) console.error(err.message);
        else console.log(`Deleted ${changes} record(s).`);
      });
      break;

    case '5':
      running = false;
      break;

    default:
      console.log('Invalid choice.');
  }
}
console.log('Exiting...');
