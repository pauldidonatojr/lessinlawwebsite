import React from 'react'
import styled from 'styled-components'
import { useForm, ValidationError } from '@formspree/react'

const Contact = () => {
 const [state, handleSubmit] = useForm('xeqwjnbk')
 if (state.succeeded) {
  return (
   <div
    style={{
     height: '100vh',
     width: '50vh',
     backgroundColor: 'lightblue',
     display: 'grid',
     justifyContent: 'center',
     alignItems: 'center',
    }}
   >
    <p style={{ fontSize: '1.6rem' }}>We will be in contact shortly!</p>
   </div>
  )
 }
 return (
  <Wrapper>
   <form onSubmit={handleSubmit}>
    <div class="subtitle">Fill the form we will contact you</div>

    <div className="overstop">
     <div class="input-container ic1">
      <input id="firstname" type="firstname" name="firstname" class="input" />

      <div class="cut"></div>

      <label htmlFor="firstname" class="placeholder">
       Name
      </label>

      <ValidationError
       prefix="Firstname"
       field="firstname"
       errors={state.errors}
      />
     </div>
     <div class="input-container ic2">
      <input id="number" type="number" name="number" class="input" />
      <div class="cut "></div>

      <label htmlFor="number" class="placeholder">
       Phone Number
      </label>
      <ValidationError prefix="Phone" field="phone" errors={state.errors} />
     </div>

     <div class="input-container ic2">
      <input id="email" type="email" name="email" className="input" />
      <div class="cut cut-short"></div>
      <label htmlFor="email" className="placeholder">
       Email Address
      </label>
      <ValidationError prefix="Email" field="email" errors={state.errors} />
     </div>

     <div class="input-container2">
      <div class="cut cut-short"></div>

      <textarea
       id="message"
       name="message"
       className="input"
       rows="5"
       cols="50"
       style={{ height: '12rem' }}
      ></textarea>
     </div>

     <button type="submit" class="submit" disabled={state.submitting}>
      submit
     </button>
    </div>
   </form>
  </Wrapper>
 )
}
const Wrapper = styled.section`
 align-items: center;
 background-color: transparent;
 display: flex;
 justify-content: center;
 .overflowstop {
  overflow: scroll;
 }
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
 form {
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
  position: relative; -
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
  width: 90px;
 }

 .cut-short {
  width:100px;
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
  height: 80px;
  margin-top: 10px;
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
