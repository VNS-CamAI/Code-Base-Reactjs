import React from 'react';
import { useAppDispatch } from '../../store/store';
import { useSelector } from 'react-redux';

const Home = () => {
    const users = useSelector((state:any) =>state?.home.users)
    console.log(users);
    
    return (
        <div>
            Home page
        </div>
    );
};

export default Home;