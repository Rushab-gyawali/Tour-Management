import Tour from '../models/Tour.js'

//create new tour
export const createTour = async (req, res) => {
    const newTour = new Tour(req.body);
    console.log(newTour);
    try {
        const savedTour = await newTour.save();
        res.status(200).json({ success: true, message: 'Succesfully created', data: savedTour })
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to create. Try again' })
    }
}


//update tour
export const updateTour = async (req, res) => {
    const id = req.params.id;
    console.log(id);
    try {
        const updatedTour = await Tour.findByIdAndUpdate(id, {
            $set: req.body
        }, { new: true })

        res.status(200).json({
            success: true, message: "Succesfully Updated", data: updatedTour
        });
    } catch (error) {
        res.status(500).json({
            success: false, message: "Failed to update. Try again"
        })
    }
}

//delete tour
export const deleteTour = async (req, res) => {
    const id = req.params.id

    try {
        await Tour.findByIdAndDelete(id)
        res.status(200).json({
            success: true, message: "Succesfully Deleted"
        });
    } catch (error) {
        res.status(500).json({
            success: false, message: "Failed to delete. Try again"
        })
    }
}

//getSingle tour
export const getSingleTour = async (req, res) => {
    const id = req.params.id

    try {
        const tour = await Tour.findById(id);
        res.status(200).json({
            success: true, message: "Tour Detail", data: tour
        });
    } catch (err) {
        res.status(404).json({
            success: false, message: "Cannot Find the tour. Try again"
        })
    }
}

//getAll tour
export const getAllTour = async (req, res) => {
    //for pagination
    const page = parseInt(req.query.page);
    console.log(page);
    try {
        const tourList = await Tour.find({}).skip(page * 8).limit(8);
        res.status(200).json({
            success: true, message: "All Tour List", data: tourList
        });
    } catch (error) {
        res.status(404).json({
            success: false, message: "Cannot Find the tour. Try again"
        })
    }
}