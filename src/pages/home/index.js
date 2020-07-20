import React from 'react'
import DefaultLayout from "../../layouts/defaultLayout";
import UsersList from "./usersList/usersList";

const Home = () => {
    return (
        
        <DefaultLayout>
            
            <UsersList />
        </DefaultLayout>
        
    )
}
export default Home;