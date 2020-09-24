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
        let loginComplete = (
            <div>
                < label > First Name
                <input type = "text"
                        value = { this.state.fname }
                        onChange = { this.update('fname') } />
                </label >
                <br />
                < label > Last Name
                <input type = "text"
                        value = { this.state.lname }
                        onChange = { this.update('lname') } />
                </label >
                <br />
                < label > Date of Birth 
                <input type="text"
                        value={this.state.date_of_birth}
                        onChange={this.update('date_of_birth')} />
                </label >
            </div>
        )
        return (
            <div>
                <h1>{this.props.formType}</h1>
                <br />
                <form onSubmit={this.handleSubmit}>
                    {this.props.formType === 'signup' ? loginComplete : '' }
                    <label>Email
                    <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')} />
                    </label>
                    <br />
                    <label>password
                    <input type ="password"
                            value={this.state.password}
                            onChange={this.update('password')} />
                    </label>
                    <br />
                    { this.renderErrors() }
                    <input type="submit"
                        value={this.props.formType} />
                </form>
            </div>
        )
    }
}

export default Signup;




