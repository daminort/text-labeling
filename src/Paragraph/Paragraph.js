import React, { Fragment } from 'react';
import * as PropTypes from 'prop-types';

import { Keyword } from '../Keyword/Keyword';

const Paragraph = ({ parts, matches, labels }) => {
	const result = parts.map((part, i) => {
		const placeholder = matches[i] || null;
		const labelIndex  = placeholder ? placeholder.pos : -1;
		const label       = labelIndex >= 0 ? labels[labelIndex] : null;
		const keyword     = label ? <Keyword text={label.text} type={label.label} /> : null;

		return (
			<Fragment key={i}>
				{part}
				{keyword}
			</Fragment>
		);
	});

	return (
		<p>
			{result}
		</p>
	);
};

Paragraph.propTypes = {
	name: PropTypes.string,
};

Paragraph.defaultProps = {
	name: '',
};

export default Paragraph;
export { Paragraph };
