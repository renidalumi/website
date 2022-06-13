import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
background: #ffb3ff;
height: 85px;
display: flex;
justify-content: space-between;
padding: 0.2rem calc((10vw - 1000px) / 2);
z-index: 12;
`;

export const NavLink = styled(Link)`
color: #800080;
text-shadow: #4d4dff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&.active {
	color: #fff;
}
`;

export const Bars = styled(FaBars)`
display: none;
color: #808080;
@media screen and (max-width: 768px) {
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(-100%, 75%);
	font-size: 1rem;
	cursor: pointer;
}
`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: 44px;
/* Second Nav */
margin-right: 14px;
/* Third Nav */
width: 10vw;
white-space: nowrap;
@media screen and (max-width: 50%) {
	display: none;
}
`;
