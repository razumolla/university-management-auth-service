import express, { Application } from 'express';
import cors from 'cors';
import globalErrorhandler from './app/middlewares/globalErrorHandler';
import routes from './app/routes';
const app: Application = express();

app.use(cors());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// application routes
// app.use('/api/v1/users', UserRoutes);
// app.use('/api/v1/academic-semesters', AcademicSemesterRoutes);
app.use('/api/v1', routes);

// //testing
// app.get('/', async (req: Request, res: Response, next: NextFunction) => {
//   // throw new ApiError(400, 'Ore baba')
//   // next('Ore baba error')
//   // Promise.reject(new Error('UnHandled promise Rejection'))
//   throw new Error('Testing error looger')
// })

// Global Error Handling
app.use(globalErrorhandler);

export default app;
