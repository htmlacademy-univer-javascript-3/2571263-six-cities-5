import {AppRoute} from '../constants/app-route.ts';
import {Link, useNavigate} from 'react-router-dom';
import React, {FormEvent, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../hooks/store-hooks.ts';
import {AuthStatus} from '../constants/auth-status.ts';
import {AuthData} from '../model/user.ts';
import {loginAction} from '../store/api-actions.ts';

export default function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector((state) => state.auth.authStatus);
  useEffect(() => {
    if (authStatus === AuthStatus.Authenticated) {
      navigate(AppRoute.Main);
    }
  });

  const [formData, setFormData] = useState<AuthData>({
    email: '',
    password: '',
  });
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setFormData({ ...formData, [name]: value });

    if (name === 'password') {
      const isValidPassword = /^(?=.*[A-Za-z])(?=.*\d).+$/.test(value);
      if (!isValidPassword && value.length > 0) {
        setPasswordError('Password must at least contain one letter and one digit.');
      } else {
        setPasswordError(null);
      }
    }
  };

  const login = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (passwordError || !formData.password) {
      setPasswordError(passwordError || 'Password cannot be empty.');
      return;
    }

    dispatch(loginAction(formData));
  };

  return (
    <main className="page__main page__main--login">
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <form className="login__form form" onSubmit={login}>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">E-mail</label>
              <input
                className="login__input form__input"
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleFormChange}
                required
              />
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">Password</label>
              <input
                className="login__input form__input"
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleFormChange}
                required
              />
              {passwordError && <p className="login__error">{passwordError}</p>}
            </div>
            <button className="login__submit form__submit button" type="submit">Sign in</button>
          </form>
        </section>
        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <Link to={AppRoute.Main} className="locations__item-link">
              <span>Paris</span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
