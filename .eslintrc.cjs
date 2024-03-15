module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
		"plugin:react/recommended"
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parser: '@typescript-eslint/parser',
	plugins: ['react-refresh'],
	rules: {
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true },
		],
		'no-mixed-spaces-and-tabs': 'off',
		indent: ["error", 4],
		"react/jsx-indent": ["error", 4, {indentLogicalExpressions: true}],
	},
	globals: {
		"React": true,
	},
}
