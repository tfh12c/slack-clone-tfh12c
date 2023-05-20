import React from "react";
import styled from "styled-components";
import { Button } from "@mui/material";

function ChatInput({ channelName, channelId }) {

	const sendMessage = (event) => {
		event.preventDefault();


	}

	return (
		<ChatInputContainer>
			<form>
				<input placeholder={`Message #ROOM`} />
				<Button hidden type='submit' onClick={sendMessage}>
					SEND
				</Button>
			</form>
		</ChatInputContainer>
	)
}

export default ChatInput;

const ChatInputContainer = styled.div`
	border-radius: 1.25rem;

	> form {
		 position: relative;
		 display: flex;
		 justify-content: center;
	}

	> form > input {
		position: fixed;
		bottom: 1.875rem;
		width: 60%;
		border: 1px solid gray;
		border-radius: .1875rem;
		padding: 1.25rem;
		outline: none;
	}

	> form > button {
		display: none !important;
	}
`;