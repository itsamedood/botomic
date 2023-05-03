import gradient from "gradient-string";
import figlet from "figlet";
import Generator from "./generator.js";
import Prompt from "./prompt.js";

/**
 * Pauses execution for `ms`.
 */
const sleep = (ms = 1000) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Displays `BOTOMIC` in large ASCII letters
 * with a green and blue gradient.
 */
async function showTitle() {
	// `await` DOES have an affect on this expression.
	await figlet("BOTOMIC", (e, d) => e ? console.error(e) : console.log(gradient("green", "blue")(d)));
}

(async () => {
	await showTitle();
	await sleep(700);

	const task = await Prompt.getTask();

	switch (task) {
		case "Generate Project":
			const lang = await Prompt.getLanguage();
			console.log(`Lang: ${lang}`);

			switch (lang) {
				case "JavaScript": break;
				case "TypeScript": break;
				case "Python": break; /* Support coming soon! */
			}

			break;
		case "Add Command": break;
		case "Add Event": break;
		case "Exit": break;
	}
})();
