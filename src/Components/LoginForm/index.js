import { Component } from "react"

import "./index.css"

class LoginForm extends Component {
    state = {
        username: "",
        password: "",
        showErrMsg: false,
        errTxt: "",
        usernameRequiredTxt: false
    }

    onChangeUserName = (event) => {
        this.setState({username: event.target.value})
    }

    onChangePassword = (event) => {
        this.setState({password: event.target.value})
    }

    onBlurUserName = () => {
        const {username} = this.state
        if (username === "") {
            this.setState({usernameRequiredTxt: true})
        } else {
            this.setState({usernameRequiredTxt: false})
        }
    }

    renderUserNameField = () => {
        const { username } = this.state
        return(
        <>
            <label htmlFor="userName" >USERNAME</label> <br/>
            <input id="userName" placeholder="User Name" value={username} onChange={this.onChangeUserName} onBlur={this.onBlurUserName} />
        </>
        )
    }

    renderPasswordField = () => {
        const { password } = this.state 
        return(
            <>
                <label htmlFor="password">PASSWORD</label> <br/>
                <input type="password" id="password" value={password} onChange={this.onChangePassword} 
                placeholder="Password" />
            </>
        )
    }

    onSubmitSuccess = () => {
        const { history } = this.props
        history.replace("/")
        console.log("Properties....", this.props)
        console.log("Success....")
    }

    onSubmitFailure = (error_msg) => {
        this.setState({showErrMsg: true, errTxt: error_msg})
    }

    onSubmitEvent = async (event) => {
        event.preventDefault()
        const { username, password } = this.state 
        const userDetails = {username, password} 

        const options = {
            method: "POST",
            body: JSON.stringify(userDetails)
        }

        const url = "https://apis.ccbp.in/login"

        const response = await fetch(url, options)
        const data = await response.json()

        console.log(data)
        
        if (response.ok === true) {
            this.onSubmitSuccess()
        } else {
            this.onSubmitFailure(data.error_msg)
        }

    }


    render() {
        const { showErrMsg, errTxt, usernameRequiredTxt } = this.state
        return(
            <div className="login-form-container">
                <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png" alt="website login"
                className="website-login-img" />

                <form onSubmit={this.onSubmitEvent}>
                    <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png" alt="website logo"
                    className="website-logo" />

                    <div >
                        {this.renderUserNameField()}
                    </div>
                    {usernameRequiredTxt && <p style={{color: "red"}}>*Required</p>}
                    <div>
                        {this.renderPasswordField()}
                    </div>
                    

                    <button type="submit" >Login</button>
                    {showErrMsg && <p>{errTxt}</p>}
                </form>
            </div>
        )
    }

}

export default LoginForm

