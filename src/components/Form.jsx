import React, { useState } from 'react'
import '../form.css'

export const Form = ({ firstName, lastName, email }) => {





  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;





  const [formData, setFormData] = useState({
    firstName,
    lastName,
    email,
    password: "",
  })




  function checkPasswordLength(password, minLength) {


    if (password.length < minLength) {
      return false
    }
    else {
      return true
    }
  }



                    // email

  const [emailError, setEmailError] = useState('')


                  // password

  const [passwordError, setPasswordError] = useState('')



  const getData = (event) => {




    const name = event.target.name
    const value = event.target.value
    console.log(name, value)



    setFormData({ ...formData, [name]: value })






    



  }




  const showData = () => {
    if (emailRegex.test(formData.email)) {
      setEmailError('')
    }
    else {
      setEmailError("your email is not valid")
    }



            //  passsword

    if (checkPasswordLength(formData.password, 6)) {

      setPasswordError("");
    } else {
      setPasswordError('Password does not meet the minimum length');
    }
  }







  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>



        <div className="container">
          <input type='text' className='firstName' value={formData.firstName} placeholder='firstName' name='firstName'
            onChange={getData} />





          <input type='text' className='lastName' value={formData.lastName} placeholder='lastName' name='lastName'
            onChange={getData} />





          <input type='text' className='email' value={formData.email} placeholder='email' name='email'
            onChange={getData} />



          {emailError !== '' &&
            <span className='emailError'>{emailError}</span>
          }


          <input type='text' className='password' value={formData.password} placeholder='password' name='password'
            onChange={getData} />



          {passwordError !== '' &&
            <span className='passwordError'>{passwordError}</span>
          }



          <div>

            <button className='submit' onClick={showData}>Submit</button>


          </div>






        </div>




      </div>

    </>
  )
}

