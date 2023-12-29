module.exports = {
	root: true,
	parser: '@babel/eslint-parser',
	extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'plugin:tailwindcss/recommended'],
	rules: {
		'vue/no-unused-vars': 'warn',
		"no-unused-vars": "warn",
		'tailwindcss/no-custom-classname': 0,
		'padding-line-between-statements': [
			'error',
			{ blankLine: 'always', prev: 'function', next: 'function' },
			// { "blankLine": "always", "prev": "function", "next": "block" },
			// { "blankLine": "always", "prev": "block", "next": "function" },
		],
	},
	overrides: [
		{
			files: ['*.vue'],
			parser: 'vue-eslint-parser',
		},
	],
};
