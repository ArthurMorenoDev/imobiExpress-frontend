import styled from "styled-components";

export const Container = styled.div`
    padding: 50px 150px;
    position: relative;
    background-size: cover;
    background-position: center;
    background-image: 
    linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
 
`
export const Text = styled.div`
    width: 55%;
    position: relative;
    z-index: 1;
    h2{
        color: var(--white);
        font-size: 3.875rem;
        margin-bottom:25px;
    }
    p{
        color: var(--white);
        margin-bottom: 25px;
    }
`