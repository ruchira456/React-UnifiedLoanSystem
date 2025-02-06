import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

function AddEmployee() {
  const {register,handleSubmit,setValue,reset,formState:{errors}}=useForm({})
  const [employeeImage,setEmployeeImage]=useState();
  const[employeePanCard,setEmployeePanCard]=useState();





  function saveData(data){
      const formData=new FormData();
      formData.append('json-data',JSON.stringify(data));
      formData.append('pan-image',employeePanCard);
      formData.append('prof-image',employeeImage);

      axios.post('http://localhost:7088/employee_details/save_employee',formData).then(
          res=>{
              if(res.status===201)
              { 
                  console.log(res.data)
                  alert("User Saved successsfully....!!!!")
              }
          }
      ).catch(error=>{
          console.log(error);
      })
  }


return (
  <div>
      <div  className=' text-center '>
           <h1 className=''>
              <i className='bi pen'/>Register Here.....!!!</h1>
     </div>
     <div  className='d-flex justify-content-center' >
      <div  className='w-50 border border-dark mt-2 p-2  border border-4 5' >
          <form onSubmit={handleSubmit(saveData)}>
              <div>
                  <label className='form-control-label'>Enter First Name:-</label>
                  <input type='text' className='form-control' {...register('employeeFirstName')}></input>
              </div>

              <div>
                  <label className='form-control-label'>Enter Middle Name:-</label>
                  <input type='text' className='form-control'{...register('employeeMiddleName')}></input>
              </div>

              <div>
                  <label className='form-control-label'>Enter Last Name:-</label>
                  <input type='text' className='form-control'{...register('employeeLastName')}></input>
              </div>


              <div>
                  <label className='form-control-label'>Enter Employee Email :-</label>
                  <input type='text' className='form-control' {...register('employeeEmail')}></input>
              </div>

              <div>
                  <label className='form-control-label'>Enter Employee Age:-</label>
                  <input type='text' className='form-control' {...register('employeeAge')}></input>
              </div>

              <div>
                  <label className='form-control-label'>Enter Employee Salary :-</label>
                  <input type='text' className='form-control' {...register('employeeSalary')}></input>
              </div>
              <div>
                <label className='form-check-label'>Select Employee Type:</label><br></br>
                <input type="radio" className='form-check-input' Value="CRM" {...register('userType')}/> Customer RelationShip Manager<br></br>
                <input type="radio" className='form-check-input' Value="AH" {...register('userType')}/> Account Head<br></br>
                <input type="radio" className='form-check-input' Value="OE" {...register('userType')}/> Operational Execative<br></br>
                <input type="radio" className='form-check-input' Value="CM" {...register('userType')}/> Credit Manager<br></br>
                
                
              </div>

   

              <div>
                  <label className='form-control-label'>upload Profile Image :-</label>
                  <input type='file' className='form-control'  onChange={e=>setEmployeeImage(e.target.files[0])}></input>
              </div>

              <div>
                  <label className='form-control-label'>upload PanCard:-</label>
                  <input type='file' className='form-control' onChange= {e=>setEmployeePanCard(e.target.files[0])} ></input>
              </div>

             <div>
             <button className='btn btn-success w-25 mt-3'>Submit</button>

              </div>

          
             
              
          </form>
          </div>
      
     </div>
  </div>)
}

export default AddEmployee