/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/[locale]/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  safelist: [
    {
      pattern:
        /text-icon-(reactjs|redux|nextjs|typescript|tailwindcss|css|sass|net|nodejs|express|mongodb|git|github|vscode|docker|pnpm|postman|mysql|graphql|aws)/,
      variants: ['hover']
    }
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          midnight: '#161515'
        },
        icon: {
          reactjs: '#61DAFB',
          redux: '#764ABC',
          nextjs: '#0070F3',
          typescript: '#3178C6',
          tailwindcss: '#38B2AC',
          css: '#1572B6',
          sass: '#CC6699',
          net: '#512BD4',
          nodejs: '#68A063',
          express: '#68A063',
          mongodb: '#4DB33D',
          git: '#F05032',
          github: '#6e5494',
          vscode: '#007ACC',
          docker: '#2496ED',
          pnpm: '#F69220',
          postman: '#FF6C37',
          mysql: '#4479A1',
          graphql: '#E10098',
          aws: '#232F3E'
        }
      },
      backgroundImage: {
        midnight: 'var(--color-primary-midnight)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  plugins: []
}
