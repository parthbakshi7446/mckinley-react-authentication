import styled from "styled-components";

export const Image = styled.div`
    border-radius:50%;
    
`;

export const Img = styled.img`
    obejct-fit: contain;
    height:100%;
    width:50px;
    border-radius: 50%;
`;

export const Info = styled.div`
    // width:10%;
`;

export const InfoSet = styled.div`
    width:90%;
    display:flex;
    height:50px;
    justify-content: space-around;
    background-color:white;
    border-radius:10px;
    margin:2px;
`;


export const UserSet = styled.div`
    display:flex;
    flex-direction: column;
    position:absolute;
    top:55vh;
    border-radius:10px;
    width:80%;
    left:20%;
    height:45vh;
    align-items:center;
    background-color: gray;
    overflow: scroll;
`;

export const Headingg = styled.div`
    width:90%;
    height:7vh;
    align-items: center;
    border-radius:10px;
    background-color:white;
`;

export const Outer = styled.div`
    background-color:darkblue;
    width:80%;
    position :absolute;
    top:10vh;
    height:50vh;
    left:20%;
    display:flex;
    border-radius:10px;
    flex-wrap:wrap;
    flex-direction:column;
`;

export const SideBaar = styled.div`
    position:absolute;
    left:10px;
    width:16%;
    height:90vh;
    margin:10px;
    padding:10px;
    box-shadow: 0px 2px 5px 2px black;
    border:1px solid black;
`;