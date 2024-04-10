const bcrypt = require('bcrypt');
const User = require('../models/user');

exports.register =  async (req,res)=>{
  try {
    const { email, password, name, phoneNo } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      email,
      password: hashedPassword,
      name,
      phoneNo
    });
    const savedUser = await user.save();
    console.log('User created successfully:');
    return res.status(201).json({succeess:true,message:"User created"});
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
}
exports.login = async (req, res) => {
  try {
    console.log("hiii");
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (isPasswordValid) {
      return res.status(200).json({ message: 'Login successful', user });
    } else {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    console.error( error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
