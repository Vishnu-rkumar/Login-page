import React        from 'react';
import Inputfield   from './Inputfield';
import Submitbtn    from './Submitbtn';


class Loginform extends React.Component {

    constructor(props)  {
        super(props);
        this.state = {
            username:'',
            password:'',
            buttonDisabled: false
        }
    }
    setInputValue(property, val) {
        val=val.trim();
        if (val.length > 15) {
            return;
        }
        this.setState({
            [property]:val
        })
    }



    render() {
        return (
            <div className = "loginForm">
                Enter Details
                <Inputfield
                type='text'
                placeholder='Username'
                value={this.state.username ? this.state.username : ''}
                onChange={ (val) => this.setInputValue('username', val)}
                />

                <Inputfield
                type='password'
                placeholder='Password'
                value={this.state.password ? this.state.password : ''}
                onChange={ (val) => this.setInputValue('password', val)}
                />

                <Submitbtn
                text='Login'
                disabled={this.state.buttonDisabled}
                onClick={console.log}
                />


            </div>
        );
    }
}

export default Loginform;