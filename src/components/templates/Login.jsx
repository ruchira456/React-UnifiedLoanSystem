import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import "../../styles/Login.css"

function Login() {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const navigate = useNavigate();
  function onLogin(auth) {
    if (auth.isCustomer) {
      alert("Enquiry service")
    }
    else {
      axios.get(`http://localhost:9095/employee_details/employee/${auth.username}/${auth.password}`)
        .then(res => {
          if (res.status === 200) {
            sessionStorage.setItem("user", JSON.stringify(res.data));
            navigate('/unified-loan-system')
          }
        })
        .catch(error => alert(error.response.data))
    }
  }
  return (
    <div className="d-flex justify-content-center">

      <div className="background-container"></div>

      <div className="card shadow-lg p-4 rounded-4 w-25 mt-5">
        <h1 className="text-center text-primary">Login Here</h1>
        <form onSubmit={handleSubmit(onLogin)} className="mt-3">

          <div className="mb-3">
            <label className="form-label fw-bold">Username</label>
            <input
              type="text"
              className="form-control border-primary"
              {...register('username', { required: true })}
            />
            {errors.username && <small className="text-danger">Username is required</small>}
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Password</label>
            <input
              type="password"
              className="form-control border-primary"
              {...register('password', { required: true })}
            />
            {errors.password && <small className="text-danger">Password is required</small>}
          </div>

          <div className="form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              {...register('isCustomer')}
            />
            <label className="form-check-label ms-2">I am a customer</label>
          </div>

          <div className="text-center">
            <button className="btn btn-primary w-100">Login</button>
            <button className="btn btn-warning mt-2 w-100">Register</button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default Login;