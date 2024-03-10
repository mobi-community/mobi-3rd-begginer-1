module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'airbnb',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended'
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 13,
		sourceType: 'module'
	},
	plugins: ['react', '@typescript-eslint', 'unused-imports'],
	rules: {
		'@typescript-eslint/interface-name-prefix': 'on',
		'@typescript-eslint/explicit-function-return-type': 'on',
		'@typescript-eslint/explicit-module-boundary-types': 'on',
		'@typescript-eslint/no-explicit-any': 'on'
	}
}
