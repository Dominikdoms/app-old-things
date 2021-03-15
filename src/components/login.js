import React, {useState} from "react";
import {
    Link
} from 'react-router-dom';
import {Link as LinkScroll} from "react-scroll";
import clx from "classnames"
import './login.scss'
//validation
import {useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object().shape({
    // email: yup.string().required("Pole nie może być puste!").email("Podany email jest nieprawidłowy!"),
    // password: yup.string().required("Podane hasło jest za któtkie!").min(6)
    email: yup.string().required("Pole nie może być puste!").email("Podany email jest nieprawidłowy!"),
    password: yup.string().required("Podane hasło jest za krótkie!").min(6,"Minimum 6 znaków")
})


export const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {register, handleSubmit, errors} = useForm({
        resolver: yupResolver(schema)
    });


    const onSubmit = (data) => {
        console.log(data);
        console.log("działa");

        // setEmail('')
        // setPassword('')
    }


    return (
        <nav className={"navigation"}>
            <div className={"navigation__container container"}>
                <section className={"navigation__start"}>
                    <ul className={"navigation__login"}>
                        <li><Link to="/logowanie">Zaloguj</Link></li>
                        <li className={"navigation__registration-btn"}><Link to="/rejestracja">Załóż konto</Link></li>
                    </ul>
                    <ul className={"navigation__nav"}>
                        <li><Link to="/" smooth={true} duration={1000}>Start</Link></li>
                        {/*to="ID"*/}
                        <li><LinkScroll to="steps" smooth={true} duration={1000}>O co chodzi?</LinkScroll></li>
                        <li><LinkScroll to="aboutUs" smooth={true} duration={1000}>O nas</LinkScroll></li>
                        <li><LinkScroll to="fundations" smooth={true} duration={1000}>Fundacja i
                            Organizacje</LinkScroll></li>
                        <li><LinkScroll to="contact" smooth={true} duration={1000}>Kontakt</LinkScroll></li>
                    </ul>
                </section>

                <form onSubmit={handleSubmit(onSubmit)} className={"login"}>
                    <section className={"login"}>
                        <header>
                            <h1>Zaloguj się</h1>
                        </header>
                        <div className={"login__inputs"}>
                            <div>
                                <p>Email</p>
                                <input ref={register}
                                       value={email}
                                       onChange={e => setEmail(e.target.value)}
                                       name={"email"}
                                       type="text"/>
                                <span className={clx({error: errors.email})}/>
                                <p className={"login__error-email"}>{errors.email?.message}</p>
                            </div>
                            <div>
                                <p>Hasło</p>
                                <input ref={register}
                                       value={password}
                                       onChange={e => setPassword(e.target.value)}
                                       name={"password"}
                                       type="password"/>
                                <span className={clx({error: errors.password})}/>
                                <p className={"login__error-password"}>{errors.password?.message}</p>
                            </div>
                        </div>
                    </section>
                    <section className={"buttons"}>
                        <Link to="/rejestracja">
                            <button className={"btn-login"}>Załóż konto</button>
                        </Link>
                        <button className={"btn-register"}>Zaloguj się</button>
                    </section>
                </form>
            </div>
        </nav>
    )
}
