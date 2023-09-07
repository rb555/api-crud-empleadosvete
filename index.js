import express, {json} from "express";
import 'dotenv/config'
import cookieParser from "cookie-parser";
import employeesRoutes from './routes/employees.routes.js'
import indexRoutes from './routes/index.routes.js'
import './config.js'

const app = express();

app.use(cookieParser());
app.use(express.json());

app.use(indexRoutes)
app.use('/api/v1/', employeesRoutes)

app.use((req,res,next) => {
    res.status(404).json({
        message: 'Endpoint no encontrado'
    })
})

const port = process.env.PORT || 5000;
app.listen(port, () => `Server running on port ${port}`);