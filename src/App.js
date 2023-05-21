import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import styled from 'styled-components';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import Login from './components/Login';

function App() {
	const [user, loading] = useAuthState(auth);
  return (
    <>
		<BrowserRouter>
			{!user 
				? ( <Login />)
				: (
					<>
						<Header />
						<AppBody>
							<Sidebar />
							<Routes>
								<Route path='/' element={<Chat />} />
							</Routes>
						</AppBody>
					</>
				)
			}
			
		</BrowserRouter>
	</>
  );
}

export default App;

const AppBody = styled.div`
	padding-top: 60px;
	display: flex;
	height: 100vh;
`;