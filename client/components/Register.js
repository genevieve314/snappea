import React, { PropTypes } from 'react';
import { Modal, Button } from 'react-bootstrap';
import isValid from './../utils/validationHelperFunctions';

class Register extends React.Component {
  constructor(){
    super();
    this.setFirst = this.setFirst.bind(this);
    this.setLast = this.setLast.bind(this);
    this.setPw = this.setPw.bind(this);
    this.setUser = this.setUser.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setPhone = this.setPhone.bind(this);
    this.displayAlphaErrFirst = this.displayAlphaErrFirst.bind(this);
    this.displayAlphaErrLast = this.displayAlphaErrLast.bind(this);
    this.displayEmailErr = this.displayEmailErr.bind(this);
    this.displayUsernameErr = this.displayUsernameErr.bind(this);
    this.isFormError = this.isFormError.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.switch = this.switch.bind(this);
    this.state = {
      first: '',
      last: '',
      pw: '',
      username: '',
      email: '',
      phone: '',
      runStatus: ''
    }
  }

  setFirst(e){
    this.setState({
      first: e.target.value
    })
  }

  setLast(e){
    this.setState({
      last: e.target.value
    })
  }

  setPw(e){
    this.setState({
      pw: e.target.value
    })
  }

  setUser(e){
    this.setState({
      username: e.target.value
    })
  }

  setEmail(e){
    this.setState({
      email: e.target.value
    })
  }

  setPhone(e){
    this.setState({
      phone: e.target.value
    })
  }

  displayAlphaErrFirst(){
    return isValid.isAlpha(this.state.first) ? null : "input must be a-z characters"
  }

  displayAlphaErrLast(){
    return isValid.isAlpha(this.state.last) ? null : "input must be a-z characters"
  }

  displayEmailErr(){
    return isValid.isEmail(this.state.email) ? null :
    <span className="login-error">please enter a valid email address</span>
  }

  displayPhoneErr(){
    return isValid.isPhone(this.state.phone) ? null :
    <span className="login-error">please enter a valid phone number</span>
  }

  displayUsernameErr(){
    if(this.props.authErrorMsg.message){
      return(
        <span className="login-error form-error">
          Sorry, this username has been taken. Please try another one.
        </span>
      )
    } else {
      return null;
    }
  }

  isFormError(){
    if(this.state.first.length === 0 || this.state.last.length === 0 || this.state.pw.length === 0 || this.state.username.length === 0 || this.state.email.length === 0 || this.state.phone.length === 0){
      this.setState({runStatus: 'Required fields cannot be left empty'});
      return true;
    }

    if(this.displayAlphaErrFirst() || this.displayAlphaErrLast() || this.displayEmailErr() ||
    this.displayPhoneErr()){
      this.setState({runStatus: 'Please fix all form errors before submitting'});
      return true;
    }

    return false;
  }

  handleClick(e){
    e.preventDefault();
    if(!this.isFormError()){
      const { registerUser } = this.props.authActions;
      const firstname = this.refs.firstname;
      const lastname = this.refs.lastname;
      const username = this.refs.username;
      const password = this.refs.password;
      const email = this.refs.email;
      const phone = this.refs.phone;
      const userInfo = {
        firstname: firstname.value,
        lastname: lastname.value,
        username: username.value,
        password: password.value,
        email: email.value,
        phone: phone.value
      };

      registerUser(userInfo);

      firstname.value = '';
      lastname.value = '';
      username.value = '';
      password.value = '';
      email.value = '';
      phone.value = '';
    }
  }

  switch(e){
    e.preventDefault();
    this.props.closeRegister();
    this.props.openSignIn();
  }

  render(){
    let infoBox = this.props.isFetching ? (
      <div className='register-spinner'>
        <h3>Creating your pod...</h3>
        <image src='./../static/assets/darkspinner.gif' />
      </div> ) : (
      <form>
        <div className='form-group name-input'>
          <input
            type='text'
            className='form-control'
            placeholder='First Name*'
            ref='firstname'
            onChange={this.setFirst} />
        </div>
        <div className='form-group name-input'>
          <input
            type='text'
            className='form-control'
            placeholder='Last Name*'
            ref='lastname'
            onChange={this.setLast} />
        </div>
        <span className='login-error'>{this.displayAlphaErrFirst()}</span>
        <span className='login-error error-right'>{this.displayAlphaErrLast()}</span>
        <div className='form-group username'>
          <input
            type='text'
            className='form-control'
            placeholder='Username*'
            ref='username'
            onChange={this.setUser} />
        </div>
        {this.displayUsernameErr()}
        <div className='form-group'>
          <input
            type='password'
            className='form-control'
            placeholder='Password*'
            ref='password'
            onChange={this.setPw} />
        </div>
        <div className='form-group'>
          <input
            type='email'
            className='form-control'
            placeholder='Email*'
            ref='email'
            onChange={this.setEmail} />
        </div>
        <div className='form-group'>
          <input
            type='phone'
            className='form-control'
            placeholder='Phone*'
            ref='phone'
            onChange={this.setPhone} />
        </div>
        <span className="login-error form-error">{this.state.runStatus}</span>
        <div className='form-group'>
          <button
            type='submit'
            className='btn btn-block submit'
            onClick={this.handleClick}><span>Register</span>
          </button>
        </div>
        <div className='toggle'>
          Already have an account? <br /> Click <a href="#" onClick={this.switch}>here</a> to sign in.
        </div>
      </form>
    );

    return(
      <Modal
        show={this.props.showRegisterModal}
        onHide={this.props.closeRegister}
        className='loginmodal register'>
        <Modal.Header closeButton className="close-btn">
        </Modal.Header>
        <Modal.Body className='modalbody'>
          {infoBox}
        </Modal.Body>
      </Modal>
    )
  }
}

export default Register;
