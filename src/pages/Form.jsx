import UserName from '../components/UserName';
import Submit from '../components/Submit'
import Study from '../components/Study';
import Password from '../components/Password';
import Number from '../components/Number';
import Hobbies from '../components/Hobbies';
import Email from '../components/Email'
import Dob from '../components/Dob';
import Comment from '../components/Comment';
import React from 'react';
import './Form.css';

function Form(){
    return(
        <>
        <form>
    
        <UserName />
        <Email />
        <Dob />
        <Study />
        <Number />
        <Hobbies />
        <Password />
        <Comment />
        <Submit />
        </form>
      
        </>
    )
}
export default Form