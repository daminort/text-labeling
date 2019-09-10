import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: stretch;
  height: calc(100vh - 48px);
  
  .i-word {
			background-color: #a8c357;
	}
	.user-id {
			background-color: #45a4c3;
			color: white;
	}
	.pass {
			background-color: #c3423c;
			color: white;
	}
	
	.labels-list {
		min-width: 420px;
		margin-left: 24px;
		
		.MuiListItem-root {
			margin-bottom: 1px;
		}
		.MuiListItemIcon-root {
			min-width: unset;
			cursor: pointer;
		}
	}
`;
