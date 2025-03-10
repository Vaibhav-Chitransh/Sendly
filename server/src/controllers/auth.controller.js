import User from "../models/user.model.js";
import bcrypt from 'bcrypt';

export const signup = async (req, res) => {
    try {
        const {name, email, password} = req.body;

        if(!name || !email || !password) return res.status(400).json({message: 'All fields are required'});
        if(password.length < 6) return res.status(400).json({message: 'Password must be atleast 6 characters long'});

        const existedUser = await User.findOne({email});
        if(existedUser) return res.status(400).json({message: 'User already exists'});

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        const newUser = await User.create({name, email, password: hash});
        await newUser.save();
        return res.status(201).json({newUser});
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({message: 'Internal Server error'});
    }
}

export const login = async (req, res) => {
    try {
        const {email, password} = req.body;

        if(!email || !password) return res.status(400).json({message: 'All fields are required'});

        const existedUser = await User.findOne({email});
        if(!existedUser) return res.status(400).json({message: 'Invalid credentials'});

        const isPwdCorrect = await bcrypt.compare(password, existedUser.password);
        if(!isPwdCorrect) return res.status(400).json({message: 'Invalid credentials'});

        return res.status(200).json({existedUser});
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({message: 'Internal Server error'});
    }
}

export const logout = async (req, res) => {
    try {
        res.status(200).json({message: 'User logged out successfully'});
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({message: 'Internal Server error'});
    }
}