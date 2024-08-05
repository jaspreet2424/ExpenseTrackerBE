const express = require('express');
const { registerAdmin, loginAdmin, adminAuthentication, logoutAdmin, addStaffMembers } = require('../Controller/Admin');
const adminRouter = express.Router();

adminRouter.post('/register_admin' , registerAdmin);
adminRouter.post('/login_admin' , loginAdmin);
adminRouter.get("/admin_auth" , adminAuthentication);
adminRouter.get("/admin_logout" , logoutAdmin);
adminRouter.post("/add_staff" , addStaffMembers);

module.exports = adminRouter;