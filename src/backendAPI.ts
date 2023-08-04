import express, { Application } from 'express';
import morgan from 'morgan';
import EntryRoutes from './routes/entry.routes'
import UserRoutes from './routes/users.routes'

export class BackendAPI {

  backendAPI: Application;

  constructor(private port?: number | string) {
    this.backendAPI = express();
    this.settings();
    this.middlewares();
    this.routes();
  }

  settings() {
    this.backendAPI.set('port', this.port || process.env.PORT || 3000);
  }

  middlewares() {
    this.backendAPI.use(morgan('dev'));
    this.backendAPI.use(express.json());
  }

  routes() {
    this.backendAPI.use(EntryRoutes);
    this.backendAPI.use('/collection', UserRoutes);
  }

  async listen() {
    await this.backendAPI.listen(this.backendAPI.get('port'));
    console.log('Server on port', this.backendAPI.get('port'));
  }
}