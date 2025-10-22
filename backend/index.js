import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from './mySchema/DB.js'; // Assuming this is the correct path to your User model
const app = express();
const PORT = process.env.PORT || 3000;
const secretKey = "shhhhhh";

// Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Connect to MongoDB
mongoose.connect("mongodb+srv://bonny2001:adhikary@cluster0.ogiwnmp.mongodb.net/", {
    dbname: "FOOD_DELEVERY-PROJECT_2025"
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.error("Error connecting to MongoDB:", err);
})

app.post("/createUser", async (req, res) => {
    try {
        // Generate salt and hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const { email } = req.body;

        // Create new user with hashed password
        const user = await User.create({
            ...req.body,
            password: hashedPassword,
        });

        // JWT Token
        let token = jwt.sign({ email }, secretKey, { expiresIn: '1h' });
        res.cookie("token", token, { httpOnly: true });

        // Send response once
        res.status(201).json({
            message: "User created successfully",
            user,
            token,
        });

        console.log("JWT Token:", token);
        console.log("User created:", user);


    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});



app.post("/loginUser", async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        console.log(isMatch);

        if (!isMatch) {
            return res.status(401).json({ message: "Invalid password" });
        }

        // JWT Token
        const token = jwt.sign({ email: user.email }, secretKey, { expiresIn: "1h" });

        // Set token as cookie
        res.cookie("token", token, { httpOnly: true });

        // Send success response
        res.json({
            message: "Success",
            userId: user._id,
            userName: user.name,
            token
        });

        console.log("Login successful for:", user.email);
        console.log("JWT Token:", token);

    } catch (err) {
        console.error("Login Error:", err.message);
        res.status(500).json({ error: "Server error" });
    }
});

app.get("/get_profile/:id", (req, res) => {
    const id = req.params.id;
    // let data = jwt.verify(req.cookies.token, secretKey);
    // if (data) {
    User.findById({ _id: id })
        .then((result) => res.json(result))
        .catch((err) => res.json(err))
    // }

})
// Update Data 
app.put("/updateDATA/:id", async (req, res) => {
    const id = req.params.id

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    User.findByIdAndUpdate({ _id: id }, {
        id: req.body.id,
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,

    }).then((result) => res.json(result))
        .catch((err) => res.json(err))
})


// app.get("/",(req, res) => {
//     let data = jwt.verify(req.cookies.token, 'secretKey');
// });  

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})