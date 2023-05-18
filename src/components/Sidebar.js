import React from "react";
import styled from "styled-components";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CreateIcon from '@mui/icons-material/Create';
import SidebarOption from "./SidebarOption";
import { InsertComment } from "@mui/icons-material";
import { Inbox } from "@mui/icons-material";
import { Drafts } from "@mui/icons-material";
import { BookmarkBorder } from "@mui/icons-material";
import { PeopleAlt } from "@mui/icons-material";
import { Apps } from "@mui/icons-material";
import { FileCopy } from "@mui/icons-material";
import { ExpandLess } from "@mui/icons-material";
import { ExpandMore } from "@mui/icons-material";
import { Add } from "@mui/icons-material";

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

			<SidebarOption Icon={InsertComment} title='Threads' />
			<SidebarOption Icon={Inbox} title='Mentions & Reactions' />
			<SidebarOption Icon={Drafts} title='Saved items' />
			<SidebarOption Icon={BookmarkBorder} title='Channel Browser' />
			<SidebarOption Icon={PeopleAlt} title='People & User groups' />
			<SidebarOption Icon={Apps} title='Apps' />
			<SidebarOption Icon={FileCopy} title='File browser' />
			<SidebarOption Icon={ExpandLess} title='Show less' />
			<hr />
			<SidebarOption Icon={ExpandMore} title='Channels' />
			<hr />
			<SidebarOption Icon={Add} title='Add Channel' addChannelOption />
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

	> hr {
		margin-top: .625rem;
		margin-bottom: .625rem;
		border: 1px solid #49274b;
	}
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