/**
 * Prints `message` and exits with status code `code`.
 */
export default function exit(message, code) {
	console.log(`\n\x1b[31m✖ ${message}\x1b[0m`);
	// eslint-disable-next-line no-undef
	return process.exit(code);
}

/**
 * Prints `message` in green with a checkmark.
 * If `bg`, the text will have a green background.
 * If `exit`, the process will exit with status code `0`.
 */
export function success(message, bg = false, exit = false) {
	bg ?
		console.log(`\x1b[32m✔ \x1b[42m${message}\x1b[0m`) :
		console.log(`\x1b[32m✔ ${message}\x1b[0m`);

	// eslint-disable-next-line no-undef
	if (exit) return process.exit(0); else return;
}

/**
 * Prints `message` as an error, but doesn't exit.
 */
export function error(message) { return console.log(`\x1b[31m✖ ${message}\x1b[0m`); }

/**
 * Prints `message` in yellow with a caution sign.
 */
export function warn(message) { return console.log(`\x1b[33m⚠ ${message}\x1b[0m`); }
