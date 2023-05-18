import React from "react";
import styled from "styled-components";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CreateIcon from '@mui/icons-material/Create';

function Sidebar() {

	return (
		<SidebarContainer>
			<SidebarHeader>
				<SidebarWorkspace>
					<h2>HomeBase</h2>
					<h3>
						<FiberManualRecordIcon />
						Tavers
					</h3>
				</SidebarWorkspace>
				<CreateIcon />
			</SidebarHeader>
		</SidebarContainer>
	)
}

export default Sidebar;

const SidebarContainer = styled.div`
	background-color: var(--slack-color);
	color: white;
	flex: 0.3%;
	border-top: 1px solid #49274b;
	max-width: 16.25rem;
`;

const SidebarHeader = styled.div`
	display: flex;
	border-bottom: 1px solid #49274b;
	padding: .8125rem;

	> .MuiSvgIcon-root {
		padding: 8px;
		color: #49274b;
		font-size: 1.125rem;
		background-color: white;
		border-radius: 50%;
	}
`;

const SidebarWorkspace = styled.div`
	flex: 1;

	> h2 {
		font-size: .9375rem;
		font-weight: 900;
		margin-bottom: .3125rem;
	}

	> h3 {
		display: flex;
		font-size: .8125rem;
		font-weight: 400;
		align-items: center;
	}

	> h3 > .MuiSvgIcon-root {
		font-size: .875rem;
		margin-top: .0625rem;
		margin-right: .125rem;
		color: green;
	}
`;