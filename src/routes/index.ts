import { Router } from "express";
import { userController } from "../controller/userController";

const routes = Router();
const controller = new userController();


routes.get("/", controller.getAll);








export { routes }