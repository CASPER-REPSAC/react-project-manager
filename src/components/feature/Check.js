import {useState} from 'react';
import axios from 'axios';

const IsLogin = async () => {
    const result = await axios.get("/check/login");
    return result.data.is_login;
}

export {IsLogin};