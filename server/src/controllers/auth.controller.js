import User from "../models/user.model.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const signup = async (req, res) => {
    const {name, email, password} = req.body;
    if(!name || !email || !password) return res.status(400).json({message: 'All fields are required'});

    if(password.length < 6) return res.status(400).json({message: 'Password must be atleast 6 characters long'});

    try {
        const existedUser = await User.findOne({email});
        if(existedUser) return res.status(400).json({message: 'User already exists'});

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        const newUser = await User.create({name, email, password: hash});
        await newUser.save();

        const token = jwt.sign({userId: newUser._id}, process.env.JWT_SECRET_KEY, {expiresIn: '7d'});
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000
        })

        return res.status(201).json({name: newUser.name, email: newUser.email});
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({message: 'Internal Server error'});
    }
}

export const login = async (req, res) => {
    const {email, password} = req.body;
    if(!email || !password) return res.status(400).json({message: 'All fields are required'});

    try {   
        const existedUser = await User.findOne({email});
        if(!existedUser) return res.status(400).json({message: 'Invalid credentials'});

        const isPwdCorrect = await bcrypt.compare(password, existedUser.password);
        if(!isPwdCorrect) return res.status(400).json({message: 'Invalid credentials'});

        const token = jwt.sign({userId: newUser._id}, process.env.JWT_SECRET_KEY, {expiresIn: '7d'});
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000
        })

        return res.status(200).json({token});
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