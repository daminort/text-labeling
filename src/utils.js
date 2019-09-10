export const originText = 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.\\nNo one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.\\nTo take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?';

export function createParagraphs(text = '', labels = []) {

	// cut origin matches
	labels.forEach(label => {
		label.text = text.slice(label.start, label.end);
	});

	// replace matches by placeholders (from end to start)
	let placed = text;
	for (let i = labels.length - 1; i >= 0; i--) {
		const label = labels[i];
		const placeholder = `%_I-WORD-${i}_%`;
		placed = [placed.slice(0, label.start), placeholder, placed.slice(label.end)].join('');
	}

	// break up text into paragraphs
	const sections = placed.split('\\n');

	// every paragraph break up into parts by placeholders
	const regex = /%_I-WORD-(\d)_%/g;
	const paragraphs = sections.map(section => {
		let m;
		const matches = [];
		while ((m = regex.exec(section)) !== null) {
			if (m.index === regex.lastIndex) {
				regex.lastIndex++;
			}
			matches.push({
				pattern: m[0],
				pos: +m[1],
			});
		};

		const parts = section.split(/%_I-WORD-\d_%/);

		return {
			matches,
			parts,
		};
	});

	return paragraphs;
};

export function createLabels(text = '', selectedText, label) {
	const labels = [];
	const regex = new RegExp(selectedText, 'g');

	let m;
	while ((m = regex.exec(text)) !== null) {
		if (m.index === regex.lastIndex) {
			regex.lastIndex++;
		}
		labels.push({
			label,
			start: m.index,
			end: m.index + selectedText.length,
			text: selectedText,
		});
	};

	return labels;
};
