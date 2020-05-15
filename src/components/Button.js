import styled from 'styled-components'

export default styled.button`
    text-transform: capitalize;
    font-size: 22px;
    background: transparent;
    border: 1px solid var(--lightBlue);
    color:var(--lightBlue);
    border-radius:8px;
    padding:3px 8px;
    cursor:pointer;
    margin:3px 8px 3px 0;
    transition: all 0.5s ease-in-out;
&:hover{
    background: var(--lightBlue);
    color: var(--mainBlue);
}
&:focus{
    outline:none;
}


`