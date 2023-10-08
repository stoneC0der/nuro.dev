import defaultTheme from 'windicss/defaultTheme';

export const colors: Record<string, Record<number, string>> = {
	...defaultTheme.colors,
	gray: {
		50: '#f9fafb',
		100: '#eaeaeb',
		200: '#cacbcd',
		300: '#a7a9ac',
		400: '#696c71',
		500: '#282d34',
		600: '#24292f',
		700: '#181b20',
		800: '#121518',
		900: '#0c0e10',
	},
	primary: {
		50: '#ec9866',
		100: '#e88446',
		200: '#e87832',
		300: '#e86d22',
		400: '#e86919',
		500: '#ea600b',
		600: '#e55801',
		700: '#c04c03',
		800: '#7c3204',
		900: '#502104',
	},
};
