import React from 'react';
import './Login.scss';

class Login extends React.Component {
    render() {
        return (
            <div className="container">
                <section className="user__credentials">
                    <div className="login__left">
                        <img src="Finance.svg" className="image"/>
                    </div>
                    <div className="login__right">
                        <h1 className="heading__primary">Login</h1>
                        <form className="form" method="POST">
                            <input type="text" className="form__input" placeholder="Enter Email"/>
                            <input type="password" className="form__input" placeholder="Enter Password"/>
                            <input type="submit" className="btn"/>
                            <a href="/signup" className="form__link">Not a user?</a>
                        </form>
                    </div>
                </section>
            </div>
        );
    }

};

export default Login;