import React from 'react';
import * as PropTypes from 'prop-types';

import { CLASSES } from '../constants';

const Keyword = ({ text, type }) => {
	return (
		<span className={CLASSES[type]}>
			{text}
		</span>
	);
};

Keyword.propTypes = {
	text: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
};

export default Keyword;
export { Keyword };
