import { createGlobalStyle } from "styled-components";

export const lightTheme = {
    themeSwitch: "flex-start",
    body: "#F5F6F8",
    secondaryBackground: "#FFFFFF",
    primaryFontColor: "black",
    secondaryFontColor: "white",
    checkboxColor: "#EAEAEB",
    buttonColor: "#5A64DE",
    secondaryButtonColor: "#EDF0F8",
    secondaryButtonColorHover: "#e1def1",
    secondaryButtonTextColor: "#5C64DF",
    iconColor: "#7F84D4",
}

export const darkTheme = {
    themeSwitch: "flex-end",
    body: "#131722",
    secondaryBackground: "#18202D",
    primaryFontColor: "white",
    secondaryFontColor: "white",
    checkboxColor: "#313843",
    buttonColor: "#5866E0",
    secondaryButtonColor: "#333945",
    secondaryButtonColorHover: "#586377",
    secondaryButtonTextColor: "white",
    iconColor: "#4C53A4",

}

export const GlobalStyles = createGlobalStyle`

body {
    background-color: ${props => props.theme.body};
    z-index: 25;
}
#theme-switch{
    justify-content: ${props => props.theme.themeSwitch};
}

#search{
    background-color: ${props => props.theme.secondaryBackground};
}

#text-filter i{
    color: ${props => props.theme.iconColor};
}

#text-filter input{
    background-color: ${props => props.theme.secondaryBackground};
}

#location-filter i{
    color: ${props => props.theme.iconColor};
}

#location-filter input{
    background-color: ${props => props.theme.secondaryBackground};
}

.checkmark{
    background-color: ${props => props.theme.checkboxColor};
}

#submit label input:checked~.checkmark {
  background-color: ${props => props.theme.buttonColor};
}

#submit div p{
    color: ${props => props.theme.primaryFontColor};
}

#submit button {
    background-color: ${props => props.theme.buttonColor};
      }

#submit button p{   
    color: white;
}

#job{
    background-color: ${props => props.theme.secondaryBackground};
}

#short-description p:nth-child(2){
    color: ${props => props.theme.primaryFontColor};
}

.jobDescription-header{
    background-color: ${props => props.theme.secondaryBackground};
}

.jobDescription-rest section div:nth-child(1) h1{
    color: ${props => props.theme.primaryFontColor}
}

.jobDescription-rest button{
    background-color: ${props => props.theme.secondaryButtonColor};
    color: ${props => props.theme.secondaryButtonTextColor};
}

.jobDescription-rest button:hover{
    background-color: ${props => props.theme.secondaryButtonColorHover};
   }

.jobDescription-content{
    background-color: ${props => props.theme.secondaryBackground};
}

.jobDescription-content h1,h2,p,li{
    color: ${props => props.theme.primaryFontColor};
}

.footer{
    background-color: ${props => props.theme.secondaryBackground}
}

.footer section div:nth-child(1) h1 {
  color: ${props => props.theme.primaryFontColor}
}

`

