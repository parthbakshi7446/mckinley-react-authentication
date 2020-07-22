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
    display:flex;
    align-items:center
`;

export const InfoSet = styled.div`
    width:95%;
    display:flex;
    height:50px;
    justify-content: space-around;
    background-color:white;
    // border-radius:10px;
    margin:2px;
    align-items:center;
`;


export const UserSet = styled.div`
    display:flex;
    flex-direction: column;
    position:absolute;
    top:56vh;
    // border-radius:10px;
    width:79%;
    left:20%;
    height:50vh;
    align-items:center;
    background-color: rgb(218,237,244);
    overflow: scroll;
`;

export const Headingg = styled.div`
    width:90%;
    min-height:2vh;
    display:flex;
    padding:27px;
    align-items: center;
    border-radius:10px;
    background-color:white;
`;

export const Outer = styled.div`
    background-color:rgb(0,0,63);
    width:79%;
    position :absolute;
    top:2.1vh;
    color:white;
    height:55vh;
    left:20%;
    display:flex;
    // border-radius:10px;
    flex-wrap:wrap;
    flex-direction:column;
`;

export const SideBaar = styled.div`
    position:absolute;
    left:10px;
    width:16%;
    height:90vh;
    margin:10px;
    top:0vh;
    padding:10px;
    // box-shadow: -5px -2px 5px 1px black;

    // border:5px solid grey;
`;

export const Container = styled.div`
    border :5px solid lightgrey;
    height:100vh;
    width:98%;

`;