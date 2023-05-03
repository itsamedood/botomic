import inquirer from "inquirer";

/**
 * Contains functions for prompting the user.
 */
export default class Prompt {
	static async getTask() {
		const task = await inquirer.prompt({
			name: "task",
			type: "list",
			message: "What do you want to do?",
			choices: [
				{
					name: "Generate Project",
					disabled: false
				},
				{
					name: "Add Command",
					disabled: false
				},
				{
					name: "Add Event",
					disabled: false
				},
				{
					name: "Exit",
					disabled: false
				},
			]
		});

		return task.task;
	}

	static async getLanguage() {
		const lang = await inquirer.prompt({
			name: "lang",
			type: "list",
			message: "What language are you using?",
			choices: [
				{
					name: "JavaScript",
					disabled: false
				},
				{
					name: "TypeScript",
					disabled: false
				},
				{
					name: "Python",
					disabled: true
				},
			]
		});

		return lang.lang;
	}

	/**
	 * Prompt and recieve options for a JavaScript project.
	 */
	static getJSOptions() { /* */ }

	/**
	 * Prompt and recieve options for a TypeScript project.
	 */
	static getTSOptions() { /* */ }

	/**
	 * Prompt and recieve options for a Python project.
	 */
	static getPyOptions() { /* */ }
}
