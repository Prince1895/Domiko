import express from "express"
import { adminLogin, approveCommentById, deleteCommnetById, getAllBlogAdmin, getAllComment, getDashboard } from "../controllers/adminController.js";
import auth from "../middleware/auth.js";

const adminRoutes =express.Router();

adminRoutes.post("/login",adminLogin);
adminRoutes.get("/comments",auth ,getAllComment);
adminRoutes.get("/blogs",auth ,getAllBlogAdmin);
adminRoutes.post("/delete-comment",auth ,deleteCommnetById);
adminRoutes.post("/approve-comment",auth ,approveCommentById);
adminRoutes.get("/dashboard",auth ,getDashboard);


export default adminRoutes;