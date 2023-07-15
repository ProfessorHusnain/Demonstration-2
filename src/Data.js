import { Button } from "./components/Auth/AuthElements";

 
export const loginForm=
    {
        OAuthData: [
       {icon:'./images/facebook.svg',dis:'Sign in with Facebook'},
       {icon:'./images/twitter.svg',dis:'Sign in with Twitter'},
       {icon:'./images/google.svg',dis:'Sign in with Google'}
       ],
       PageTitle:'Login with your email',
       SpecialFiled:false,
       InputFiledData:[
        {type:'email',name:'email',placeholder:'Email Address'},
        {type:'password',name:'password',placeholder:'Password'}
       ],
       CheckBoxData:{
        title:'Remember me?',
        passwordText:'Forget Password?'
       },
       ButtonData:'Login',
       PageChangerData:{
        question:"Don't have an account?",
        linkText:'Create Account',
        link:'singup'
       }
    }

    
export const signupForm=
{
    OAuthData: [
   {icon:'./images/facebook.svg',dis:'Sign in with Facebook'},
   {icon:'./images/twitter.svg',dis:'Sign in with Twitter'},
   {icon:'./images/google.svg',dis:'Sign in with Google'}
   ],
   PageTitle:'Sign up with your work email',
   SpecialFiled:true,
   SpecialInputFiledData:[
    {type:'text',
    name:'firstName',
    placeholder:'First Name'
    },
    {type:'text',name:'lastName',placeholder:'Last Name'}
   ],
   InputFiledData:[
    {type:'email',
    name:'email',
    placeholder:'Email Address'
    },
    {type:'password',name:'password',placeholder:'Password'},
    {type:'password',name:'confirmPassword',placeholder:'Confirm Password'}
   ],
   CheckBoxData:{
    title:'I agree to all the Term & Condition'
   },
   ButtonData:'Login',
   PageChangerData:{
    question:"Don't have an account?",
    linkText:'Create Account',
    link:'singup'
   }
}
