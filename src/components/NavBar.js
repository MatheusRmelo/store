import React from 'react'
import { Link } from 'react-router-dom'
import { FaCartPlus } from 'react-icons/fa'
import styled from 'styled-components'
import Button from './Button'
export default function NavBar(){
    
    return (
        <NavWrapper className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
            <Link to="/">
                <img src="/img/logo.jpg" alt="Loja" width="50" height="50" className="navbar-brand" />
            </Link>
            <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-5">
                    <Link to="/" className="nav-link">
                        Produtos
                    </Link>
                </li>
            </ul>
            <Link to="/cart" className="ml-auto">
                <Button>
                    <span className="mr-2">
                        <FaCartPlus size={20} />
                    </span>
                   
                    Carrinho
                </Button>
            </Link>
        </NavWrapper>

    )
}

const NavWrapper = styled.nav`
    background: var(--mainBlue) !important;
    .nav-link{
        color:var(--mainWhite) !important;
        font-size:20px;
        text-transform: capitalize !important;
    }
`

