import React,{ useState } from "react";
import "../loginForm.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import 'font-awesome/css/font-awesome.min.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  useHistory, useNavigate
} from "react-router-dom";

const LoginForm = ({ isShowLogin }) => {

var Recaptcha = require('react-recaptcha');

const validationSchema = Yup.object().shape({
    username: Yup.string()
    .required('Username is required')
    .min(6, 'Username must be at least 6 characters')
    .max(20, 'Username must not exceed 20 characters'),
    password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .max(40, 'Password must not exceed 40 characters')
});

const defaultCredential = {
    username: "Admin123",
    password: "Pass123"
};

const MySwal = withReactContent(Swal)
const [formData, setFormData] = useState({
    isVerified : false,
});

var verifyCallback = function (response) {
    if(response){
    setFormData({
        ...formData,
        isVerified:true,
    })
    }
};

var callback = function (){
  console.log("suksess")
}

var expireCallback = function (){
    
}

const {
    register,
    handleSubmit,
    formState: { errors }
} = useForm({
    resolver: yupResolver(validationSchema)
});

let history = useHistory();

const onSubmit = data => {
    let count = Number(localStorage.getItem('count'))
    if(formData.isVerified){
    const compareUname =
    defaultCredential.username !== data.username ? false : true;
    const comparePsswd = 
    defaultCredential.password !== data.password ? false : true;
    if (!comparePsswd || !compareUname) {
        localStorage.setItem('count', ++count)
        if(count < 3){
        toast.error("Incorrect Username/Password");
        }else{
        let timerInterval
        MySwal.fire({
            title: 'Too many failed attempts!',
            allowOutsideClick: false,
            html:
            'Unavailable login because too many failed attempts. Try again after <strong></strong> seconds.<br/><br/>',
            timer: 30000,
            didOpen: () => {
            MySwal.showLoading()

            timerInterval = setInterval(() => {
                MySwal.getHtmlContainer().querySelector('strong')
                .textContent = (MySwal.getTimerLeft() / 1000)
                    .toFixed(0)
            }, 100)
            },
            willClose: () => {
            clearInterval(timerInterval)
            }
        }).then((result) => {
            localStorage.removeItem('count')
            window.location.reload(false);
            /* Read more about handling dismissals below */
            if (result.dismiss === MySwal.DismissReason.timer) {
            }
        })
        }
    } else {
        toast.success("Login Success!");
        history.push('/dashboard')
        // window.location.reload(false);
    }
    }else{
    toast.warning('Please verifying captcha!')
    }
};

  return (
    <div className={`${isShowLogin ? "active" : ""} show`}>
        <div className="container">
            <div className="d-flex justify-content-center h-100">
                <div className="card">
            <div className="card-header">
            <h3>Sign In</h3>
            
            </div>
            <div className="card-body register-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                <label className='remember'>Default Username "Admin123" and Password "Pass123"</label>
                    <div className="input-group form-group">
                        <div className="input-group-prepend">
                        <span className="input-group-text"><i className="fa fa-user text-margin-left"></i></span>
                    </div>
            <input 
              name="username"
              type="text"
              // value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
              {...register('username')}
              className={`form-control ${errors.username ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">{errors.username?.message}</div>						
            </div>
            <div className="input-group form-group">
              <div className="input-group-prepend">
                <span className="input-group-text"><i className="fa fa-key text-margin-left"></i></span>
              </div>
              <input 
              name="password"
              type="password"
              // value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              {...register('password')}
              className={`form-control ${errors.password ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">{errors.password?.message}</div>
            </div>
       
            <Recaptcha
              sitekey={process.env.REACT_APP_SITE_KEY_CAPTCHA}
              render="explicit"
              verifyCallback={verifyCallback}
              onloadCallback={callback}
              expiredCallback={expireCallback}
            />           
            
            <div className="form-group mt-3">
              <button type="submit" className="btn btn-primary float-right login_btn">
                Login
              </button>
            </div>
          </form>
          <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          />
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default LoginForm;
