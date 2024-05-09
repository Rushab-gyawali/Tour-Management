import User from '../models/User.js'

//create new User
export const createUser = async (req, res) => {
    const newUser = new User(req.body);
    console.log(newUser);
    try {
        const savedUser = await newUser.save();
        res.status(200).json({ success: true, message: 'Succesfully created', data: savedUser })
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to create. Try again' })
    }
}


//update User
export const updateUser = async (req, res) => {
    const id = req.params.id;
    console.log(id);
    try {
        const updatedUser = await User.findByIdAndUpdate(id, {
            $set: req.body
        }, { new: true })

        res.status(200).json({
            success: true, message: "Succesfully Updated", data: updatedUser
        });
    } catch (error) {
        res.status(500).json({
            success: false, message: "Failed to update. Try again"
        })
    }
}

//delete User
export const deleteUser = async (req, res) => {
    const id = req.params.id

    try {
        await User.findByIdAndDelete(id)
        res.status(200).json({
            success: true, message: "Succesfully Deleted"
        });
    } catch (error) {
        res.status(500).json({
            success: false, message: "Failed to delete. Try again"
        })
    }
}

//getSingle User
export const getSingleUser = async (req, res) => {
    const id = req.params.id

    try {
        const user = await User.findById(id);
        res.status(200).json({
            success: true, message: "User Detail", data: user
        });
    } catch (err) {
        res.status(404).json({
            success: false, message: "Cannot Find the User. Try again"
        })
    }
}

//getAll User
export const getAllUser = async (req, res) => {
    //for pagination
    const page = parseInt(req.query.page);
    try {
        const UserList = await User.find({}).skip(page * 8).limit(8);
        res.status(200).json({
            success: true, message: "All User List", data: UserList
        });
    } catch (error) {
        res.status(404).json({
            success: false, message: "Cannot Find the User. Try again"
        })
    }
}