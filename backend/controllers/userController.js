import User from "../models/User.js"
import bcrypt, { hash } from "bcrypt"
import jwt  from "jsonwebtoken"

export const registerUser = async(req,res)=>{
    try{
        const { email, password } = req.body;

        const existingUser = await User.findOne({email});

        if(existingUser){
            return res.status(400).json({message: "there's already an account"})
        }

        const hashedPassword = await bcrypt.hash(password, 10);  

        const user = new User({
            email,
            password: hashedPassword
        })

        await user.save();
        res.status(201).json({message: "account created"})


    }
    catch(error){
        res.status(400).json({message: "server error"})
    }

};

export const loginUser = async(req,res)=>{

    const { email, password } = req.body;
    

    try{
        const user = await User.findOne({email});
        
        if(!user){
            return res.status(400).json({message: "User does not exist"})
        }

        const enteredPassword = await bcrypt.compare(password, user.password)
        
            const token = jwt.sign(
            {id:user._id, email: user.email},
            process.env.jwt_secret,
            {expiresIn: '1h'}
        )

        if(!enteredPassword){
             return res.status(400).json({message:`Invalid password, please try again`})
            
        }

        return res.status(200).json({
                        message: `Welcome ${email}!`,
                        token: token
            
            })
        }

    catch(error){
        return res.status(500).json({message: `server error`})
    }




}

