import React from 'react';

class Signup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            lname: '',
            date_of_birth: '',
            email: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidUpdate() {
        if (this.props.curUser) {
            this.props.closeModal()
        }
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }
    
    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.session(user);
    }

    render() {
        if (this.props.formType === 'signup') {
            return (
                <div className='signup_form'>
                    <form onSubmit={this.handleSubmit}>
                    <div className='signup_form_header'>
                        <button className='close_button'>X</button>
                        <p className='signup_form_header_title'>Sign up</p>
                    </div>
                    <div className='s_first_name'>
                    <input type = "text" className="s_f"
                            value = { this.state.fname }
                            placeholder='First Name'
                            onChange = { this.update('fname') } />
                    </div>
                    <div className='s_last_name'>
                    <input type = "text" className='s_l'
                            value = { this.state.lname }
                            placeholder='Last Name'
                            onChange = { this.update('lname') } />
                    </div>
                    <p className='name_tag'>Make sure it matches the name on your government ID.</p>
                    <div className='s_dob'>
                    <input type="date" className='s_d'
                            value={this.state.date_of_birth}
                            placeholder='Birthdate'
                            onChange={this.update('date_of_birth')} />
                    </div>
                    <p className='dob_tag'>To sign up, you need to be at least 18. Your birthday won’t be shared with other people who use Bestfriend Treehouse.</p>
                    <div className='s_email'>
                        <input type="email" className='s_e'
                            value={this.state.email}
                            placeholder='Email'
                            onChange={this.update('email')} />
                    </div>
                    <p className='email_tag'>We'll email you trip confirmations and receipts.</p>
                    <div className='s_password'>
                        <input type="password" className='s_p'
                            value={this.state.password}
                            placeholder='Password'
                            onChange={this.update('password')} />
                    </div>
                    <p className='promotions_tag'>We’ll send you marketing promotions, special offers, inspiration, and policy updates via email.</p>
                    <div className='subscribe-box'>
                        <input type="checkbox" id="subscribeNews" name="subscribe" value="newsletter" />
                        <label className='subscribe-text' htmlFor="subscribeNews">I don’t want to receive marketing messages from Bestfriend Treehouse. I can also opt out of receiving these at any time in my account settings or via the link in the message.
                        </label>
                    </div>
                    <button type='submit' className='submit-button'>Agree and Continue</button>
                </form>
                </div>
            )
        } else {
            return (
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label>Email
                        <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')} />
                        </label>

                        <label>password
                    <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')} />
                        </label>

                        {this.renderErrors()}
                        <button>{this.props.formType}</button>
                    </form>
                 </div >
            )
        }
    }
}

export default Signup;




