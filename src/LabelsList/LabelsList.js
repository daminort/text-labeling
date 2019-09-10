import React from 'react';
import * as PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconDelete from '@material-ui/icons/Delete';

import { CLASSES } from '../constants';

const LabelsList = ({ labels, onRemove }) => {

	const items = labels.map(item => {
		const { text, label, start, end } = item;
		const className = CLASSES[label];

		return (
			<ListItem className={className} key={start}>
				<ListItemText
					primary={text}
					secondary={`${label}, start: ${start}, end: ${end}`}
				/>
				<ListItemIcon>
					<IconDelete onClick={() => onRemove(start)} />
				</ListItemIcon>
			</ListItem>
		)
	})

	return (
		<div className="labels-list">
			<h3>Current labels</h3>
			<List component="div">
				{items}
			</List>
		</div>
	);
};

LabelsList.propTypes = {
	labels: PropTypes.array.isRequired,
	onRemove: PropTypes.func.isRequired,
};

export default LabelsList;
export { LabelsList };
