import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderWrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:10px 30px;
    `;
const HeaderUl = styled.ul`
    display:flex;
    align-items: center;
    li{
        list-style: none;
        padding:0 20px;
    }
    `;
type HeaderProps = {
    sitename:string;
    onChange:(subject:number)=>void;
}
const Header = ({sitename,onChange}:HeaderProps) => {
    return (
        <HeaderWrapper>
            <h1>{sitename}</h1>
            <HeaderUl>
                <li><Link to="/addSubject">과목등록</Link></li>
                <li><Link to="/addFunction">내장함수등록</Link></li>
                <li onClick={()=>onChange(0)}>
                    <Link to="/">함수리스트</Link></li>
            </HeaderUl>
        </HeaderWrapper>
    );
};

export default Header;