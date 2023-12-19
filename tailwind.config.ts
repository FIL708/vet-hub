import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: '#90BDAC',
                    secondary: '#37755D',
                    accent: '#2C423A',
                    neutral: '#1A1C1A',
                    'base-100': '#FAF6F6',
                    info: '#38bdf8',
                    success: '#84cc16',
                    warning: '#fbbf24',
                    error: '#dc2626',
                },
            },
        ],
    },
    plugins: [require('daisyui')],
};
export default config;
