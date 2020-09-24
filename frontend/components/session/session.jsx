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
                    <div className='signup_form_header'>
                        <button className='close_button'>X</button>
                        <p className='signup_form_header_title'>Finish signing up</p>
                    </div>
                    < label > First Name
                    <input type = "text"
                            value = { this.state.fname }
                            onChange = { this.update('fname') } />
                    </label >

                    < label > Last Name
                    <input type = "text"
                            value = { this.state.lname }
                            onChange = { this.update('lname') } />
                    </label >

                    < label > Date of Birth 
                    <input type="text"
                            value={this.state.date_of_birth}
                            onChange={this.update('date_of_birth')} />
                    </label >
                </div>
            )
        } else {
            return (
                <div>
                    <form onSubmit={this.handleSubmit}>
                        {this.props.formType === 'signup' ? loginComplete : ''}
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




