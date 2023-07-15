import styled , {createGlobalStyle,css} from "styled-components";
import { Link } from "react-router-dom";

export const GlobalStyle=createGlobalStyle``

export const PageContainer = styled.div`
display: flex;
gap: 5px;
 height: 594px;
`
 

     

export const BannerConatiner = styled.div`
display: flex;
width: 80%;
 
justify-content: center;

@media (max-width: 760px) {
     display: none;
}

`

export const Banner = styled.img`
width: 90%;
height: 90%;
margin: auto;
 
 
`

export const FormConatiner = styled.div`
display: flex;
width: 100%;
flex-direction: column;
margin-top: 5%;
`

export const OAuth = styled.div`
display: flex;
justify-content: center;
gap: 5px;
margin-top: 2%;
cursor: pointer;
`
export const OAuthIcon = styled.img`
width: 20px;
height: 20px;
display: block;
`

export const OAuthText = styled.p`
padding: 0;
margin: 0;
`

export const Separator = styled.p`
display: block;
text-align: center;
font-weight: 600;
text-transform: uppercase;
`

export const Title = styled.h1`
font-weight: 600;
margin: 0 0 15px;
font-size: 28px;

@media (max-width: 1060px) {
     font-size: 22px;
}

@media (max-width: 680px) {
     font-size: 14px;
}

`

export const Form = styled.form`
display: flex;
justify-content: center;

`

export const FormDataContainer = styled.div`
display: flex;
flex-direction: column;
width: 65%;
gap: 10px;
`

export const InputFiled = styled.input`
padding: 10px;
border-radius: 6px;
border: 1.5px solid darkgrey;
cursor: pointer;
 

&:focus{
     border-color: blue !important;
}

`
export const RowWrapper = styled.div`
display: flex;
justify-content: space-between;

@media (max-width:680px) {
     text-align: start;
}

`
export const RowWrapperPro=styled.div`
display: flex;
 flex-direction: row; 
gap: 4%;
input {
    flex: 1;
  }

  @media (max-width:680px) {
     flex-direction: column;
     gap: 10px;
  }

`
export const CheckBox = styled.input`
accent-color: blue;
cursor: pointer;
 
`

export const CheckBoxText = styled.label`
 cursor: pointer;
`
export const ForgetPassword = styled(Link)`
 text-decoration: none;
`

export const Button = styled.button`
 background-color: blue;
 padding: 10px;
 text-align: center;
 border: none;
 border-radius: 20px;
color: white;
cursor: pointer;
font-weight: 600;
`

export const PageSwicher = styled.div`
display: flex;
justify-content: space-evenly;
margin-top: 2%;
 
`
export const PageSwicherQuestion = styled.p`
margin: 0;
`
export const PageSwicherAction = styled(Link)`
text-decoration: none;
`