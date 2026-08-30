const { connectdb } = require("../dbs/connectdb");
const bcrypt = require('bcrypt');

// Register a new user with duplicate email/username check
let register = async(req,res)=>{
    let db = await connectdb();
    let collection = db.collection("user");
    let {
        name,
        email,
        username,
        password,
        cpassword
    } = req.body;
    
    
    if(!name || !email || !username || !password || !cpassword){
        return res.status(400).json({ message: "Missing required fields" });
    }
    if (password !== cpassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    // Check if email or username already exists
    const existingUser = await collection.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
        return res.status(409).json({ message: "Email or username already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    let user = {
        name : name,
        email : email,
        username : username,
        password : hashedPassword,
        createdAt : new Date()
    }
    let insert = await collection.insertOne(user);

    if (insert.acknowledged) {
        res.status(201).json({
            success: true,
            message: "User registered successfully",
            insert
        })
    }
    else {
        res.status(400).json({
            success: false,
            message: "Internal server error",
        })
    }
}

module.exports={
    register
}