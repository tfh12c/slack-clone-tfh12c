import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "@mui/material";
import { db } from "../firebase";
import firebase from 'firebase';
import { auth } from "../firebase";
import { useAuthState } from 'react-firebase-hooks/auth'

function ChatInput({ channelName, channelId, chatRef }) {
	const [input, setInput] = useState('');
	const [user] = useAuthState(auth);

	const sendMessage = (event) => {
		event.preventDefault();

		if (!channelId) return false;

		db.collection('rooms').doc(channelId).collection('messages').add({
			message: input,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
			user: user.displayName,
			userImage: user.photoURL
		})

		chatRef.current.scrollIntoView({ behavior: 'smooth' })
	}

	return (
		<ChatInputContainer>
			<form>
				<input value={input} onChange={(e) => setInput(e.target.value)} placeholder={`Message #${channelName}`} />
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