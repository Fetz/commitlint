import {minLength} from '@commitlint/ensure';
import {Rule} from '@commitlint/types';

export const bodyMinLength: Rule<number> = (
	parsed,
	_when = undefined,
	value = 0
) => {
	if (!parsed.body) {
		return [true];
	}

	return [
		minLength(parsed.body, value),
		`body must not be shorter than ${value} characters`
	];
};
