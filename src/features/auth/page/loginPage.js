import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import './authPage.scss';

const LoginPage = () => {
    const currentUser = useSelector((state) => state.auth.current);
    const navigate = useNavigate();

    return (
        <div className="loginPage">
            <LoginForm />
        </div>
    );
};