export const theme = {
  color: {
    primary: '#15b7b9',
    alternative: ' #10ddc2',
    black: '#2b2523',
    red: '#f57170',
    white: '#f5f5f5',
  },
  font: {
    sizes: {
      xs: '16px',
      s: '20px',
      base: '30px',
      m: '36px',
      l: '42px',
      xl: '50px',
      xxl: '58px',
    },
    lineHeight: {
      headings: 1.1,
    },
    fontWeight: {
      normal: 300, // Useful to set here if using anything other than `normal`
      bold: 'bold', // Useful to set here when bold webfonts come as 400 font-weight.
      headings: 'bold', // instead of browser default, bold
    },
  },
  media: {
    small: '@media(min-width: 0px)',
    medium: '@media(min-width: 600px)',
    large: '@media(min-width: 900px)',
  },
};
