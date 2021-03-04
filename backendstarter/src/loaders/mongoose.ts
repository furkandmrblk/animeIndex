import mongoose from 'mongoose';
import config from '../config';

mongoose
  .connect(config.dbURL, {
    dbName: config.dbName,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log('🍃 MongoDB connected 🍃');
  })
  .catch((err: { message: string }) => {
    console.log(err.message);
  });

mongoose.connection.on('conntected', () => {
  console.log('🍃 Mongoose connected to DB 🍃');
});

mongoose.connection.on('error', (err: { message: string }) => {
  console.log(err.message);
});

mongoose.connection.on('disconnected', () => {
  console.log('🍂 Mongoose disconnected 🍂');
});

process.on('SIGINT', async () => {
  await mongoose.connection.close();
  process.exit(0);
});
