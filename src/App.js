import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import styled from 'styled-components';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
		<BrowserRouter>
			<Header />
			<AppBody>
				<Sidebar />
				<Routes>
					<Route path='/'  />
				</Routes>
			</AppBody>
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