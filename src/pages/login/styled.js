import styled from "styled-components";
import bg from "static/bg.png"
export const Container=styled.div`
    width:100%;
    height:100%;
    overflow:hidden;
    background:url(${bg});
    background-size:cover;
    .logo{
        width:100%;
        height:0.5rem;
        margin-bottom:30px;
        img{
            width:80%;
            margin:0 auto;
        }
    }
    .username{
        margin-bottom:0;
    }
    .form{
        width:300px;
        height:350px;
        padding:20px;
        position: relative;
        left:50%;
        top:50%;
        background:#fff;
        opacity:.9;
        margin-left:-150px;   
        margin-top:-175px;
        border-radius:10px;
    }
`