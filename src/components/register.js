import React, {useState, useContext} from "react";
import {
    Link, useHistory
} from 'react-router-dom';
import clx from "classnames"
import './register.scss'
//validation
import {useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from "yup";

import {firebaseConfig} from "./firebaseData"

import {FirebaseContext} from "../App";


const schema = yup.object().shape({
    email: yup.string().required("Pole nie może być puste!").email("Podany email jest nieprawidłowy!"),
    password: yup.string()
        .min(6, 'Hasło musi mnieć min 6 znaków')
        .required('Pole nie może być puste!'),
    confirmPassword: yup.string()
        .oneOf([yup.ref('password'), null], 'Hasło musi być takie samo')
        .required('Pole nie może być puste!')

})

export const Register = () => {
    const history = useHistory();
    const {firebase} = useContext(FirebaseContext)//my context firebase with user

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const {register, handleSubmit, errors} = useForm({
        resolver: yupResolver(schema),
        mode: "onBlur"
    });


//firebase

    const onSubmit = (data) => {


        firebase.doCreateUserWithEmailAndPassword(data.email, data.password)
            .then((user) => {
                console.log(user)
                firebase.db.collection("Users").doc(firebase.auth.currentUser.uid).set({
                    email: data.email
                })
            })
            .then( () => history.push("/oddaj-rzeczy"))
            .catch(err => {
                switch(err.code) {
                    case "auth/email-already-in-use":
                        setEmailError("Podany email jest nieprawidłowy!");
                        break;

                    case "auth/invalid-email":
                        setEmailError("Podany email jest nieprawidłowy!");
                        break;

                    case "auth/weak-password":
                        setPasswordError("Podane hasło jest nieprawidłowe!");
                        break;
                }
            })
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

                <form onSubmit={handleSubmit(onSubmit)} className={"register"}>
                    <section className={"register"}>
                        <header>
                            <h1>Załóż konto</h1>
                        </header>
                        <div className={"register__inputs"}>
                            <div>
                                <p>Email</p>
                                <input ref={register}
                                       name={"email"}
                                       type="text"/>
                                <span className={clx({error: errors.email})}/>
                                <p className={"register__error"}>{errors.email?.message ? errors.email?.message : emailError}</p>
                            </div>
                            <div>
                                <p>Hasło</p>
                                <input ref={register}
                                       name={"password"}
                                       type="password"/>
                                <span className={clx({error: errors.password})}/>
                                <p className={"register__error"}>{errors.password?.message ? errors.password?.message : passwordError}</p>
                            </div>
                            <div>
                                <p>Powtórz hasło</p>
                                <input ref={register}
                                       name={"confirmPassword"}
                                       type="password"/>
                                <span className={clx({error: errors.confirmPassword})}/>
                                <p className={"register__error"}>{errors.confirmPassword?.message}</p>
                            </div>
                        </div>
                    </section>
                    <section className={"register__buttons"}>
                        <button type="submit" className={"btn-register"}>Załóż konto</button>
                        <Link to="/logowanie">
                            <button className={"btn-login"}>Zaloguj się</button>
                        </Link>
                    </section>
                </form>
            </div>
        </nav>
    )
}