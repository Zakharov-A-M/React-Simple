import React from 'react';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login : '',
            remember: true,
            password: '',
            loginError: false,
            passwordError: false
        };

        //this.input = React.createRef();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const isCheckbox = event.target.name === 'remember';
        this.setState({
            [event.target.name]: isCheckbox ? event.target.checked : event.target.value
        });
    }

    validate = () => {
       let isValid = true;
       let loginError = false;
       let passwordError = false;

       if (this.state.login.length <= 5) {
           loginError = true;
           isValid = false;
       }
       if (this.state.password.length <= 6) {
           passwordError = true;
           isValid = false;
       }

       this.setState({loginError , passwordError});

       return isValid;
    };

    handleSubmit(event) {
        event.preventDefault();
        if (this.validate()) {
            console.log('true');
        } else {
            console.log('false');
        }
    }

   /* let setLogin = () => {
        let text = this.input.current.value;
        this.state.login(text);
        newPostElement.current.value = '';
    }*/


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
               <div className="form-group">
                   <label htmlFor="exampleInputEmail1">Login</label>
                   <input type="text" className="form-control" name="login" placeholder="Login" /*ref={this.input}*/
                          onChange={this.handleInputChange} />
                   {this.state.loginError ?
                           <div style={{color: 'red'}}>
                                The login should be more 5 symbols
                           </div> : null
                   }
               </div>
               <div className="form-group">
                   <label htmlFor="exampleInputPassword1">Password</label>
                   <input type="password" className="form-control" name="password" placeholder="Password"
                          onChange={this.handleInputChange} />
                   {this.state.passwordError ?
                        <div style={{color: 'red'}}>
                            The password should be more 6 symbols
                        </div> : null
                   }
               </div>

               <div className="form-check">
                   <input type="checkbox" className="form-check-input" name="remember"
                          checked={this.state.remember}
                          onChange={this.handleInputChange} />
                   <label className="form-check-label">Remember me</label>
               </div>
               <button type="submit"  /*onClick={ addPost }*/ className="btn btn-primary">Submit</button>
           </form>
        );
    }
}
