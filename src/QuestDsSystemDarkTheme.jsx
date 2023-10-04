import React from 'react';

import { createTheme } from '@mui/material/styles';

const darkGlobalTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: 'rgba(208, 207, 246, 1)',
      contrastText: 'rgba(0, 0, 0, 0.9)',
    },
    secondary: {
      main: 'rgba(194, 238, 252, 1)',
      contrastText: 'rgba(0, 0, 0, 0.9)',
    },
    error: {
      main: 'rgba(249, 206, 219, 1)',
      contrastText: 'rgba(0, 0, 0, 0.9)',
    },
    warning: {
      main: 'rgba(251, 220, 191, 1)',
      contrastText: 'rgba(0, 0, 0, 0.9)',
    },
    success: {
      main: 'rgba(205, 239, 208, 1)',
      contrastText: 'rgba(0, 0, 0, 0.9)',
    },
    info: {
      main: 'rgba(205, 232, 252, 1)',
      contrastText: 'rgba(0, 0, 0, 0.9)',
    },
    text: {
      primary: 'rgba(255, 255, 255, 1)',
      secondary: 'rgba(207, 207, 207, 1)',
      disabled: 'rgba(175, 175, 175, 1)',
    },
    action: {
      active: 'rgba(255, 255, 255, 0.54)',
      selected: 'rgba(255, 255, 255, 0.09)',
      focus: 'rgba(255, 255, 255, 0.14)',
    },
    Primary: {
      Main: 'rgba(208, 207, 246, 1)',
      Contrast: 'rgba(0, 0, 0, 0.9)',
      Shades: {
        '4p': 'rgba(208, 207, 246, 0.04)',
        '8p': 'rgba(208, 207, 246, 0.08)',
        '12p': 'rgba(208, 207, 246, 0.12)',
        '30p': 'rgba(208, 207, 246, 0.3)',
        '50p': 'rgba(208, 207, 246, 0.5)',
      },
    },
    Secondary: {
      Main: 'rgba(194, 238, 252, 1)',
      Contrast: 'rgba(0, 0, 0, 0.9)',
      Shades: {
        '4p': 'rgba(194, 238, 252, 0.04)',
        '8p': 'rgba(194, 238, 252, 0.08)',
        '12p': 'rgba(194, 238, 252, 0.12)',
        '30p': 'rgba(194, 238, 252, 0.3)',
        '50p': 'rgba(194, 238, 252, 0.5)',
      },
    },
    Error: {
      Main: 'rgba(249, 206, 219, 1)',
      Contrast: 'rgba(0, 0, 0, 0.9)',
      Shades: {
        '4p': 'rgba(249, 206, 219, 0.04)',
        '8p': 'rgba(249, 206, 219, 0.08)',
        '12p': 'rgba(249, 206, 219, 0.12)',
        '30p': 'rgba(249, 206, 219, 0.3)',
        '50p': 'rgba(249, 206, 219, 0.5)',
      },
    },
    Warning: {
      Main: 'rgba(251, 220, 191, 1)',
      Contrast: 'rgba(0, 0, 0, 0.9)',
      Shades: {
        '4p': 'rgba(251, 220, 191, 0.04)',
        '8p': 'rgba(251, 220, 191, 0.08)',
        '12p': 'rgba(251, 220, 191, 0.12)',
        '30p': 'rgba(251, 220, 191, 0.3)',
        '50p': 'rgba(251, 220, 191, 0.5)',
      },
    },
    Info: {
      Main: 'rgba(205, 232, 252, 1)',
      Contrast: 'rgba(0, 0, 0, 0.9)',
      Shades: {
        '4p': 'rgba(205, 232, 252, 0.04)',
        '8p': 'rgba(205, 232, 252, 0.08)',
        '12p': 'rgba(205, 232, 252, 0.12)',
        '30p': 'rgba(205, 232, 252, 0.3)',
        '50p': 'rgba(205, 232, 252, 0.5)',
      },
    },
    Success: {
      Main: 'rgba(205, 239, 208, 1)',
      Contrast: 'rgba(0, 0, 0, 0.9)',
      Shades: {
        '4p': 'rgba(205, 239, 208, 0.04)',
        '8p': 'rgba(205, 239, 208, 0.08)',
        '12p': 'rgba(205, 239, 208, 0.12)',
        '30p': 'rgba(205, 239, 208, 0.3)',
        '50p': 'rgba(205, 239, 208, 0.5)',
      },
    },
    Text: {
      Primary: 'rgba(255, 255, 255, 1)',
      Secondary: 'rgba(207, 207, 207, 1)',
      Disabled: 'rgba(175, 175, 175, 1)',
    },
    Action: {
      'Active (54p)': 'rgba(255, 255, 255, 0.54)',
      Hover: 'rgba(255, 255, 255, 0.18)',
      'Selected (8p)': 'rgba(255, 255, 255, 0.09)',
      Disabled: 'rgba(255, 255, 255, 0.42)',
      'Disabled Background': 'rgba(255, 255, 255, 0.24)',
      'Focus (12p)': 'rgba(255, 255, 255, 0.14)',
    },
    Background: {
      Background: 'rgba(18, 18, 18, 1)',
      Paper: {},
    },
    Other: {
      Divider: 'rgba(255, 255, 255, 0.15)',
      'Border (23p)': 'rgba(255, 255, 255, 0.23)',
      'Backdrop Overlay': 'rgba(255, 255, 255, 0.5)',
      'Standard Input Line': 'rgba(255, 255, 255, 0.42)',
      'Filled Input Background': 'rgba(255, 255, 255, 0.1)',
      Snackbar: 'rgba(215, 215, 215, 1)',
      Tooltip: 'rgba(228, 228, 228, 1)',
      'Rating Active': 'rgba(252, 243, 198, 1)',
      'focus-ring-color': 'rgba(206, 196, 254, 1)',
    },
    Common: {
      Black: {
        '4p': 'rgba(0, 0, 0, 0.04)',
        '12p': 'rgba(0, 0, 0, 0.12)',
        '30p': 'rgba(0, 0, 0, 0.3)',
        '100p': 'rgba(0, 0, 0, 1)',
      },
      White: {
        '4p': 'rgba(255, 255, 255, 0.04)',
        '12p': 'rgba(255, 255, 255, 0.12)',
        '30p': 'rgba(255, 255, 255, 0.3)',
        '100p': 'rgba(255, 255, 255, 1)',
      },
    },
  },
  typography: {
    Typography: {
      H1: {
        fontStyle: 'normal',
        fontFamily: 'Poppins',
        fontWeight: 800,
        fontSize: '72px',
        letterSpacing: '-2.16px',
        textDecoration: 'none',
        lineHeight: '100%',
        textTransform: 'none',
      },
      H2: {
        fontStyle: 'normal',
        fontFamily: 'Poppins',
        fontWeight: 700,
        fontSize: '60px',
        letterSpacing: '-3px',
        textDecoration: 'none',
        lineHeight: '100%',
        textTransform: 'none',
      },
      H3: {
        fontStyle: 'normal',
        fontFamily: 'Poppins',
        fontWeight: 700,
        fontSize: '48px',
        letterSpacing: '-1.44px',
        textDecoration: 'none',
        lineHeight: '100%',
        textTransform: 'none',
      },
      H4: {
        fontStyle: 'normal',
        fontFamily: 'Inter',
        fontWeight: 800,
        fontSize: '34px',
        letterSpacing: '-1.36px',
        textDecoration: 'none',
        lineHeight: '100%',
        textTransform: 'none',
      },
      H5: {
        fontStyle: 'normal',
        fontFamily: 'Inter',
        fontWeight: 800,
        fontSize: '24px',
        letterSpacing: '0px',
        textDecoration: 'none',
        lineHeight: '28px',
        textTransform: 'none',
      },
      H6: {
        fontStyle: 'normal',
        fontFamily: 'Inter',
        fontWeight: 600,
        fontSize: '22px',
        letterSpacing: '0px',
        textDecoration: 'none',
        textTransform: 'none',
      },
      'Body 1': {
        fontStyle: 'normal',
        fontFamily: 'Inter',
        fontWeight: 400,
        fontSize: '20px',
        letterSpacing: '0px',
        textDecoration: 'none',
        lineHeight: '26px',
        textTransform: 'none',
      },
      'Body 2': {
        fontStyle: 'normal',
        fontFamily: 'Inter',
        fontWeight: 400,
        fontSize: '16px',
        letterSpacing: '0px',
        textDecoration: 'none',
        lineHeight: '150%',
        textTransform: 'none',
      },
      'Body 3': {
        fontStyle: 'normal',
        fontFamily: 'Inter',
        fontWeight: 400,
        fontSize: '14px',
        letterSpacing: '0px',
        textDecoration: 'none',
        lineHeight: '18px',
        textTransform: 'none',
      },
      'Body 1 Link': {
        fontStyle: 'normal',
        fontFamily: 'Inter',
        fontWeight: 400,
        fontSize: '20px',
        letterSpacing: '0px',
        textDecoration: 'none',
        textTransform: 'none',
      },
      'Body 2 Link': {
        fontStyle: 'normal',
        fontFamily: 'Inter',
        fontWeight: 400,
        fontSize: '16px',
        letterSpacing: '0px',
        textDecoration: 'none',
        lineHeight: '150%',
        textTransform: 'none',
      },
      'Body 3 Link': {
        fontStyle: 'normal',
        fontFamily: 'Inter',
        fontWeight: 400,
        fontSize: '14px',
        letterSpacing: '0px',
        textDecoration: 'none',
        lineHeight: '18px',
        textTransform: 'none',
      },
      Caption: {
        fontStyle: 'normal',
        fontFamily: 'Inter',
        fontWeight: 400,
        fontSize: '12px',
        letterSpacing: '0px',
        textDecoration: 'none',
        lineHeight: '160.0000023841858%',
        textTransform: 'none',
      },
      Overline: {
        fontStyle: 'normal',
        fontFamily: 'Inter',
        fontWeight: 600,
        fontSize: '12px',
        letterSpacing: '0.12px',
        textDecoration: 'none',
        lineHeight: '250%',
        textTransform: 'uppercase',
      },
      'Subtitle 2': {
        fontStyle: 'normal',
        fontFamily: 'Inter',
        fontWeight: 500,
        fontSize: '14px',
        letterSpacing: '0.014000000208616257px',
        textDecoration: 'none',
        lineHeight: '150%',
        textTransform: 'none',
      },
      'Subtitle 1': {
        fontStyle: 'normal',
        fontFamily: 'Inter',
        fontWeight: 400,
        fontSize: '16px',
        letterSpacing: '0.024000000953674317px',
        textDecoration: 'none',
        lineHeight: '175%',
        textTransform: 'none',
      },
    },
    Components: {
      'Alert Title': {
        fontStyle: 'normal',
        fontFamily: 'Inter',
        fontWeight: 500,
        fontSize: '16px',
        letterSpacing: '0px',
        textDecoration: 'none',
        lineHeight: '139.9999976158142%',
        textTransform: 'none',
      },
      'Avatar Initials': {
        fontStyle: 'normal',
        fontFamily: 'Inter',
        fontWeight: 400,
        fontSize: '20px',
        letterSpacing: '-0.1px',
        textDecoration: 'none',
        lineHeight: '20px',
        textTransform: 'none',
      },
      'Badge Label': {
        fontStyle: 'normal',
        fontFamily: 'Inter',
        fontWeight: 500,
        fontSize: '12px',
        letterSpacing: '0px',
        textDecoration: 'none',
        lineHeight: '20px',
        textTransform: 'none',
      },
      'Bottom Navigation Active Label': {
        fontStyle: 'normal',
        fontFamily: 'Inter',
        fontWeight: 400,
        fontSize: '12px',
        letterSpacing: '0px',
        textDecoration: 'none',
        lineHeight: '150%',
        textTransform: 'none',
      },
      'Button Font - Large': {
        fontStyle: 'normal',
        fontFamily: 'Inter',
        fontWeight: 500,
        fontSize: '15px',
        letterSpacing: '0px',
        textDecoration: 'none',
        lineHeight: '26px',
        textTransform: 'uppercase',
      },
      'Button Font - Medium': {
        fontStyle: 'normal',
        fontFamily: 'Inter',
        fontWeight: 500,
        fontSize: '14px',
        letterSpacing: '0px',
        textDecoration: 'none',
        lineHeight: '24px',
        textTransform: 'uppercase',
      },
      'Button Font - Small': {
        fontStyle: 'normal',
        fontFamily: 'Inter',
        fontWeight: 500,
        fontSize: '13px',
        letterSpacing: '0px',
        textDecoration: 'none',
        lineHeight: '22px',
        textTransform: 'uppercase',
      },
      Chip: {
        fontStyle: 'normal',
        fontFamily: 'Inter',
        fontWeight: 400,
        fontSize: '13px',
        letterSpacing: '0.020799999535083772px',
        textDecoration: 'none',
        lineHeight: '18px',
        textTransform: 'none',
      },
      Helper: {
        fontStyle: 'normal',
        fontFamily: 'Inter',
        fontWeight: 400,
        fontSize: '12px',
        letterSpacing: '0px',
        textDecoration: 'none',
        textTransform: 'none',
      },
      'Input Text': {
        fontStyle: 'normal',
        fontFamily: 'Inter',
        fontWeight: 400,
        fontSize: '16px',
        letterSpacing: '0px',
        textDecoration: 'none',
        lineHeight: '24px',
        textTransform: 'none',
      },
      Label: {
        fontStyle: 'normal',
        fontFamily: 'Inter',
        fontWeight: 400,
        fontSize: '12px',
        letterSpacing: '0px',
        textDecoration: 'none',
        textTransform: 'none',
      },
      'List Subheader': {
        fontStyle: 'normal',
        fontFamily: 'Inter',
        fontWeight: 500,
        fontSize: '14px',
        letterSpacing: '0.014000000208616257px',
        textDecoration: 'none',
        lineHeight: '48px',
        textTransform: 'none',
      },
      'Menu Item': {
        fontStyle: 'normal',
        fontFamily: 'Inter',
        fontWeight: 400,
        fontSize: '14px',
        letterSpacing: '0px',
        textDecoration: 'none',
        lineHeight: '139.9999976158142%',
        textTransform: 'none',
      },
      'Menu Item Dense': {
        fontStyle: 'normal',
        fontFamily: 'Inter',
        fontWeight: 400,
        fontSize: '14px',
        letterSpacing: '0.023800000250339508px',
        textDecoration: 'none',
        lineHeight: '24px',
        textTransform: 'none',
      },
      'Table Header': {
        fontStyle: 'normal',
        fontFamily: 'Inter',
        fontWeight: 500,
        fontSize: '14px',
        letterSpacing: '0.023800000250339508px',
        textDecoration: 'none',
        lineHeight: '24px',
        textTransform: 'none',
      },
      Tooltip: {
        fontStyle: 'normal',
        fontFamily: 'Inter',
        fontWeight: 500,
        fontSize: '12px',
        letterSpacing: '0px',
        textDecoration: 'none',
        textTransform: 'none',
      },
    },
  },
  customShadows: {
    buttonShadowPrimary: {
      boxShadow: '0px 3px 5px rgba(107, 104, 255, 0.5)',
    },
    buttonShadowWarning: {
      boxShadow: '0px 3px 5px rgba(208, 132, 43, 1)',
    },
    buttonShadowError: {
      boxShadow: '0px 3px 5px rgba(246, 59, 115, 0.5)',
    },
    buttonShadowInfo: {
      boxShadow: '0px 3px 5px rgba(60, 111, 242, 0.6)',
    },
    buttonShadowSuccess: {
      boxShadow: '0px 3px 5px rgba(18, 157, 32, 0.6)',
    },
    switchShadow: {
      boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.3)',
    },
    cardShadow: {
      boxShadow: '0px 6px 16px rgba(0, 0, 0, 0.17)',
    },
    'Outlined Light': {
      boxShadow: '0px 0px 0px rgba(211, 211, 211, 0.9)',
    },
    'Outlined Dark': {
      boxShadow: '0px 0px 0px rgba(255, 255, 255, 0.3)',
    },
  },
});

const darkQuestTheme = createTheme(
  {
    components: {
      MuiButtonBase: {
        defaultProps: {
          disableRipple: true,
        },
      },
    },
  },
  darkGlobalTheme
);

export default darkQuestTheme;
