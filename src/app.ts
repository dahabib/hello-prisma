import express, { Application } from "express";
import cors from "cors";
import { UserRoutes } from "./modules/user/user.route";
import { CategoryRoutes } from "./modules/category/category.route";

const app: Application = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/users", UserRoutes);
app.use("/api/v1/categories", CategoryRoutes);

export default app;
