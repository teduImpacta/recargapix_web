const baseTheme = {
  fonts: {
    default: {
      family: 'Nunito Sans',
      styles: {
        regular: 400,
        semibold: 600,
        bold: 700
      }
    }
  },
  typography: {
    h1: {
      size: '2.8rem',
      lineHeight: '4rem'
    },
    h2: {
      size: '2rem',
      lineHeight: '2.8rem'
    },
    h3: {
      size: '1.8rem',
      lineHeight: '2.6rem'
    },
    h4: {
      size: '1.6rem',
      lineHeight: '2.4rem'
    },
    h5: {
      size: '1.4rem',
      lineHeight: '1.8rem'
    },
    text: {
      size: '1.2rem',
      lineHeight: '1.6rem'
    },
    label: {
      size: '0.8rem',
      lineHeight: '1.2rem'
    },
    small: {
      size: '1rem',
      lineHeight: '1.4rem'
    }
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  radii: {
    small: '0.6rem',
    xsmall: '0.4rem',
    large: '1rem',
    big: '1rem',
    normal: '0.8rem'
  },
  spacings: {
    1: '0.8rem',
    2: '1.6rem',
    3: '2.4rem',
    4: '3.2rem',
    5: '4rem',
    6: '4.8rem',
    7: '6.4rem',
    8: '7.2rem',
    9: '8rem',
    10: '8.8rem',
    11: '9.6rem',
    12: '10.4rem',
    13: '11.2rem',
    14: '12rem',
    15: '12.8rem'
  }
}

const baseColors = {
  primary: '#35dde3',
  primary200: '#EFF8FF',
  primary400: '#365C7D',
  tertiary: '#CFCDB4',
  linear2: 'linear-gradient(115.27deg, #FFC000 -21.38%, #35dde3 93.83%)',
  white: '#FFFFFF',
  gray0: '#F9FAFB',
  gray1: '#F1F3F5',
  gray2: '#E9ECEF',
  gray3: '#DEE2E6',
  gray4: '#CED4DA',
  gray5: '#ADB5BD',
  gray6: '#9FA6AC',
  gray7: '#69737D',
  gray8: '#343A40',
  gray9: '#212529',
  success: '#26A541',
  success2: '#3FD65F',
  warning: '#FFAB00',
  error: '#CF3E3E',
  orange: '#F2994A'
}

export const theme = {
  name: 'fault',
  colors: {
    primary300: '#35dde3',
    ...baseColors
  },
  ...baseTheme
}

export const rpTheme = {
  name: 'card',
  colors: {
    primary300: '#35dde3',
    ...baseColors
  },
  ...baseTheme
}

export type Theme = typeof theme
