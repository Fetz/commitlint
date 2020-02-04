import {maxLineLength} from '@commitlint/ensure';
import {Rule} from './types';

export const footerMaxLineLength: Rule<number> = (
	parsed,
	_when = undefined,
	value = 0
) => {
	const input = parsed.footer;

	if (!input) {
		return [true];
	}

	return [
		maxLineLength(input, value),
		`footer's lines must not be longer than ${value} characters`
	];
};
