import * as express from 'express';
import * as cors from 'cors';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import { getAllRouter } from './routes/getAllRouter';
import { handleUserRouter } from './routes/handleUserRouter';
import { deleteUserRouter } from './routes/deleteUserRouter';

dotenv.config();
const uri = process.env.MONGO_URI || 'mongodb+srv://scladnik:McPaW5Cuovp7XWEq@mongodbcluster.t6wxcpr.mongodb.net/GithubUsersDB?retryWrites=true&w=majority';
const PORT = process.env.PORT || 8080;

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log('Connected to MongoDB');
  } catch(error) {
    console.error(error);
  };
};

connect();

const app = express();
app.use(cors());
app.use('/getAll', getAllRouter);
app.use('/handleUser', handleUserRouter);
app.use('/deleteUser', deleteUserRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
