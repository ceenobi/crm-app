import { extendTheme } from '@chakra-ui/react'

const breakpoints = {
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
}

const customTheme = extendTheme(
  {
    styles: {
      global: {
          '.link': {
              alignItems: 'center',
              m:'2px',
              p:'30px',
              w: '100%',
             bgColor: 'pallete.lightTeal'
          }
      },
    },
    fonts: {
      heading: 'Exo, sans-serif',
      body: 'Titillium Web, sans-serif',
    },
    layerStyles: {
      base: {
        bg: 'gray.50',
        border: '2px solid',
        borderColor: 'gray.500',
      },
      selected: {
        bg: 'teal.500',
        color: 'teal.700',
        borderColor: 'orange.500',
      },
    },
    textStyles: {
      h1: {
        fontSize: ['18px', '24px'],
        fontWeight: 'bold',
        lineHeight: '110%',
        letterSpacing: '-2%',
      },
      h2: {
        fontSize: ['16px', '20px'],
        fontWeight: 'semibold',
        lineHeight: '110%',
        letterSpacing: '-1%',
      },
      p: {
        fontSize: ['14pxpx', '16px'],
        lineHeight: '110%',
        letterSpacing: '-1%',
      },
    },
    colors: {
      pallete: {
        lightBlue: '#B5EAEA',
        lightTeal: '#EDF6E5',
        palePink: '#FFBCBC',
        pink: '#F38BA0',
      },
    },
  },
  { breakpoints }
)

export default customTheme
