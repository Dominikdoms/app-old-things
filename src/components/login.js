import React, {useState, useContext} from "react";
import {
    Link, useHistory
} from 'react-router-dom';
import clx from "classnames"
import './login.scss'
import {FirebaseContext} from "../App";


export const Login = () => {
    const history = useHistory();

    const {firebase} = useContext(FirebaseContext)


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //firebase
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    // console.log(emailError)
    // console.log(passwordError)

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(e);
        firebase.doSignInWithEmailAndPassword(email, password)//dane z inputów
            // .then(data => console.log(data))
            .then( () => history.push("/"))
            .catch(err => {
                switch(err.code) {
                    case "auth/invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                        setEmailError("taki email nie istnieje");
                        break;

                    case "auth/wrong-password":
                        setPasswordError("takie hasło nie istnieje");
                        break;

                    default:
                    //
                }
            })


        setEmail('')
        setPassword('')
    }


    return (
        <nav className={"navigation"}>
            <div className={"navigation__container container"}>
                <section className={"navigation__start"}>
                    <ul className={"navigation__login"}>
                        <li className={"navigation__login-start"}><Link to="/">Start</Link></li>
                        <li><Link to="/logowanie">Zaloguj</Link></li>
                        <Link to="/rejestracja"><li className={"navigation__registration-btn"}>Załóż konto</li></Link>
                    </ul>
                </section>

                <form onSubmit={onSubmit} className={"login"}>
                    <section className={"login"}>
                        <header>
                            <h1>Zaloguj się</h1>
                        </header>
                        <div className={"login__inputs"}>
                            <div>
                                <p>Email</p>
                                <input
                                       value={email}
                                       onChange={e => setEmail(e.target.value)}
                                       name={"email"}
                                       type="text"/>
                                <span className={clx({error: emailError})}/>
                                <p className={"login__error-email"}>{emailError}</p>
                            </div>
                            <div>
                                <p>Hasło</p>
                                <input
                                       value={password}
                                       onChange={e => setPassword(e.target.value)}
                                       name={"password"}
                                       type="password"/>
                                <span className={clx({error: passwordError})}/>
                                <p className={"login__error-password"}>{passwordError}</p>
                            </div>
                        </div>
                    </section>
                    <section className={"buttons"}>
                        <button className={"btn-register"}>Zaloguj się</button>
                        <Link to="/rejestracja">
                            <button className={"btn-login"}>Załóż konto</button>
                        </Link>
                    </section>
                </form>
            </div>
        </nav>
    )
}
