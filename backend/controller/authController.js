import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';


//user registration
export const register = async (req, res) => {
    try {

        //hashing password
        const salt = bcrypt.genSaltSync(10);
        const hashPwd = bcrypt.hashSync(req.body.password, salt);


        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashPwd,
            photo: req.body.photo
        })
        await newUser.save()

        res.status(200).json({ success: true, message: "Successfully created" })
    } catch (err) {
        res.status(200).json({ success: false, message: "Failed to create. Try again" })
    }
}

//user login
export const login = async (req, res) => {
    const email = req.body.email
    try {
        const user = await User.findOne({ email });
        console.log(user);
        //if user doesnot exist
        if (!user) {
            return res.status(404).json({ success: false, message: "User Not Found" })
        }
        //check if user exist and password is valid
        const checkCorrectPassowrd = await bcrypt.compare(req.body.password, user.password);
        console.log(checkCorrectPassowrd)
        //in case of incorrect password
        if (!checkCorrectPassowrd) {
            return res.status(401).json({ success: false, message: "Incorrect Email or Password" })
        }
        const { password, role, ...rest } = user._doc

        //create jwt token
        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET_KEY, { expiresIn: "15d" })

        //set token in the browser cookies and send the response to the client
        res.cookie('accessToken', token, {
            httpOnly: true,
            expiresIn: token.expiresIn
        }).status(200).json({ token, data: { ...rest }, role })


    } catch (err) {
        return res.status(500).json({ success: false, message: "Failed to login" })
    }
}