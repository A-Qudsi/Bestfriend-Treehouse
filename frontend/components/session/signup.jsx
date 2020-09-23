import React from 'react';

class Signup extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.props.session
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }
    
    handleSubmit(e) {
        e.preventDefault();
        this.props.signup(this.state);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>{this.props.formType}</h1>
                <label>First Name
                <input type="text"
                        value={this.state.fname}
                        onChange={this.update('fname')} />
                </label>
                <br/>
                <label>Last Name
                <input type="text"
                        value={this.state.lname}
                        onChange={this.update('lname')} />
                </label>
                <br />
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
                <label>Date of Birth
                <input type="text"
                        value={this.state.date_of_birth}
                        onChange={this.update('date_of_birth')} />
                </label>
                <br />
                <input type="submit"
                    value={this.props.formType} />
            </form>
        )
    }
}

export default Signup;




