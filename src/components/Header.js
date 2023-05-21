import React from "react";
import styled from "styled-components";
import { Avatar } from "@mui/material";
import { AccessTime } from "@mui/icons-material";
import { Search } from "@mui/icons-material";
import { HelpOutline } from "@mui/icons-material";
import { auth } from "../firebase";
import { useAuthState } from 'react-firebase-hooks/auth'

function Header() {
	const [user] = useAuthState(auth);

	return (
		<HeaderContainer>
			<HeaderLeft>
				<HeaderAvatar
					onClick={() => auth.signOut()}
					src={user?.photoURL}
					alt={user?.disaplyName}
				/>
				<AccessTimeIcon />
			</HeaderLeft>
			<HeaderSearch>
				<Search />
				<input placeholder="Search..." />
			</HeaderSearch>
			<HeaderRight>
				<HelpOutline />
			</HeaderRight>
		</HeaderContainer>
	)
}

export default Header;

const HeaderContainer = styled.div`
	display: flex;
	position: fixed;
	width: 100%;
	align-items: center;
	justify-content: space-between;
	padding: .625rem 0;
	background-color: var(--slack-color);
	color: white;
`;

const HeaderLeft = styled.div`
	flex: 0.3;
	display: flex;
	align-items: center;
	margin-left: 1.25rem;
`;

const HeaderAvatar = styled(Avatar)`
	cursor: pointer;
	:hover {
		opacity: 0.8;
	}
`;

const AccessTimeIcon = styled(AccessTime)`
	margin-left: auto; 
	margin-right: 1.875rem;
`;

const HeaderSearch = styled.div`
	flex: 0.4;
	opacity: 1;
	border-radius: .375rem;
	background-color: #421f44;
	text-align: center;
	display: flex;
	padding: 0 3.125rem;
	border: 1px solid gray;

	> input {
		background-color: transparent;
		border: none;
		text-align: center;
		min-width: 30vw;
		outline: 0;
		color: white;
	}
`;

const HeaderRight = styled.div`
	flex: 0.3;
	display: flex;

	> .MuiSvgIcon-root {
		margin-left: auto;
		margin-right: 1.25rem;
	}
`;