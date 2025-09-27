import express, { Router } from 'express'
import { register,loginuser  } from '../Controllers/user.js';

const router = express.Router()

// user resgister
//@api -/api/user/register
router.post("/register", register);

//login
//@api- /api/user/login
router.post("/login", loginuser);

export default router
