import React from 'react'
import styled, { css } from 'styled-components'
import { NavLink } from 'react-router-dom'

const Nav = styled.nav`
  background: black;
  color: white;
  padding: 20px;
  display: flex;
  justify-content: center;
`;

const Ul = styled.ul`
    ${props => props.navigation &&`
        margin: 0;
        padding: 5px;
        list-style: none;
    `}
`;

const Li = styled.li`
    ${props => props.navigationList &&`
        display: inline-block;        
    `}
`;


const StyledLink = styled(NavLink)`
    color: white;    
    padding: 10px 20px;
    text-decoration: none;
    font-size: 16px;
    cursor: pointer;
    ${NavLink}:hover{
        background: white;
        color: black;
    }
    ${NavLink}&.active {
        background: white;
        color: black;
    }
`;

const P = styled.p`
    ${props => props.title &&`
        color: white;
        margin: 0;   
        width: 40%;
        font-size: 24px;
        font-weight: bold;
        text-transform: capitalize;     
    `}
`;

const NavBar = () => (
    <Nav>
        <P title>Christian Rodriguez</P>
        <Ul navigation>
            <Li navigationList><StyledLink activeClassName="active" exact to="/">Home</StyledLink></Li>
            <Li navigationList><StyledLink activeClassName="active" to="/projects">Projects</StyledLink></Li>
            <Li navigationList><StyledLink activeClassName="active" to="/skills">Skills</StyledLink></Li>
            <Li navigationList><StyledLink activeClassName="active" to="/contact">Contact</StyledLink></Li>
        </Ul>
    </Nav>
)

export default NavBar