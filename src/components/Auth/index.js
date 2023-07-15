import React, { useState } from 'react'
import {
    GlobalStyle,
    PageContainer,
    BannerConatiner,
    Banner,
    FormConatiner,
    OAuth,
    OAuthIcon,
    OAuthText,
    Separator,
    Title,
    Form,
    FormDataContainer,
    InputFiled,
    RowWrapper,
    RowWrapperPro,
    CheckBox,
    CheckBoxText,
    ForgetPassword,
    Button,
    PageSwicher,
    PageSwicherQuestion,
    PageSwicherAction

} from './AuthElements'

const Auth = ({ OAuthData,
     PageTitle,
     InputFiledData,
     SpecialFiled,
     SpecialInputFiledData,
     CheckBoxData,
     ButtonData,
     PageChangerData }) => {
        const[formData,setFormData]=useState({})

        const handelChange=(e)=>{
            setFormData((v)=>(
            {...v,[e.target.name]:e.target.value}))
            console.log(formData)
        }

        const submitForm=(e)=>{
            e.preventDefault()
        }

    return (
        <>
            <GlobalStyle />
            <PageContainer>
                <BannerConatiner>
                    <Banner src='./images/banner.svg'></Banner>
                </BannerConatiner>
                <FormConatiner>

                    {OAuthData.map((e) => {
                        return (
                            <OAuth>
                                <OAuthIcon src={e.icon}></OAuthIcon>
                                <OAuthText>{e.dis}</OAuthText>
                            </OAuth>
                        )
                    })}

                    <Separator>OR</Separator>
                    <Title>{PageTitle}</Title>
                    <Form onSubmit={submitForm}>

                        <FormDataContainer>
                            <RowWrapperPro>
                                {SpecialFiled===true &&
                                SpecialInputFiledData.map((f) => {
                                return (
                                    <>
                                       <InputFiled 
                                        type={f.type} 
                                        name={f.name} 
                                        id={f.name}
                                        placeholder={f.placeholder}
                                        value={formData[f.name]}
                                        onChange={handelChange} />
                                    </>
                                )
                            })}
                            </RowWrapperPro>
                             {InputFiledData.map((f) => {
                                return (
                                    <>
                                       <InputFiled 
                                        type={f.type} 
                                        name={f.name} 
                                        placeholder={f.placeholder}
                                        value={formData[f.name]}
                                        onChange={handelChange} />
                                    </>
                                )
                            })}

                            <RowWrapper>
                                <CheckBoxText htmlFor='checkbox'>
                                    <CheckBox id='checkbox' type='checkbox' />
                                    {CheckBoxData.title}</CheckBoxText>
                                <ForgetPassword>{CheckBoxData.passwordText}</ForgetPassword>
                            </RowWrapper>
                            <Button>{ButtonData}</Button>
                        </FormDataContainer>
                    </Form>
                    <PageSwicher>
                        <PageSwicherQuestion>
                           {PageChangerData.question}
                        </PageSwicherQuestion>
                        <PageSwicherAction to={PageChangerData.link}>
                        {PageChangerData.linkText}
                        </PageSwicherAction>
                    </PageSwicher>
                </FormConatiner>
            </PageContainer>
        </>
    )
}

export default Auth
