import Evaluation from "../model/data.js"

const createOrUpdateEmployee = async (req, res) => {
    try {
        const { employeeCode } = req.body;
        if (!employeeCode) {
            return res.status(400).json({success:false, message: 'Employee code is required' });
        }
        
        const updatedEmployee = await Evaluation.findOneAndUpdate(
            { employeeCode }, 
            req.body,
            { new: true, upsert: true, setDefaultsOnInsert: true } 
        );

        return res.status(200).json({success:true, message: 'Employee record created/updated successfully', data: updatedEmployee });
    } catch (error) {
        console.error('Error creating/updating employee:', error);
        return res.status(500).json({success:false, message: 'Internal server error', error: error.message });
    }
};

const getEmployeeById = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);
        
        const employee = await Evaluation.findOne({employeeCode:id});
        if (!employee) {
            return res.status(200).json({success:false, message: 'Employee not found' });
        }

        return res.status(200).json({success:true, data: employee });
    } catch (error) {
        console.error('Error fetching employee:', error);
        return res.status(500).json({success:false, message: 'Internal server error', error: error.message });
    }
};

export {createOrUpdateEmployee,getEmployeeById}