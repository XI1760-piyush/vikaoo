import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { Navbar, Nav, Modal, Card, Dropdown } from 'react-bootstrap';
import { faUser, faSearch, faSignInAlt, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from 'react-redux';
import toastr from 'toastr'
import { make_register, make_login } from './actions'
import './style.scss';

function Header(props) {
  const [state, setState] = useState({ isRegister: false, isLogin: false, isSearch: false, showMenu: true, loc: '', stext: '' });
  const [user, setUser] = useState({});
  const [userName, setUserName] = useState();
  const [errorMsg, setErrorMsg] = useState();
  const showLogin = () => { setState({ ...state, isRegister: false, isLogin: true }); setUser({}); }
  const hideLogin = () => setState({ ...state, isRegister: false, isLogin: false });
  const showRegister = () => { setState({ ...state, isRegister: true, isLogin: false }); setUser({}); }
  const hideRegister = () => setState({ ...state, isRegister: false, isLogin: false });


  const saveData = (key, e) => {
    e.preventDefault();
    setUser({ ...user, [key]: e.target.value })
  }

  const makeRegister = (e) => {
    e.preventDefault();

    if (user.name) {
      if (user.name.length < 3) {
        return setErrorMsg('Name Should Be atleast 3 Character Long')
      } else if (user.name.length > 32) {
        return setErrorMsg('Name Should Be atmost 50 Character Long')
      }
    } else {
      return setErrorMsg('Please Enter Name')
    }

    if (user.phone) {
      let phoneReg = /^[0-9]+$/
      if (user.phone.length != 10) {
        return setErrorMsg('Phone Number Should Be 10 Character Long')
      } else if (!user.phone.match(phoneReg)) {
        return setErrorMsg('Phone Number Should Be Numeric Only')
      }
    } else {
      return setErrorMsg('Please Enter Phone Number')
    }

    if (user.email) {
      let emailReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      if (user.email.length < 3) {
        return setErrorMsg('Email Should Be atleast 3 Character Long')
      } else if (user.email.length > 300) {
        return setErrorMsg('Email Should Be atmost 300 Character Long')
      } else if (!user.email.match(emailReg)) {
        return setErrorMsg('Invalid Email Format')
      }
    } else {
      return setErrorMsg('Please Enter Email')
    }

    if (user.password) {
      if (user.password.length < 8) {
        return setErrorMsg('Password Should Be atleast 8 Character Long')
      } else if (user.password.length > 32) {
        return setErrorMsg('Password Should Be atmost 32 Character Long')
      }
    } else {
      return setErrorMsg('Please Enter Password')
    }

    if (!user.cpassword) {
      return setErrorMsg('Please Enter Confirm Password')
    }

    if (user.cpassword != user.password) {
      return setErrorMsg('Please Enter Confirm Password')
    }
    setErrorMsg('')
    props.makeRegister(user)
  }


  const makeLogin = (e) => {
    e.preventDefault();

    if (!user.userinfo) {
      return setErrorMsg('Please Enter Email Address/Phone Number')
    }

    if (!user.password) {
      return setErrorMsg('Please Enter Password')
    }

    setErrorMsg('')
    props.makeLogin(user)
  }


  if (props.register_msg == 'success' || props.login_msg == 'success') {
    let user = props.user_data.data;
    localStorage.setItem('token', user.token)
    localStorage.setItem('userName', user.name)
    setTimeout(() => {
      window.location.reload()
    }, 2000)
  }


  if (localStorage.getItem('token') && localStorage.getItem('userName') && state.showMenu) {
    setUserName(localStorage.getItem('userName'))
    setState({ ...state, showMenu: false })
  }

  const logout = () => {
    localStorage.clear()
    props.history.push('/')
    window.location.reload()
  }

  const openRegister = () => {
    hideLogin()
    showRegister()
  }

  const openLogin = () => {
    hideRegister()
    showLogin()
  }

  const searchText = (e) => {
    setState({ ...state, stext: e.target.value })
  }

  const makeSearch = () => {
    window.location = (`/search?q=${state.stext}&loc=${state.loc}`)
  }

  return (
    <header>

      <div class="upper-header">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              {!state.showMenu ?
                <ul>
                  <li><a href="/profile">My Account</a></li>
                  <li>
                    <a href="/favourites">My Favourites</a>
                  </li>
                  <li>
                    <a href="/my-products">My Products</a>
                  </li>
                </ul> : null}
            </div>
            <div class="col-md-6">
              <ul class="upper-right">
                {state.showMenu ? <>
                  <li>
                    <a onClick={showRegister} href="#register">Register
                    <span><i class="fa fa-angle-down" aria-hidden="true"></i></span></a>
                  </li>
                  <li>
                    <a onClick={showLogin} href="#login">Login
                    <span><i class="fa fa-user-o" aria-hidden="true"></i></span></a>
                  </li>
                </> : <>
                    <li>
                      <a href="/change-password">Change Password
                    <span><i class="fa fa-angle-down" aria-hidden="true"></i></span></a>
                    </li>
                    <li>
                      <a onClick={logout} href="#logout">Logout
                    <span><i class="fa fa-user-o" aria-hidden="true"></i></span></a>
                    </li>
                  </>
                }
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="middle-header">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-sm-3">
              <div class="logo">
                <a href="/"><img src="/assets/img/logo.png" alt="" /></a>
              </div>
            </div>

            <div class="col-sm-7">
              <div class="middle-left">
                <ul>
                  <li>
                    <form action="">
                      <div class="form-group">
                        <input type="text" class="form-control" placeholder="Find Cars, Mobile Phones and more..." id="" />
                        <span class="location-btn">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14.414" height="20.5" viewBox="0 0 14.414 20.5">
                            <g id="location-icon" transform="translate(-76)">
                              <g id="Group_17" data-name="Group 17" transform="translate(76)">
                                <g id="Group_16" data-name="Group 16">
                                  <path id="Path_10" data-name="Path 10" d="M83.207,0a7.208,7.208,0,0,0-6.131,11L82.8,20.216a.6.6,0,0,0,.51.284h0a.6.6,0,0,0,.51-.292L89.4,10.9A7.209,7.209,0,0,0,83.207,0Zm5.16,10.283L83.3,18.746l-5.2-8.382a6.01,6.01,0,1,1,10.27-.081Z" transform="translate(-76)" fill="#fff"></path>
                                </g>
                              </g>
                              <g id="Group_19" data-name="Group 19" transform="translate(79.604 3.604)">
                                <g id="Group_18" data-name="Group 18">
                                  <path id="Path_11" data-name="Path 11" d="M169.6,90a3.6,3.6,0,1,0,3.6,3.6A3.608,3.608,0,0,0,169.6,90Zm0,6.014a2.41,2.41,0,1,1,2.406-2.41A2.412,2.412,0,0,1,169.6,96.014Z" transform="translate(-166 -90)" fill="#fff"></path>
                                </g>
                              </g>
                            </g>
                          </svg>

                          Search</span>
                        <button type="submit" class="btn">
                          <FontAwesomeIcon icon={faSearch} />
                        </button>
                      </div>
                    </form>
                  </li>
                </ul>
              </div>
            </div>
            {!state.showMenu ?
              <div class="col-sm-2">
                <a href="/add-product" class="start-selling">Start Selling</a>
              </div> :
              <div class="col-sm-2">
                <a href="#login" onClick={showLogin} class="start-selling">Start Selling</a>
              </div>
            }
          </div>
        </div>
      </div>

      <div class="bottom-header">
        <div class="container">
          <div class="">
            <div class="">
              <nav class="navbar navbar-expand-lg navbar-light">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20.335" height="14.234" viewBox="0 0 20.335 14.234">
                          <g id="playlist" transform="translate(0 -64)">
                            <g id="Group_22" data-name="Group 22" transform="translate(0 64)">
                              <g id="Group_21" data-name="Group 21" transform="translate(0 0)">
                                <rect id="Rectangle_33" data-name="Rectangle 33" width="12.201" height="2.033" fill="#fff"></rect>
                                <rect id="Rectangle_34" data-name="Rectangle 34" width="12.201" height="2.033" transform="translate(0 4.067)" fill="#fff"></rect>
                                <rect id="Rectangle_35" data-name="Rectangle 35" width="8.134" height="2.033" transform="translate(0 8.134)" fill="#fff"></rect>
                                <path id="Path_12" data-name="Path 12" d="M219.433,153.4v-4.067H217.4V153.4h-4.067v2.033H217.4V159.5h2.033v-4.067H223.5V153.4Z" transform="translate(-203.166 -145.266)" fill="#fff"></path>
                              </g>
                            </g>
                          </g>
                        </svg>
                        All Categories</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Motorcycles</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Mobile Phones</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">For Sale: Houses &amp; Apartments</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Scooters</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Commercial &amp; Other Vehicles</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <Modal className="login-box" size={'lg'} show={state.isLogin} onHide={hideLogin}>
        <Modal.Body>
          <Card>
            <Card.Body>
              <div className="row no-gutters">
                <div className="col-md-12">
                  <div className="card-body text-center">
                    <div className="brand-wrapper">
                      <img src="assets/img/logo.png" alt="logo" className="logo" />
                    </div>
                    <p className="login-card-description">Login your account</p>
                    {errorMsg ?
                      <div className="alert alert-danger">
                        {errorMsg}
                      </div> : null
                    }
                    {
                      props.login_error_msg ? <div className="alert alert-danger">
                        {props.login_error_msg}
                      </div> : null
                    }
                    {
                      props.login_msg == 'success' ? <div className="alert alert-success">
                        User Successfully Logged In
                      </div> : null
                    }

                    <form action="#!">
                      <div className="form-group">
                        <label htmlFor="email" className="sr-only">Email Address/ Phone Number</label>
                        <input type="email" name="email" id="email" onChange={saveData.bind(this, 'userinfo')} className="form-control" placeholder="Email address / Phone Number" />
                      </div>
                      <div className="form-group mb-4">
                        <label htmlFor="password" className="sr-only">Password</label>
                        <input type="password" name="password" id="password" onChange={saveData.bind(this, 'password')} className="form-control" placeholder="Password" />
                      </div>
                      <input name="login" onClick={makeLogin} className="btn btn-block login-btn mb-4" type="button" value="Login" />
                    </form>
                    <Link to="forget-password" className="forgot-password-link">Forgot password?</Link>
                    <p className="register-link">Don't have an account? <Link to="#" onClick={openRegister} className="text-reset">Register here</Link></p>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Modal.Body>
      </Modal>
      <Modal className="login-box" size={'lg'} show={state.isRegister} onHide={hideRegister}>
        <Modal.Body>
          <Card>
            <Card.Body>
              <div className="row no-gutters">
                <div className="col-md-12">
                  <div className="card-body text-center">
                    <div className="brand-wrapper">
                      <img src="assets/img/logo.png" alt="logo" className="logo" />
                    </div>
                    <p className="login-card-description">Create your account</p>
                    {errorMsg ?
                      <div className="alert alert-danger">
                        {errorMsg}
                      </div> : null
                    }
                    {
                      props.reg_error_msg ? <div className="alert alert-danger">
                        {props.reg_error_msg}
                      </div> : null
                    }
                    {
                      props.register_msg == 'success' ? <div className="alert alert-success">
                        User Successfully Registered
                      </div> : null
                    }

                    <div className="alert alert-success" ref={el => {
                      el &&
                        el.addEventListener("selectstart", (e) => {
                          e.preventDefault()
                          console.log("Selection started");
                        });
                    }}>
                      User Successfully Registered
                      </div>


                    <form action="#!">
                      <div className="form-group">
                        <label htmlFor="name" className="sr-only">Name</label>
                        <input type="text" name="name" onChange={saveData.bind(this, 'name')} id="name" className="form-control" placeholder="Name" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="name" className="sr-only">Phone Number</label>
                        <input type="text" name="phonenumber" onChange={saveData.bind(this, 'phone')} id="phonenumber" className="form-control" placeholder="Phone Number" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email" className="sr-only">Email</label>
                        <input type="email" name="email" id="email" onChange={saveData.bind(this, 'email')} className="form-control" placeholder="Email address" />
                      </div>
                      <div className="form-group mb-4">
                        <label htmlFor="password" className="sr-only">Password</label>
                        <input type="password" name="password" onChange={saveData.bind(this, 'password')} id="password" className="form-control" placeholder="Password" />
                      </div>
                      <div className="form-group mb-4">
                        <label htmlFor="password" className="sr-only">Confirm Password</label>
                        <input type="password" name="cpassword" onChange={saveData.bind(this, 'cpassword')} id="cpassword" className="form-control" placeholder="Confirm Password" />
                      </div>
                      <input name="register" onClick={makeRegister} className="btn btn-block login-btn mb-4" type="button" value="Register" />
                    </form>
                    <p className="register-link">Already have an account? <Link to="#" onClick={openLogin} className="text-reset">Login here</Link></p>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Modal.Body>
      </Modal>

    </header>
  );
}

const mapStateToProps = (state) => {
  return {
    user_data: state.headerReducer.user_data,
    register_msg: state.headerReducer.register_msg,
    reg_error_msg: state.headerReducer.reg_error_msg,
    login_msg: state.headerReducer.login_msg,
    login_error_msg: state.headerReducer.login_error_msg,
  };
};

const mapDispatchToProps = (dispatch) => ({
  makeRegister: (user) => dispatch(make_register(user)),
  makeLogin: (user) => dispatch(make_login(user))
});


export default connect(mapStateToProps, mapDispatchToProps)(Header)