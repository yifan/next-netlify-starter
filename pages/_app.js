import { GeistProvider, CssBaseline, Themes } from '@geist-ui/core'

const futuristic = Themes.createFromLight({
  type: 'futuristic',
  palette: {
    accents_1: '#121212', // Deep Space Black
    accents_2: '#1EFF00', // Neon Green
    accents_5: '#8B00FF', // Galactic Purple
    accents_6: '#007BFF', // Electric Blue
    accents_7: '#C0C0C0', // Cyber Silver
    background: '#121212', // Deep Space Black for background
    foreground: '#C0C0C0', // Cyber Silver for text
    selection: '#007BFF', // Electric Blue for selections
    secondary: '#1EFF00', // Neon Green
  },
  expressiveness: {
    dropdownBoxShadow: '0 0 0 1px #007BFF',
    shadowSmall: '0 0 0 1px #007BFF',
    shadowMedium: '0 0 2px 0 #007BFF',
    shadowLarge: '0 0 4px 0 #007BFF',
    portalOpacity: 0.75,
  },
  font: {
    sans: "'Share Tech Mono', monospace",
  },
})

const futuristic2 = Themes.createFromLight({
  type: 'futuristic2',
  palette: {
    accents_1: '#151515', // Adjusted Deep Space Black for better contrast
    accents_2: '#33FF00', // Brighter Neon Green for emphasis
    accents_5: '#9B00FF', // Adjusted Galactic Purple
    accents_6: '#008BFF', // Richer Electric Blue
    accents_7: '#D0D0D0', // Lighter Cyber Silver for readability
    background: '#151515', // Deep Space Black for background
    foreground: '#D0D0D0', // Cyber Silver for text
    selection: '#008BFF', // Electric Blue for selections
    secondary: '#33FF00', // Neon Green
    code: '#FFFF00', // Bright Yellow for code blocks, ensures high readability
  },
  expressiveness: {
    dropdownBoxShadow: '0px 0px 8px 1px #007BFF', // Glowing effect
    shadowSmall: '0px 0px 0px 1px #007BFF', // Subtle glow
    shadowMedium: '0px 0px 8px 2px #007BFF', // Medium glowing effect
    shadowLarge: '0px 0px 16px 2px #007BFF', // Strong glowing effect
    portalOpacity: 0.9, // Slightly more visible portals
    linkStyle: 'none', // Remove default link style for a cleaner look
    linkHoverStyle: 'none', // Remove default link hover style for consistency
  },
  font: {
    sans: "'Orbitron', sans-serif", // Changed to Orbitron for a more futuristic feel
    mono: "'Share Tech Mono', monospace", // Kept Share Tech Mono for monospace requirements
  },
  layout: {
    gap: '1.5rem', // More space between elements
    gapNegative: '-1.5rem',
    gapHalf: '.75rem',
    gapHalfNegative: '-.75rem',
    gapQuarter: '.375rem',
    gapQuarterNegative: '-.375rem',
    pageMargin: '2rem', // More breathing room on the sides
    pageWidth: '1000px', // Set a max-width for better readability on larger screens
    pageWidthWithMargin: '1040px',
    breakpointMobile: '720px', // Adjusted for better mobile responsiveness
    breakpointTablet: '960px', // Adjusted for better tablet responsiveness
    breakpointDesktop: '1280px', // Standard desktop breakpoint
  }
})


const technology = Themes.createFromLight({
  type: 'technology', // name of the theme
  palette: {
    // Using colors that represent technology, trust, and innovation
    foreground: '#000000',
    background: '#ffffff',
    success: '#00ab6b', // A green that is often associated with growth, harmony, freshness, safety, and environment.
    error: '#ff6a6a', // A softer shade of red to indicate errors without being too alarming.
    warning: '#f0e68c', // A gentle yellow that indicates caution without causing anxiety.
    link: '#0366d6', // A shade of blue that's often associated with trust and stability.
    secondary: '#333333',
    code: '#f81ce5',
    border: '#eaeaea',
    tableDivider: '#f8f8f8',
    selectionBackground: '#f81ce5',
    selectionForeground: '#ffffff',
    accent: '#0070f3', // A bright color for focus areas, using a slightly different blue to differentiate and provide a modern, energetic vibe.
    cyan: '#79ffe1', // An innovative and eye-catching color for interactive elements.
    purple: '#f81ce5', // An energetic color that can be used for highlighting actions or information.
    violet: '#7928ca', // Represents luxury and offers a deeper contrast.
    alert: '#ff0080',
  },
  expressiveness: {
    dropdownBoxShadow: '0 0 0 1px #333',
    shadowSmall: '0 0 0 1px #333',
    shadowMedium: '0 0 2px 0 #333',
    shadowLarge: '0 0 15px 0 #333',
    portalOpacity: 0.75,
  },
  layout: {
    gap: '16pt',
    gapNegative: '-16pt',
    gapHalf: '8pt',
    gapHalfNegative: '-8pt',
    gapQuarter: '4pt',
    gapQuarterNegative: '-4pt',
    pageMargin: '0pt',
    pageWidth: '1000pt',
    pageWidthWithMargin: '1000pt',
    radius: '5pt',
  },
  font: {
    sans: '"Inter", sans-serif', // A clean, neutral, modern sans-serif font. Make sure you're loading this font in your app if it's not already.
    mono: '"Fira Code", monospace', // A font designed for code, which could match your technology-oriented style.
  },
})

const App = ({ Component, pageProps }) => {
  return (
    <GeistProvider themes={[futuristic, technology, futuristic2]} themeType='futuristic2'>
      <CssBaseline />
      <Component {...pageProps} />
    </GeistProvider>
  )
}

export default App