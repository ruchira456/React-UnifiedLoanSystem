import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

export default function Edit() {
    const { id } = useParams();
    const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm();
    const [panCard, setPancard] = useState();
    const [profile, setProfile] = useState();
    const [showPancard, setShowPancard] = useState();
    const [showProfile, setShowProfile] = useState();

    useEffect(() => {
        // Fetch existing user data to populate the form
        axios.get(`http://localhost:9095/employee_details/save/${id}`)
            .then(res => {
                const userData = res.data;
                setValue('employeeIdentifier', userData.employeeIdentifier);
                setValue('employeeFirstName', userData.employeeFirstName);
                setValue('employeeMiddleName', userData.employeeMiddleName);
                setValue('employeeLastName', userData.employeeLastName);
                setValue('employeeSalary', userData.employeeSalary);
                setValue('employeeAge', userData.employeeAge);
                setValue('userType', userData.userType);
                setShowPancard(userData.employeePancard);
                setShowProfile(userData.employeeImage);
            })
            .catch(error => alert(error.response?.data?.message || "Error fetching user data."));
    }, [id, setValue]);

    function saveData(data) {
        const formData = new FormData();
        formData.append('json-data', JSON.stringify(data));
        if (panCard) formData.append('pan', panCard);
        if (profile) formData.append('prof', profile);

        // Update user data
        axios.put(`http://localhost:9095/employee_details/edit/${id}`, formData)
            .then(res => {
                if (res.status === 200) {
                    alert("User details updated successfully!");
                }
            })
            .catch(error => alert(error.response?.data?.message || "Error updating user data."));
    }

    return (
        <div className='d-flex justify-content-center'>
            <div className='w-50 border border-primary mt-2 p-2'>
                <h1 className='fs-3 text-center'>Edit User</h1>
                <form onSubmit={handleSubmit(saveData)}>
                    <div>
                        <label className='form-control-label'>Enter Firstname:</label>
                        <input type='text' className='form-control' {...register('employeeFirstName', { required: true })} />
                        {errors.employeeFirstName && <p className='text-danger'>Full Name is required.</p>}
                    </div>
                    <div>
                        <label className='form-control-label'>Enter Middlename:</label>
                        <input type='text' className='form-control' {...register('employeeMiddleName', { required: true })} />
                        {errors.employeeMiddleName && <p className='text-danger'>Password is required.</p>}
                    </div>
                    <div>
                        <label className='form-control-label'>Enter Lastname:</label>
                        <input type='text' className='form-control' {...register('employeeLastName', { required: true })} />
                        {errors.employeeLastName && <p className='text-danger'>Mobile number is required.</p>}
                    </div>
                    <div>
                        <label className='form-control-label'>Enter Salary:</label>
                        <input type='text' className='form-control' {...register('employeeSalary', { required: true })} />
                        {errors.employeeSalary && <p className='text-danger'>Employee Salary is required.</p>}
                    </div>
                    <div>
                        <label className='form-control-label'>Enter employee Age:</label>
                        <input type='text' className='form-control' {...register('employeeAge', { required: true })} />
                        {errors.employeeAge && <p className='text-danger'> employee Age is required.</p>}
                    </div>
                    <div>
                        <label className='form-control-label'>Enter userType:</label>
                        <input type='text' className='form-control' {...register('userType', { required: true })} />
                        {errors.userType && <p className='text-danger'>userType is required.</p>}
                    </div>
                    <div>
                        <label className='form-control-label'>Select Pancard:</label>
                        {showPancard && (
                            <img
                                src={`data:image/jpeg;base64,${showPancard}`}
                                alt="Pancard"
                                className='border border-black m-2'
                                width={'100px'}
                            />
                        )}
                        <input type='file' className='form-control' onChange={e => setPancard(e.target.files[0])} />
                    </div>

                    <div>
                        <label className='form-control-label'>Select Profile:</label>
                        {showProfile && (
                            <img
                                src={`data:image/jpeg;base64,${showProfile}`}
                                alt="Profile"
                                className='border border-black m-2'
                                width={'100px'}
                            />
                        )}
                        <input type='file' className='form-control' onChange={e => setProfile(e.target.files[0])} />
                    </div>
                    <button className='btn btn-success w-25 mt-3'>Submit</button>
                </form>
            </div>
        </div>
    );
}
