import express, { Application } from 'express';
import cors from 'cors';
import globalErrorhandler from './app/middlewares/globalErrorHandler';
import { UserRoutes } from './app/modules/user/user.route';
import { AcademicSemesterRoutes } from './app/modules/academicSemester/academicSemester.route';
const app: Application = express();

app.use(cors());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// application routes
app.use('/api/v1/users', UserRoutes);
app.use('/api/v1/academic-semesters', AcademicSemesterRoutes);

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
