import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  	const db = await openDB('jate', 1);
	const tran = db.transaction('jate', 'readwrite');
	const store = tran.objectStore('jate');
	return await store.put({ id: 1, value: content });
}

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
	const db = await openDB('jate', 1);
	const tran = db.transaction('jate', 'readonly');
	const obStore = tran.objectStore('jate');
	const result = await obStore.get(1);;
	return result?.value;
}

initdb();
