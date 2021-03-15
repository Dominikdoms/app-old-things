import React, {useState} from "react";
import {
    Link
} from 'react-router-dom';
import {Link as LinkScroll} from "react-scroll";
import clx from "classnames"
import './register.scss'
//validation
import {useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from "yup";

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


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const {register, handleSubmit, errors} = useForm({
        resolver: yupResolver(schema),
    });


    const onSubmit = (data) => {
        // console.log(data);

        setEmail('')
        setPassword('')
        setConfirmPassword('')
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

                <form onSubmit={handleSubmit(onSubmit)} className={"register"}>
                    <section className={"register"}>
                        <header>
                            <h1>Załóż konto</h1>
                        </header>
                        <div className={"register__inputs"}>
                            <div>
                                <p>Email</p>
                                <input ref={register}
                                       value={email}
                                       onChange={e => setEmail(e.target.value)}
                                       name={"email"}
                                       type="text"/>
                                <span className={clx({error: errors.email})}/>
                                <p className={"register__error"}>{errors.email?.message}</p>
                            </div>
                            <div>
                                <p>Hasło</p>
                                <input ref={register}
                                       value={password}
                                       onChange={e => setPassword(e.target.value)}
                                       name={"password"}
                                       type="password"/>
                                <span className={clx({error: errors.password})}/>
                                <p className={"register__error"}>{errors.password?.message}</p>
                            </div>
                            <div>
                                <p>Powtórz hasło</p>
                                <input ref={register}
                                       value={confirmPassword}
                                       onChange={e => setConfirmPassword(e.target.value)}
                                       name={"confirmPassword"}
                                       type="password"/>
                                <span className={clx({error: errors.confirmPassword})}/>
                                <p className={"register__error"}>{errors.confirmPassword?.message}</p>
                            </div>
                        </div>
                    </section>
                    <section className={"register__buttons"}>
                        <Link to="/logowanie">
                            <button className={"btn-login"}>Zaloguj się</button>
                        </Link>
                        <button className={"btn-register"}>Załóż konto</button>
                    </section>
                </form>
            </div>
        </nav>
    )
}