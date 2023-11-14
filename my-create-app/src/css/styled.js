import styled from "styled-components"



export const DivMain = styled.div`

    height: 70%;
    background-color: #ffc0cb ;
    display: flex;
    flex-direction: column;
    padding: 30px;
    justify-content: center;
    font-family: 'Bebas Neue', sans-serif;
    font-size: 23px;
    text-align: justify;
    color: black;
    

    & h1{
        text-align: center;
        color: black;
        margin-top: 20px;
    }

    & .divImg{
        display: flex;
        justify-content: center;
        height: 30%;
        margin: 30px;

        & img{
            border-radius: 10px;
        }
    }

    & .conteudo{

        & p{
            text-align: justify;
            text-indent: 20px;
            line-height: 2em;
            color: black;
            margin: 3% 14%;
            font-family: Arial, Helvetica, sans-serif;
        }

        & ul{

            & li{
                margin: 1% 24%;
                font-family: Arial, Helvetica, sans-serif;
                line-height: 2em;
            }
        }
    }


`


