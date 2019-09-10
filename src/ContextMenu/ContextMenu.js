import React from 'react';
import * as PropTypes from 'prop-types';
import Popover from '@material-ui/core/Popover';
import MenuItem from '@material-ui/core/MenuItem';

import { CONTEXT_MENU_IDS as IDs } from '../constants';

const items = [
	{ id: IDs.confirmEmail, title: 'Confirm E-mail' },
	{ id: IDs.confirmUserID, title: 'Confirm User ID' },
	{ id: IDs.confirmPassword, title: 'Confirm Password' },
	{ id: IDs.confirmIWord, title: 'Confirm i-Word' },
	{ id: IDs.confirmFauxEmail, title: 'Confirm Faux E-mail' },
	{ id: IDs.confirmFauxUserID, title: 'Confirm Faux User ID' },
	{ id: IDs.confirmFauxPassword, title: 'Confirm Faux Password' },
	{ id: IDs.remove, title: 'Remove Keyword' },
]

const ContextMenu = ({ open, top, left, onMenuClick }) => {

	const menuItems = items.map(item => {
		const { id, title } = item;
		return (
			<MenuItem
				key={id}
				onClick={(event) => onMenuClick(event, id)}>
				{title}
			</MenuItem>
		);
	})

	return (
		<Popover
			anchorReference="anchorPosition"
			anchorPosition={{ top, left }}
			open={open}
		>
			{menuItems}
		</Popover>
	);
};

ContextMenu.propTypes = {
	open: PropTypes.bool.isRequired,
	top: PropTypes.number.isRequired,
	left: PropTypes.number.isRequired,
	onMenuClick: PropTypes.func.isRequired,
};

export default ContextMenu;
export { ContextMenu };
