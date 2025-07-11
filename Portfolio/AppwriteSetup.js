const { Client, Databases, Storage, Account } = Appwrite;

const client = new Client();

client
    .setEndpoint('https://fra.cloud.appwrite.io/v1') // Use the endpoint you copied
    .setProject('68709e7a0027cf934521'); // Use the project ID you copied

const databases = new Databases(client);
const storage = new Storage(client);
const account = new Account(client);