import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getUsersForSidebar } from "../controllers/user.controller.js";
// import User from "../models/user.model.js";

const router=express.Router();



router.get("/",protectRoute,getUsersForSidebar);
export default router;