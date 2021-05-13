import React from "react";
import { openModal } from "../../actions/modal_actions";

const initialState = {
  nameError: "",
  emailError: "",
  passwordError: "",
};

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      date_of_birth: "",
      email: "",
      password: "",
      nameError: "",
      emailError: "",
      passwordError: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoUser = this.demoUser.bind(this);
  }

  componentWillMount() {
    this.props.clearErrors();
  }

  validate() {
    let nameError = "";
    let emailError = "";
    let passwordError = "";
    let password = this.state.password;
    let email = this.state.email;
    const splitOnAt = email.split("@");
    const splitOnDot = email.split(".");

    if (
      !email.includes("@") ||
      !email.includes(".") ||
      splitOnAt.length > 2 ||
      splitOnDot[splitOnDot.length - 1].length < 2 ||
      email === ""
    ) {
      emailError = "Enter a valid email.";
    }

    if (!this.state.fname) {
      nameError = "First name is required";
    } else if (!this.state.lname) {
      nameError = "Last name is required";
    }

    if (password.length === 0) {
      passwordError = "Password is required";
    } else if (password.length < 6) {
      passwordError =
        "Your password must be at least 6 characters. Please try again.";
    }

    if (passwordError || emailError || nameError) {
      this.setState({ passwordError, emailError, nameError });
      return false;
    }
    return true;
  }

  componentDidUpdate() {
    if (this.props.curUser) {
      this.props.closeModal();
    }
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  demoUser(e) {
    e.preventDefault();
    const demoUser = {
      email: "test@aa.com",
      password: "123456",
    };
    this.props.session(demoUser);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.session(user);
    const isValid = this.validate();
    if (isValid) {
      this.setState(initialState);
    }
  }

  render() {
    if (this.props.formType === "signup") {
      return (
        <>
          <div className="signup_form_header">
            <button
              className="close_button"
              onClick={() => this.props.closeModal()}
            >
              X
            </button>
            <p className="signup_form_header_title">Sign up</p>
          </div>
          <form className="signup_form body" onSubmit={this.handleSubmit}>
            <div
              className={this.state.nameError ? "divNerror" : "s_first_name"}
            >
              <input
                type="text"
                className="s_f"
                value={this.state.fname}
                placeholder="First Name"
                onChange={this.update("fname")}
              />
            </div>
            <div
              className={this.state.nameError ? " divLerror" : "s_last_name"}
            >
              <input
                type="text"
                className="s_l"
                value={this.state.lname}
                placeholder="Last Name"
                onChange={this.update("lname")}
              />
            </div>
            <div className="error">{this.state.nameError}</div>
            <p className="tag">
              Make sure it matches the name on your government ID.
            </p>
            <div className="s_dob">
              <input
                type="date"
                className="s_d"
                value={this.state.date_of_birth}
                placeholder="Birthdate"
                onChange={this.update("date_of_birth")}
              />
            </div>
            <p className="tag">
              To sign up, you need to be at least 18. Your birthday won’t be
              shared with other people who use Bestfriend Treehouse.
            </p>
            <div className={this.state.emailError ? "diverror" : "s_email"}>
              <input
                type="email"
                className="s_e"
                value={this.state.email}
                placeholder="Email"
                onChange={this.update("email")}
              />
            </div>
            <div className="error">{this.state.emailError}</div>
            {/* <p className='tag'>We'll email you trip confirmations and receipts.</p> */}
            <div
              className={this.state.passwordError ? "diverror" : "s_password"}
            >
              <input
                type="password"
                className="s_p"
                value={this.state.password}
                placeholder="Password"
                onChange={this.update("password")}
              />
            </div>
            <div className="error">{this.state.passwordError}</div>
            {/* <p className='tag'>
                            We’ll send you marketing promotions, special offers, inspiration, and policy updates via email.
                        </p> */}
            <div className="subscribe-box">
              <input
                type="checkbox"
                id="subscribeNews"
                name="subscribe"
                value="newsletter"
              />
              <label className="subscribe-text" htmlFor="subscribeNews">
                I don’t want to receive marketing messages from Bestfriend
                Treehouse. I can also opt out of receiving these at any time in
                my account settings or via the link in the message.
              </label>
            </div>
            <button type="submit" className="submit-button">
              Agree and Continue
            </button>
            <div className="l_link">
              <span className="tag">Already have an account?</span>
              <button onClick={() => dispatch(openModal("login"))}>
                Login
              </button>
            </div>
          </form>
        </>
      );
    } else {
      return (
        <>
          <div className="login_form_header">
            <button
              className="close_button"
              onClick={() => this.props.closeModal()}
            >
              X
            </button>
            <p className="login_form_header_title">Log in</p>
          </div>
          <div className="login_form">
            <form onSubmit={this.handleSubmit}>
              <div className={this.state.emailError ? "diverror" : "l_email"}>
                <input
                  type="text"
                  className="l_e"
                  value={this.state.email}
                  placeholder="Email"
                  onChange={this.update("email")}
                />
              </div>
              <div
                className={this.state.passwordError ? "diverror" : "l_password"}
              >
                <input
                  type="password"
                  className="l_p"
                  value={this.state.password}
                  placeholder="Password"
                  onChange={this.update("password")}
                />
              </div>
              <div className="error">{this.state.emailError}</div>
              <div className="error">{this.state.passwordError}</div>
              <button type="submit" className="submit-button">
                Login
              </button>
              <button className="submit-button" onClick={this.demoUser}>
                Demo User
              </button>
            </form>
            <div className="l_link">
              <span className="tag">Don’t have an account?</span>
              <button onClick={() => dispatch(openModal("signup"))}>
                Sign up
              </button>
            </div>
          </div>
        </>
      );
    }
  }
}

export default Signup;
