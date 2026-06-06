/**
 * newCreator.org Design System — Tailwind Config v2
 *
 * カラーパレットはロゴから抽出した4色を基軸に構成します。
 *
 * Brand Colors (ロゴ由来):
 *   brand.blue      #1476A6  — ロゴテキスト・プライマリ
 *   brand.blue-mid  #2789B9  — ロゴシンボル・セカンダリ
 *   brand.sky       #95D4E8  — ロゴシンボル・ライトアクセント
 *   brand.yellow    #FDCA60  — ロゴシンボル・ウォームアクセント
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        // ---- Brand palette (ロゴ由来) ----
        brand: {
          blue: {
            50:  '#EDF6FB',
            100: '#D4EAF5',
            200: '#A9D5EB',
            300: '#7DBFDF',
            400: '#52AAD4',
            500: '#2789B9',   // brand-blue-mid
            600: '#1476A6',   // brand-blue (ロゴ本体)
            700: '#0F5A80',
            800: '#0A3F5B',
            900: '#052535',
            DEFAULT: '#1476A6',
          },
          yellow: {
            50:  '#FFFBF0',
            100: '#FEF4D3',
            200: '#FDE9A7',
            300: '#FDDE7B',
            400: '#FDCA60',   // brand-yellow (ロゴシンボル)
            500: '#F5B730',
            600: '#D99A10',
            700: '#A87708',
            800: '#775405',
            900: '#463103',
            DEFAULT: '#FDCA60',
          },
          sky: {
            50:  '#F0FAFE',
            100: '#DCF2FA',
            200: '#B9E5F5',
            300: '#95D4E8',   // brand-sky (ロゴシンボル)
            400: '#6EC3DC',
            500: '#47B2D0',
            600: '#2E96B4',
            700: '#22728A',
            800: '#164F60',
            900: '#0B2B36',
            DEFAULT: '#95D4E8',
          },
        },
      },

      fontFamily: {
        sans: [
          '"Noto Sans JP"',
          'HelveticaNeue',
          'YuGothic',
          '"Yu Gothic Medium"',
          '"Yu Gothic"',
          '-apple-system',
          'BlinkMacSystemFont',
          'Roboto',
          '"Segoe UI"',
          '"Helvetica Neue"',
          'Verdana',
          'Meiryo',
          'sans-serif',
        ],
      },

      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },

      borderRadius: {
        'extraLarge': '7rem',
      },

      boxShadow: {
        'card':    '0 1px 3px 0 rgba(20,118,166,0.08), 0 1px 2px -1px rgba(20,118,166,0.06)',
        'card-md': '0 4px 12px 0 rgba(20,118,166,0.10), 0 2px 4px -2px rgba(20,118,166,0.08)',
        'card-lg': '0 8px 24px 0 rgba(20,118,166,0.12), 0 4px 8px -4px rgba(20,118,166,0.10)',
        'btn':     '0 2px 8px 0 rgba(20,118,166,0.30)',
        'btn-accent': '0 2px 8px 0 rgba(253,202,96,0.40)',
      },

      // typography プラグイン用カスタマイズ
      typography: (theme) => ({
        brand: {
          css: {
            '--tw-prose-body':         theme('colors.gray.700'),
            '--tw-prose-headings':     theme('colors.gray.900'),
            '--tw-prose-links':        theme('colors.brand.blue.600'),
            '--tw-prose-bold':         theme('colors.gray.900'),
            '--tw-prose-counters':     theme('colors.brand.blue.500'),
            '--tw-prose-bullets':      theme('colors.brand.blue.400'),
            '--tw-prose-hr':           theme('colors.gray.200'),
            '--tw-prose-quotes':       theme('colors.gray.700'),
            '--tw-prose-quote-borders': theme('colors.brand.blue.400'),
            '--tw-prose-captions':     theme('colors.gray.500'),
            '--tw-prose-code':         '#DC2626',
            '--tw-prose-pre-code':     theme('colors.gray.100'),
            '--tw-prose-pre-bg':       '#1F2937',
            '--tw-prose-th-borders':   theme('colors.gray.300'),
            '--tw-prose-td-borders':   theme('colors.gray.200'),
            h2: {
              borderBottom: `2px solid ${theme('colors.gray.200')}`,
              paddingBottom: '0.5rem',
            },
            a: {
              textDecoration: 'underline',
              '&:hover': {
                color: theme('colors.brand.blue.700'),
              },
            },
            blockquote: {
              borderLeftColor: theme('colors.brand.blue.400'),
              backgroundColor: '#F8FCFF',
              paddingTop: '0.75rem',
              paddingBottom: '0.75rem',
              paddingRight: '1rem',
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
