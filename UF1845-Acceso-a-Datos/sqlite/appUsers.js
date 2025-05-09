import promptSync from 'prompt-sync';
import {
  createTable,
  addUser,
  listUsers,
  updateUser,
  deleteUser,
} from './models/userModel.js';

const prompt = promptSync();
createTable();

async function main() {
  let running = true;

  while (running) {
    console.log(`\n--- USER MANAGER ---
1. List users
2. Add user
3. Update user
4. Delete user
5. Exit`);

    const choice = prompt('Choose an option: ').trim();

    try {
      switch (choice) {
        case '1': {
          const users = await listUsers();
          if (users.length === 0) console.log('No users found.');
          else users.forEach(u => console.log(`${u.id}: ${u.name} <${u.email}>`));
          break;
        }

        case '2': {
          const name = prompt('Enter name: ');
          const email = prompt('Enter email: ');
          const id = await addUser(name, email);
          console.log(`User added with ID: ${id}`);
          break;
        }

        case '3': {
          const updateId = prompt('Enter user ID to update: ');
          const newName = prompt('Enter new name: ');
          const changes = await updateUser(updateId, newName);
          console.log(`Updated ${changes} record(s).`);
          break;
        }

        case '4': {
          const deleteId = prompt('Enter user ID to delete: ');
          const changes = await deleteUser(deleteId);
          console.log(`Deleted ${changes} record(s).`);
          break;
        }

        case '5':
          running = false;
          break;

        default:
          console.log('Invalid choice.');
      }
    } catch (err) {
      console.error('Error:', err.message);
    }
  }

  console.log('Exiting...');
}

main();
