import React, { useContext, useEffect, useState } from "react";
import { useHttp } from "../hooks/http.hook";
import { useMessage } from "../hooks/message.hook";
import { AuthContext } from "../context/AuthContext";
import './style.css';


 const AuthPage = () => {
    const auth = useContext(AuthContext);
    const message = useMessage();
    const {loading, request, error, clearError} = useHttp();
    const [form, setForm] = useState({
        email: '', password: ''
    });

    useEffect(() => {
        message(error);
        clearError();
    }, [error, message, clearError]);

    useEffect ( () => {
        window.M.updateTextFields()
    },[]);

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', {...form});
            message(data.message);

        } catch (e) {
            message('Ошибка регистрации: ', e.message);
        }
    };

    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', {...form});
            auth.login(data.token, data.userId);

        } catch (e) {
            message('Ошибка входа:', e.message);            
        }
    };


    return (
        <div className="body-row-authent">
        <div className="row-authent">
            <div className="login-registr">
                <span className="login-title">Авторизация</span>
                <div className="login-input-grid">
                    <label htmlFor="email" className="label-inp">Email</label>
                    <input
                        placeholder="Введите email"
                        id="email"
                        type="text"
                        name="email"
                        value={form.email}
                        className="login-registr-input"
                        onChange={changeHandler}
                    />
                </div>
                <div className="login-input-grid">
                    <label htmlFor="password" className="label-inp">Пароль</label>

                    <input
                        placeholder="Введите password"
                        id="password"
                        type="password"
                        name="password"
                        value={form.password}
                        className="login-pass-input"
                        onChange={changeHandler}
                    />
                </div>
                <div className="login-btn">
                    <button className="btn-form-req" 
                    onClick={loginHandler}
                    disabled={loading}>Войти</button>
                    <button className="btn-form-req" 
                    onClick={registerHandler}
                    disabled={loading}>Регистрация</button>
                </div>
            </div>
        </div>
        </div>
    )
 }


export default AuthPage;