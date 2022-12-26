import React from 'react'
import styled from 'styled-components'
import { useForm, ValidationError } from '@formspree/react'

const Contact = () => {
 const [state, handleSubmit] = useForm('xzbwkndk')
 if (state.succeeded) {
  return <p style={{ fontSize: '2rem' }}>We will be in contact shortly!</p>
 }
 return (
  <Wrapper>
   <div class="form">
    <div class="title">Welcome</div>
    <div class="subtitle">Fill the form we will contact you</div>
    <div class="input-container ic1">
     <input id="firstname" class="input" type="text" placeholder=" " />
     <div class="cut"></div>
     <label for="firstname" class="placeholder">
      Name
     </label>
    </div>
    <div class="input-container ic2">
     <input id="phone" class="input" type="text" placeholder=" " />
     <div class="cut"></div>
     <label for="phone" class="placeholder">
      Phone
     </label>
    </div>
    <div class="input-container ic2">
     <input id="email" class="input" type="text" placeholder=" " />
     <div class="cut cut-short"></div>
     <label for="email" class="placeholder">
      Email
     </label>
    </div>

    <div class="input-container2">
     <div class="cut cut-short"></div>

     <textarea
      className="input"
      name="description"
      rows="5"
      cols="50"
      style={{ height: '15rem' }}
     ></textarea>
     {/* <label for="message" class="placeholder">
      Message
     </label> */}
    </div>

    <button type="text" class="submit">
     submit
    </button>
   </div>

   {/* <form
      className="contact-form"
      onSubmit={handleSubmit}
      style={{ color: 'black' }}
     >
      <label htmlFor="email">Email Address</label>
      <input id="email" type="email" name="email" className="form-input" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <label htmlFor="name">Name</label>
      <input id="name" type="name" name="name" className="form-input" />

      <label htmlFor="number">Phone Number</label>
      <input id="number" type="number" name="number" className="form-input" />

      <label htmlFor="message">Message</label>
      <textarea id="message" type="message" name="message" />

      <button type="submit" className="btn" disabled={state.submitting}>
       Submit
      </button>
     </form> */}
   {/* <p className="info" style={{ color: 'black' }}>
      Fill out the form and we will be in contact with you shortly!
     </p> */}
  </Wrapper>
 )
}
const Wrapper = styled.section`
 align-items: center;
 background-color: transparent;
 display: flex;
 justify-content: center;

 .form {
  background-color: #15172b;
  border-radius: 20px;
  box-sizing: border-box;
  height: auto;
  padding: 20px;
  height: 850px;
  width: 100%;
  margin-bottom: 5.5rem;
 }

 .title {
  color: #eee;
  font-family: sans-serif;
  font-size: 40px;
  font-weight: 600;
  margin-top: 30px;
 }

 .subtitle {
  color: #eee;
  font-family: sans-serif;
  font-size: 20px;
  font-weight: 600;
  margin-top: 10px;
 }

 .input-container {
  height: 50px;
  position: relative;
  width: 100%;
 }

 .input-container2 {
  height: 230px;
  position: relative;
  width: 100%;
  margin-top: 30px;
 }

 .ic1 {
  margin-top: 40px;
 }

 .ic2 {
  margin-top: 30px;
 }

 .input {
  background-color: #303245;
  border-radius: 12px;
  border: 0;
  box-sizing: border-box;
  color: #eee;
  font-size: 22px;
  height: 100%;
  outline: 0;
  padding: 4px 20px 0;
  width: 100%;
 }

 .cut {
  background-color: #15172b;
  border-radius: 10px;
  height: 20px;
  left: 20px;
  position: absolute;
  top: -20px;
  transform: translateY(0);
  transition: transform 200ms;
  width: 76px;
 }

 .cut-short {
  width: 70px;
 }

 .input:focus ~ .cut,
 .input:not(:placeholder-shown) ~ .cut {
  transform: translateY(8px);
 }

 .placeholder {
  color: #65657b;
  font-family: sans-serif;
  left: 20px;
  line-height: 14px;
  pointer-events: none;
  position: absolute;
  transform-origin: 0 50%;
  transition: transform 200ms, color 200ms;
  top: 20px;
 }

 .input:focus ~ .placeholder,
 .input:not(:placeholder-shown) ~ .placeholder {
  transform: translateY(-30px) translateX(10px) scale(0.75);
 }

 .input:not(:placeholder-shown) ~ .placeholder {
  color: #808097;
 }

 .input:focus ~ .placeholder {
  color: #dc2f55;
 }

 .submit {
  background-color: #08d;
  border-radius: 12px;
  border: 0;
  box-sizing: border-box;
  color: #eee;
  cursor: pointer;
  font-size: 18px;
  height: 60px;
  margin-top: 38px;
  // outline: 0;
  text-align: center;
  width: 100%;
 }

 .submit:active {
  background-color: #06b;
 }

 @media only screen and (max-width: 600px) {
  .form {
  }
 }
`

export default Contact
