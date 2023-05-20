import React from "react";
import styled from "styled-components";
import { StarBorderOutlined } from "@mui/icons-material";
import { InfoOutlined } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { selectRoomId } from "../features/appSlice";
import ChatInput from "./ChatInput";

function Chat() {
	const roomId = useSelector(selectRoomId);

	return (
		<ChatContainer>
			<Header>
				<HeaderLeft>
					<h4><strong>#Room-Name</strong></h4>
					<StarBorderOutlined />
				</HeaderLeft>
				<HeaderRight>
					<p>
						<InfoOutlined /> Details
					</p>
				</HeaderRight>
			</Header>

			<ChatMessages>
				{/* list out chat messages here */}
			</ChatMessages>

			<ChatInput
				//channelname
				channelId={roomId}	
			/>
		</ChatContainer>
	)
}

export default Chat;

const ChatContainer = styled.div`
	flex: 0.7;
	flex-grow: 1;
	overflow-y: scroll;
`;

const Header = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 1.3125rem;
	border-bottom: 1px solid lightgray;
`;

const HeaderLeft = styled.div`
	display: flex;
	align-items: center;

	> h4 {
		display: flex;
		text-transform: lowercase;
		margin-right: .625rem;
	}
`;

const HeaderRight = styled.div`

	> p {
		display: flex;
		align-items: center;
		font-size: .875rem;
	}

	> p > .MuiSvgIcon-root {
		font-size: 1rem;
		margin-right: .3125rem;
	}
`;

const ChatMessages = styled.div`

`;