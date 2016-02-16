import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Gravatar from 'react-gravatar';

//Actions
import * as authActions from './../actions/authActions';

//Components
import Navigation from './../components/Navigation';
import SignIn from './../components/SignIn';
import Register from './../components/Register';

class HomePage extends React.Component {
  constructor(){
    super();
    this.openSignIn = this.openSignIn.bind(this);
    this.closeSignIn = this.closeSignIn.bind(this);
    this.openRegister = this.openRegister.bind(this);
    this.closeRegister = this.closeRegister.bind(this);
    this.state = {
      showSignInModal: false,
      showRegisterModal: false
    }
  }

  openSignIn(){
    this.setState({
      showSignInModal: true
    })
  }

  closeSignIn(){
    this.setState({
      showSignInModal: false
    })
  }

  openRegister(){
    this.setState({
      showRegisterModal: true
    })
  }

  closeRegister(){
    this.setState({
      showRegisterModal: false
    })
  }

  render(){
    return (
      <div className='home'>
        <div id="bg-fade-carousel" className="carousel slide carousel-fade" data-ride="carousel">
            <div className="carousel-inner">
                <div className="item active">
                    <div className="slide1"></div>
                </div>
                <div className="item">
                    <div className="slide2"></div>
                </div>
                <div className="item">
                    <div className="slide3"></div>
                </div>
                <div className="item">
                    <div className="slide4"></div>
                </div>
                <div className="item">
                    <div className="slide5"></div>
                </div>
            </div>
            <div className="container carousel-overlay text-center">
                <image className='logo' src="./../static/assets/snap_pea_logo.png"/>
                <a
                  className="btn btn-lg btn-success fp-buttons"
                  href="#"
                  onClick={this.openSignIn}>
                  Sign In
                  <SignIn
                    {...this.props}
                    showSignInModal={this.state.showSignInModal}
                    closeSignIn={this.closeSignIn}
                    openRegister={this.openRegister} />
                </a>
                &nbsp;&nbsp;
                <a
                  className="btn btn-lg btn-success fp-buttons"
                  href="#"
                  onClick={this.openRegister}>
                  Register
                  <Register
                    {...this.props}
                    showRegisterModal={this.state.showRegisterModal}
                    closeRegister={this.closeRegister}
                    openSignIn={this.openSignIn} />
                </a>
            </div>
        </div>

        <div className="about text-center">
          <h1 className="about-title">How It Works</h1>
          <div className="row">
            <div className="steps text-center col-xs-12 col-md-4">
              <center><h4 className="step" > Step 1 </h4> </center>
              <h4 className="describe">Choose your Favorite Food Photos </h4>
              <center><h4 className="step"> Step 2 </h4> </center>
              <h4 className="describe"> Select a Location (and Invite Friends) </h4>
              <center><h4 className="step"> Step 3 </h4></center>
              <h4 className="describe"> Get Custom-Tailored Restaurant Recommendations </h4>
            </div>
            <img className="gif col-xs-12 col-md-8" src="./../static/assets/home/options.jpg" />
          </div>
        </div>
        <div className="purpose text-center">
          <div className="how1">
            <h4 className="description">Take the indecision out of dining out </h4>
          </div>
          <div className="how2">
            <h4 className="right">Explore unexpected culinary delights </h4>
          </div>
          <div className="how3">
            <h4 className="description">Optimize your group searches</h4>
          </div>
        </div>

        <div className="container team text-center">
          <h1 className="team-title">Meet the SnapPea Team</h1>
          <div className="snappers">
            <div className="row">

              <span className="team-member col-md-3">
                <center><image className="img-circle" height="135px" src="./../static/assets/team/daisy.jpg"/>
                <h3 className="member-name" >Daisy Tsao</h3>
                <a href="https://www.linkedin.com/in/daisytsao"><i className="fa fa-linkedin-square fa-2x"></i></a>&nbsp;&nbsp;
                <a href="https://github.com/madcurie" target="_blank"><i className="fa fa-github-square fa-2x"></i></a>
                <h5>Likes React, Redux, and enforcing chores.</h5></center>
              </span>

              <span className="team-member col-md-3">
                <center><image className="img-circle" height="135px" src="./../static/assets/team/carl.jpg"/>
                <h3 className="member-name" >Carl Bernardo</h3>
                <a href="https://www.linkedin.com/in/carlbernardo"><i className="fa fa-linkedin-square fa-2x"></i></a>&nbsp;&nbsp;
                <a href="https://github.com/carlbernardo" target="_blank"><i className="fa fa-github-square fa-2x"></i></a>
                <h5>Likes React, Redux, and hipster coffee joints.</h5></center>
              </span>

              <span className="team-member col-md-3">
                <center><image className="img-circle" height="135px" src="./../static/assets/team/justin.jpg"/>
                <h3 className="member-name" >Justin Tan</h3>
                <a href="https://www.linkedin.com/in/justanman"><i className="fa fa-linkedin-square fa-2x"></i></a>&nbsp;&nbsp;
                <a href="https://github.com/justanman" target="_blank"><i className="fa fa-github-square fa-2x"></i></a>
                <h5>Likes React, Redux, and paying half price for everything.</h5></center>
              </span>

              <span className="team-member col-md-3">
                <center><image className="img-circle" height="135px" src="./../static/assets/team/shin.jpg"/>
                <h3 className="member-name" >Shin Adachi</h3>
                <a href="https://www.linkedin.com/in/shin-adachi-1b6bb1113"><i className="fa fa-linkedin-square fa-2x"></i></a>&nbsp;&nbsp;
                <a href="https://github.com/shin064" target="_blank"><i className="fa fa-github-square fa-2x"></i></a>
                <h5>Likes React, Redux, and NPR podcasts.</h5></center>
              </span>

            </div>

            <div className="row">

              <span className="team-member col-md-3">
                <center><image className="img-circle" height="135px" src="./../static/assets/team/genevieve.jpg"/>
                <h3 className="member-name" >Genevieve Kolve</h3>
                <a href="https://www.linkedin.com/in/genevievekolve"><i className="fa fa-linkedin-square fa-2x"></i></a>&nbsp;&nbsp;
                <a href="https://github.com/genevieve314" target="_blank"><i className="fa fa-github-square fa-2x"></i></a>
                <h5>Likes React, Redux, and yoga.</h5></center>
              </span>

              <span className="team-member col-md-3">
                <center><image className="img-circle" height="135px" src="./../static/assets/team/erik.jpeg"/>
                <h3 className="member-name" >Erik McGarraugh</h3>
                <a href="https://www.linkedin.com/in/erikmcgarraugh"><i className="fa fa-linkedin-square fa-2x"></i></a>&nbsp;&nbsp;
                <a href="https://github.com/erikmcgarraugh" target="_blank"><i className="fa fa-github-square fa-2x"></i></a>
                <h5>Likes React, Redux, and electronics.</h5></center>
              </span>

              <span className="team-member col-md-3">
                <center><image className="img-circle" height="135px" src="./../static/assets/team/john.jpg"/>
                <h3 className="member-name" >John Michelin</h3>
                <a href="https://www.linkedin.com/in/johnmichelin"><i className="fa fa-linkedin-square fa-2x"></i></a>&nbsp;&nbsp;
                <a href="https://github.com/jmichelin" target="_blank"><i className="fa fa-github-square fa-2x"></i></a>
                <h5>Likes React, Redux, and snowboarding.</h5></center>
              </span>

              <span className="team-member col-md-3">
                <center><image className="img-circle" height="135px" src="./../static/assets/team/ryan2.jpg"/>
                <h3 className="member-name" >Ryan Reynolds</h3>
                <a href="https://www.linkedin.com/in/ryanscottreynolds"><i className="fa fa-linkedin-square fa-2x"></i></a>&nbsp;&nbsp;
                <a href="https://github.com/reynoldsryan" target="_blank"><i className="fa fa-github-square fa-2x"></i></a>
                <h5>Likes React, Redux, and video games.</h5></center>
              </span>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.authReducer.isFetching,
    authErrorMsg: state.authReducer.authErrorMsg
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    authActions: bindActionCreators(authActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
