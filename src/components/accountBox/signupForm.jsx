// import React, { useContext } from "react";
// import { Marginer } from "../marginer";
 import {
//   BoldLink,
//   BoxContainer,
//   FormContainer,
//   Input,
//   MutedLink,
   SubmitButton,
 } from "./common";
// import { AccountContext } from "./context";

// export function SignupForm(props) {
//   const { switchToSignin } = useContext(AccountContext);
//   handleSubmit = () => {
//   console.log('Okay!!!')
// }
//   return (
//     <BoxContainer>
//       <FormContainer onSubmit={handleSubmit}>
//         <Input placeholder="Full Name" />
//         <Input placeholder="Email" />
//         <Input placeholder="Profession ID" />
//         <Input placeholder="Place of work" />
//         <Input type="password" placeholder="Password" />
//         <Input type="password" placeholder="Confirm Password" />
//       </FormContainer>
//       <Marginer direction="vertical" margin="1em" />
//       <SubmitButton>Signup</SubmitButton>
//       <Marginer direction="vertical" margin={5} />
//       <MutedLink href="#">
//         Already have an account?
//         <BoldLink href="#" onClick={switchToSignin}>
//           sign in
//         </BoldLink>
//       </MutedLink>
//     </BoxContainer>
//   );
// }

import React, { Component } from 'react'
import axios from "axios";

export class SignupForm extends Component {

  handleSubmit = e => {
    e.preventDefault()

    const data = {
      full_Name: this.fullName,
      Email: this.email,
      service_Offer: this.serviceOffer,
      ID_Number: this.IDNumber,
      password: this.password,
      password_confirm: this.confirmPassword
    };
    
    axios.post('signup', data)
    .then(
      res => {
        console.log(res)
      }
    )
    .catch(
      err => {
        console.log(err)
      }
    )

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" className="form-control" placeholder="Full Name" onChange={e => this.fullName= e.target.value}/>
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" className="form-control" placeholder="Email" onChange={e => this.email= e.target.value} />
        </div>

        <div className="form-group">
          <label>Service</label>
          <input type="text" className="form-control" placeholder="Service" onChange={e => this.serviceOffer= e.target.value}/>
        </div>

        <div className="form-group">
          <label>ID Number</label>
          <input type="text" className="form-control" placeholder="ID Number" onChange={e => this.IDNumber= e.target.value}/>
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="Password" onChange={e => this.password= e.target.value}/>
        </div>

        <div className="form-group">
          <label>Confirm Password</label>
          <input type="password" className="form-control" placeholder="Confirm Password" onChange={e => this.confirmPassword= e.target.value}/>
        </div>

        <SubmitButton className="btn btn-primary btn-block">Sign Up</SubmitButton>
      </form>
    )
  }
}

export default SignupForm
