// import React, { useContext } from "react";
// import { Marginer } from "../marginer";
// import {
//   BoldLink,
//   BoxContainer,
//   FormContainer,
//   Input,
//   MutedLink,
//   SubmitButton,
// } from "./common";
// import { AccountContext } from "./context";

// export function LoginForm(props) {
//   const { switchToSignup } = useContext(AccountContext);

//   return (
//     <BoxContainer>
//       <FormContainer>
//         <Input placeholder="Email" />
//         <Input type="password" placeholder="********" />
//       </FormContainer>
//       <MutedLink href="#">Forgot Password?</MutedLink>
//       <Marginer direction="vertical" margin="1em" />
//       <SubmitButton>Login</SubmitButton>
//       <Marginer direction="vertical" margin={5} />
//       <MutedLink href="#">
//         Dont have an Account?
//         <BoldLink href="#" onClick={switchToSignup}>
//           sign up
//         </BoldLink>
//       </MutedLink>
//     </BoxContainer>
//   );
// }

import axios from 'axios';
import React, { Component } from 'react'
import { SubmitButton } from './common'

export class LoginForm extends Component {

  handleSubmit = e => {
    e.preventDefault()

    const data = {
      email: this.email,
      password: this.password
    }

    axios.post('signin', data)
    .then(res => {
      localStorage.setItem('token', res.data.token);
    })
    .catch( err => {
      console.log(err)
    })
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input type="email" className="form-control" placeholder="Email" onChange={e => this.email= e.target.value}/>
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="Password" onChange={e => this.password= e.target.value}/>
        </div>

        <SubmitButton className="btn btn-primary btn-block">Login</SubmitButton>
      </form>
      </div>
    )
  }
}

export default LoginForm
