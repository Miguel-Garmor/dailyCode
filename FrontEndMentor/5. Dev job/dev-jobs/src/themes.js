import { createGlobalStyle } from "styled-components";

export const lightTheme = {
    themeSwitch: "flex-start",
    body: "#F5F6F8",
    secondaryBackground: "#FFFFFF",
    primaryFontColor: "black",
    secondaryFontColor: "white",
    checkboxColor: "#EAEAEB",
    buttonColor: "#5A64DE",
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

#job{
    background-color: ${props => props.theme.secondaryBackground};
}

#short-description p:nth-child(2){
    color: ${props => props.theme.primaryFontColor};
}
`

