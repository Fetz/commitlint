import chalk from 'chalk';

/**
 * Get formatted meta hints for configuration
 * @param  {object} settings dictionary to parse
 * @return {string}          formatted meta information
 */
export default function meta(settings) {
	return chalk.grey(
		Object.entries(settings || {})
			.filter(item => item[1])
			.map(item => {
				const [name, value] = item;
				return typeof value === 'boolean' ? `[${name}]` : `[${name}=${value}]`;
			})
			.join(' ')
	);
}
