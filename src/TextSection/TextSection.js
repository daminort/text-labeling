import React, { useState } from 'react';
import * as PropTypes from 'prop-types';

import { Paragraph } from '../Paragraph';
import { ContextMenu } from '../ContextMenu';
import { createParagraphs } from '../utils';
import { CONTEXT_MENU_IDS } from '../constants';

const TextSection = ({ text, labels, onAddLabel }) => {

	const [selectedText, setSelectedText] = useState('');
	const [showMenu, setShowMenu] = useState(false);
	const [menuCoords, setMenuCoords] = useState({ top: 0, left: 0 });

	const paragraphs = createParagraphs(text, labels);

	const content = paragraphs.map((paragraph, i) => {
		return (
			<Paragraph
				key={i}
				parts={paragraph.parts}
				matches={paragraph.matches}
				labels={labels}
			/>
		);
	});

	const onMouseUp = (event) => {
		const selection = window.getSelection().toString();
		setSelectedText(selection);

		let isRightMB = false;
		if ("which" in event)  // Gecko (Firefox), WebKit (Safari/Chrome) & Opera
			isRightMB = event.which === 3;
		else if ("button" in event)  // IE, Opera
			isRightMB = event.button === 2;

		if (!isRightMB) {
			setShowMenu(false);
		}
	};

	const onContextMenu = (event) => {
		event.preventDefault();

		setMenuCoords({
			top: event.clientY + 8,
			left: event.clientX + 8,
		});
		setShowMenu(true);
	}

	const onMenuClick = (event, id) => {
		event.stopPropagation();
		if (id === CONTEXT_MENU_IDS.remove) {

		} else {
			onAddLabel(selectedText, id);
		};
	}

	return (
		<div onMouseUp={onMouseUp} onContextMenu={onContextMenu}>
			<h3>Text for labeling</h3>
			{content}
			<ContextMenu
				open={showMenu}
				top={menuCoords.top}
				left={menuCoords.left}
				onMenuClick={onMenuClick}
			/>
		</div>
	);
};

TextSection.propTypes = {
	text: PropTypes.string.isRequired,
	labels: PropTypes.array.isRequired,
};

export default TextSection;
export { TextSection };
