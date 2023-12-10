import {
  hexToRGBA,
  mergeDeep
} from "./chunk-YOMPIBXP.mjs";
import {
  __export
} from "./chunk-5VRACIDE.mjs";

// src/primitives/index.ts
var primitives_exports = {};
__export(primitives_exports, {
  PlunkProps: () => PlunkProps,
  colorGuide: () => colorGuide,
  colorPalette: () => colorPalette,
  extend: () => extend,
  fontNameSpaces: () => fontNameSpaces,
  fontOpacity: () => fontOpacity,
  fontVariant: () => fontVariant,
  getButtonColors: () => getButtonColors,
  getButtonConfig: () => getButtonConfig,
  getSpacingConfig: () => getSpacingConfig,
  getTextStyle: () => getTextStyle,
  mainColors: () => mainColors,
  typographyGuide: () => typographyGuide
});

// src/primitives/opacity.ts
var fontOpacity = {
  heading: 0.9,
  subHeading: 0.7,
  bodyText: 0.5,
  bodyTextLighter: 0.3
};

// src/primitives/colors.ts
var mainColors = Object.freeze({
  black: "#0D0D0D",
  white: "#FFFFFF",
  red: "#EE4D37",
  yellow: "#F08D32",
  blue: "#144CC7",
  green: "#06C270"
});
var colorPalette = Object.freeze({
  white: {
    50: "#E0E0E0",
    70: "#EFEFEF",
    90: "#FBFBFB"
  },
  popWhite: {
    100: "#D2D2D2",
    200: "#E0E0E0",
    300: "#EFEFEF",
    400: "#FBFBFB",
    500: "#FFFFFF"
  },
  popBlack: {
    100: "#8A8A8A",
    200: "#3D3D3D",
    300: "#161616",
    400: "#121212",
    500: "#0D0D0D"
  },
  black: {
    50: "#8A8A8A",
    70: "#3D3D3D",
    90: "#161616",
    100: "#121212"
  },
  poliPurple: {
    100: "#E8DFFF",
    200: "#D2C2FF",
    300: "#B49AFF",
    400: "#9772FF",
    500: "#6A35FF",
    600: "#4A25B3",
    700: "#351A80",
    800: "#20104D"
  },
  orangeSunshine: {
    100: "#FFEFE6",
    200: "#FFDBC7",
    300: "#FFC3A2",
    400: "#FFAB7C",
    500: "#FF8744",
    600: "#B35F30",
    700: "#804322",
    800: "#4D2914"
  },
  parkGreen: {
    100: "#DDFFF1",
    200: "#C4FFE6",
    300: "#9DFFD6",
    400: "#76FFC6",
    500: "#3BFFAD",
    600: "#29B379",
    700: "#1E8057",
    800: "#124D34"
  },
  pinkPong: {
    100: "#FFE1E9",
    200: "#FFC6D4",
    300: "#FFA0B7",
    400: "#FF7B9A",
    500: "#FF426F",
    600: "#B32E4E",
    700: "#802138",
    800: "#4D1421"
  },
  mannna: {
    100: "#FFF8E5",
    200: "#FFEFC7",
    300: "#FFE5A2",
    400: "#FFDB7D",
    500: "#FFCB45",
    600: "#B38E30",
    700: "#806623",
    800: "#4D3D15"
  },
  neoPaccha: {
    100: "#FBFFE6",
    200: "#F7FFC6",
    300: "#F2FF9F",
    400: "#EDFE79",
    500: "#E5FE40",
    600: "#A0B22D",
    700: "#727F20",
    800: "#454C13"
  },
  yoyo: {
    100: "#F4E5FF",
    200: "#E5C5FF",
    300: "#D59FFF",
    400: "#C379FF",
    500: "#AA3FFF",
    600: "#772CB3",
    700: "#552080",
    800: "#33134D"
  },
  error: {
    100: "#FCE2DD",
    200: "#F6A69B",
    300: "#F47564",
    400: "#F05E4B",
    500: "#EE4D37"
  },
  warning: {
    100: "#FBDDC2",
    200: "#F8C699",
    300: "#F5AC6A",
    400: "#F29947",
    500: "#F08D32"
  },
  info: {
    100: "#C2D0F2",
    200: "#89A5E3",
    300: "#3F6FD9",
    400: "#2C5ECD",
    500: "#144CC7"
  },
  success: {
    100: "#E6F9F1",
    200: "#83E0B8",
    300: "#4FE3A3",
    400: "#1FC87F",
    500: "#06C270"
  }
});
var getDarkThemedColors = () => ({
  font: {
    heading: hexToRGBA(mainColors.white, fontOpacity.heading),
    subHeading: hexToRGBA(mainColors.white, fontOpacity.subHeading),
    bodyText: hexToRGBA(mainColors.white, fontOpacity.bodyText),
    bodyTextLighter: hexToRGBA(mainColors.white, fontOpacity.bodyTextLighter)
  },
  containerCard: {
    background: colorPalette.black[100],
    stroke: "rgba(255, 255, 255, 0.1)"
  },
  bottomSheet: {},
  toast: {
    success: {
      background: mainColors.green,
      color: "#F8F8F8"
    },
    warning: {
      background: mainColors.yellow,
      color: "#F8F8F8"
    },
    error: {
      background: mainColors.red,
      color: "#F8F8F8"
    }
  },
  searchBar: {
    border: colorPalette.black[70],
    activeBorder: mainColors.white,
    backgroundColor: colorPalette.popBlack[400],
    closeIcon: colorPalette.popWhite[100]
  },
  tags: {
    warning: {
      background: mainColors.yellow,
      color: colorPalette.white[90]
    },
    error: {
      background: mainColors.red,
      color: colorPalette.white[90]
    },
    success: {
      background: mainColors.green,
      color: colorPalette.white[90]
    },
    info: {
      background: mainColors.blue,
      color: colorPalette.white[90]
    }
  },
  checkbox: {
    background: mainColors.black,
    border: mainColors.white,
    leftPlunk: colorPalette.black[50],
    topPlunk: colorPalette.black[70]
  },
  inputFields: {
    textColor: hexToRGBA(mainColors.white, fontOpacity.heading),
    labelColor: hexToRGBA(mainColors.white, fontOpacity.bodyText),
    caretColor: mainColors.blue,
    errorColor: mainColors.red,
    placeholderColor: hexToRGBA(mainColors.white, 0.3)
  },
  toggle: {
    on: {
      switchBackground: "#B4EDD4",
      switchBorder: mainColors.white,
      buttonBackground: "#38B36F",
      buttonBorder: "#B4EDD4",
      buttonMarkBackground: mainColors.white
    },
    off: {
      switchBackground: "#0A0A0A",
      switchBorder: mainColors.white,
      buttonBackground: mainColors.white,
      buttonBorder: "#0A0A0A",
      buttonMarkBackground: colorPalette.white[50]
    }
  },
  radio: {
    background: mainColors.black,
    border: mainColors.white,
    plunk: colorPalette.black[50],
    dotBackground: mainColors.black,
    containerConfig: {
      color: mainColors.white,
      backgroundColor: colorPalette.black[100],
      borderColor: hexToRGBA(mainColors.white, 0.1),
      activeBackgroundColor: colorPalette.poliPurple[500],
      activeBorderColor: "#2C5ECD"
    }
  },
  dropdown: {
    withLabel: {
      text: hexToRGBA(mainColors.white, 0.5),
      border: hexToRGBA(mainColors.white, 0.1),
      chevron: hexToRGBA(mainColors.white, 0.5)
    },
    withoutLabel: {
      text: hexToRGBA(mainColors.white, 0.5),
      border: mainColors.white,
      chevron: mainColors.white
    }
  },
  scoremeter: {
    meterStrokeColor: {
      excellent: mainColors.green,
      average: colorPalette.neoPaccha[400],
      poor: colorPalette.warning[400]
    },
    meterStrokeBackground: mainColors.black,
    meterBorderColor: colorPalette.popBlack[200],
    dotColor: "",
    indicatorColors: {
      neutral: "#E2E2E2",
      increment: "#5CDDBE",
      decrement: "#FFB098"
    },
    scoreContainerBackground: colorPalette.popBlack[300],
    scoreContainerBorder: mainColors.black,
    scoreColor: mainColors.white
  },
  buttons: {
    primary: {
      backgroundColor: mainColors.black,
      color: mainColors.white,
      edgeColors: {
        bottom: colorPalette.black[70],
        right: colorPalette.black[50],
        top: colorPalette.popBlack[200],
        left: colorPalette.popBlack[100]
      },
      disabledColors: {
        backgroundColor: colorPalette.black[50],
        color: hexToRGBA(mainColors.white, 0.5),
        edgeColors: {
          top: "transparent",
          left: "transparent",
          right: colorPalette.white[70],
          bottom: colorPalette.white[50]
        }
      }
    },
    secondary: {
      backgroundColor: mainColors.white,
      color: mainColors.black,
      borderColor: mainColors.black,
      edgeColors: {
        bottom: colorPalette.black[50],
        right: colorPalette.white[50],
        left: colorPalette.white[50],
        top: "#C7C7C7"
      },
      disabledColors: {
        backgroundColor: mainColors.white,
        color: hexToRGBA(mainColors.black, 0.3),
        borderColor: hexToRGBA(mainColors.black, 0.3),
        edgeColors: {
          top: "transparent",
          left: "transparent",
          right: "transparent",
          bottom: "transparent"
        }
      }
    }
  }
});
var getLightThemedColors = () => ({
  font: {
    heading: hexToRGBA(mainColors.black, fontOpacity.heading),
    subHeading: hexToRGBA(mainColors.black, fontOpacity.subHeading),
    bodyText: hexToRGBA(mainColors.black, fontOpacity.bodyText),
    bodyTextLighter: hexToRGBA(mainColors.black, fontOpacity.bodyTextLighter)
  },
  containerCard: {
    background: colorPalette.black[100],
    stroke: "rgba(255, 255, 255, 0.1)"
  },
  searchBar: {
    border: colorPalette.white[50],
    activeBorder: mainColors.black,
    backgroundColor: mainColors.white,
    closeIcon: colorPalette.white[50]
  },
  bottomSheet: {},
  toast: {
    success: {
      background: mainColors.green,
      color: "#F8F8F8"
    },
    warning: {
      background: mainColors.yellow,
      color: "#F8F8F8"
    },
    error: {
      background: mainColors.red,
      color: "#F8F8F8"
    }
  },
  dropdown: {
    withLabel: {
      text: hexToRGBA(mainColors.black, 0.5),
      border: hexToRGBA(mainColors.black, 0.1),
      chevron: hexToRGBA(mainColors.black, 0.5)
    },
    withoutLabel: {
      text: hexToRGBA(mainColors.black, 0.5),
      border: mainColors.black,
      chevron: mainColors.black
    }
  },
  scoremeter: {
    meterStrokeColor: {
      excellent: mainColors.green,
      average: colorPalette.neoPaccha[400],
      poor: colorPalette.warning[400]
    },
    meterStrokeBackground: "transparent",
    meterBorderColor: colorPalette.popWhite[200],
    dotColor: colorPalette.popBlack[300],
    indicatorColors: {
      neutral: "#E2E2E2",
      increment: "#5CDDBE",
      decrement: "#FFB098"
    },
    scoreContainerBackground: colorPalette.popWhite[300],
    scoreContainerBorder: colorPalette.popWhite[400],
    scoreColor: mainColors.black
  },
  tags: {
    warning: {
      background: "#FEF4EB",
      color: mainColors.yellow
    },
    error: {
      background: "#FDEDEB",
      color: mainColors.red
    },
    success: {
      background: "#E6F9F1",
      color: mainColors.green
    },
    info: {
      background: "#EBF1FE",
      color: mainColors.blue
    }
  },
  checkbox: {
    background: mainColors.white,
    border: mainColors.black,
    leftPlunk: colorPalette.black[50],
    topPlunk: colorPalette.white[50]
  },
  inputFields: {
    textColor: hexToRGBA(mainColors.black, fontOpacity.heading),
    labelColor: hexToRGBA(mainColors.black, fontOpacity.bodyText),
    caretColor: mainColors.blue,
    errorColor: mainColors.red,
    placeholderColor: hexToRGBA(mainColors.black, 0.3)
  },
  buttons: {
    primary: {
      backgroundColor: mainColors.white,
      color: mainColors.black,
      edgeColors: {
        bottom: colorPalette.black[50],
        right: colorPalette.white[50],
        top: colorPalette.popBlack[200],
        left: colorPalette.popBlack[100]
      },
      disabledColors: {
        backgroundColor: colorPalette.popBlack[100],
        color: hexToRGBA(mainColors.white, 0.5),
        edgeColors: {
          top: "transparent",
          left: "transparent",
          right: "#B6B6B6",
          bottom: colorPalette.popBlack[200]
        }
      }
    },
    secondary: {
      backgroundColor: mainColors.black,
      color: mainColors.white,
      borderColor: mainColors.white,
      edgeColors: {
        bottom: colorPalette.black[50],
        top: "#262626",
        right: colorPalette.white[50],
        left: "#404040"
      },
      disabledColors: {
        backgroundColor: mainColors.black,
        color: hexToRGBA(mainColors.white, 0.3),
        borderColor: hexToRGBA(mainColors.white, 0.3),
        edgeColors: {
          top: "transparent",
          left: "transparent",
          right: "transparent",
          bottom: "transparent"
        }
      }
    }
  },
  toggle: {
    on: {
      switchBackground: "#CAFFE2",
      switchBorder: "#0A0A0A",
      buttonBackground: "#38B36F",
      buttonBorder: "#F7F7F7",
      buttonMarkBackground: mainColors.white
    },
    off: {
      switchBackground: mainColors.white,
      switchBorder: "#0A0A0A",
      buttonBackground: colorPalette.white[50],
      buttonBorder: mainColors.white,
      buttonMarkBackground: mainColors.white
    }
  },
  radio: {
    background: mainColors.white,
    border: mainColors.black,
    plunk: colorPalette.black[50],
    dotBackground: mainColors.white,
    containerConfig: {
      color: mainColors.black,
      backgroundColor: colorPalette.black[100],
      borderColor: hexToRGBA(mainColors.white, 0.1),
      activeBackgroundColor: colorPalette.poliPurple[500],
      activeBorderColor: "#2C5ECD"
    }
  }
});
var getColorGuide = () => ({
  mainAppBackground: mainColors.black,
  darkComponents: getDarkThemedColors(),
  lightComponents: getLightThemedColors()
});
var colorGuide = getColorGuide();
var extend = (themeOverwrite) => {
  const {
    mainColors: userMainColors = {},
    colorGuide: userColorGuide = {},
    colorPalette: userColorPalette = {}
  } = themeOverwrite;
  mainColors = Object.freeze(mergeDeep({}, mainColors, userMainColors));
  colorPalette = Object.freeze(mergeDeep({}, colorPalette, userColorPalette));
  colorGuide = Object.freeze(mergeDeep({}, getColorGuide(), userColorGuide));
};

// src/primitives/typography.ts
var fontNameSpaces = {
  ...[44, 34, 28, 22, 20, 18, 16, 15, 14, 13].reduce((acc, fontSize) => ({
    ...acc,
    [`th${fontSize}eb`]: {
      fontType: "heading",
      fontSize,
      fontWeight: "800" /* EXTRA_BOLD */
    }
  }), {}),
  ...[34, 28, 22, 20, 18, 16, 14, 13, 11].reduce((acc, fontSize) => ({
    ...acc,
    [`th${fontSize}b`]: {
      fontType: "heading",
      fontSize,
      fontWeight: "700" /* BOLD */
    }
  }), {}),
  ...[22, 20, 18, 16, 14, 13, 12, 10].reduce((acc, fontSize) => ({
    ...acc,
    [`th${fontSize}sb`]: {
      fontType: "heading",
      fontSize,
      fontWeight: "600" /* SEMI_BOLD */
    }
  }), {}),
  ...[16, 15, 14, 13, 12, 11].reduce((acc, fontSize) => ({
    ...acc,
    [`tb${fontSize}m`]: {
      fontType: "body",
      fontSize,
      fontWeight: "500" /* MEDIUM */
    }
  }), {}),
  ...[16, 15, 14, 13, 12, 11].reduce((acc, fontSize) => ({
    ...acc,
    [`tb${fontSize}r`]: {
      fontType: "body",
      fontSize,
      fontWeight: "400" /* REGULAR */
    }
  }), {}),
  tc12eb: {
    fontType: "caps",
    fontSize: 12,
    fontWeight: "800" /* EXTRA_BOLD */
  },
  tc10eb: {
    fontType: "caps",
    fontSize: 10,
    fontWeight: "800" /* EXTRA_BOLD */
  },
  tc12b: {
    fontType: "caps",
    fontSize: 12,
    fontWeight: "700" /* BOLD */
  },
  tc10b: {
    fontType: "caps",
    fontSize: 10,
    fontWeight: "700" /* BOLD */
  },
  tc8b: {
    fontType: "caps",
    fontSize: 8,
    fontWeight: "700" /* BOLD */
  },
  tc12sb: {
    fontType: "caps",
    fontSize: 12,
    fontWeight: "600" /* SEMI_BOLD */
  },
  tc10sb: {
    fontType: "caps",
    fontSize: 10,
    fontWeight: "600" /* SEMI_BOLD */
  },
  ...[36, 34, 32, 24, 22, 20, 18].reduce((acc, fontSize) => ({
    ...acc,
    [`tsh${fontSize}b`]: {
      fontType: "serif-heading",
      fontSize,
      fontWeight: "700" /* BOLD */
    }
  }), {})
};
var fontVariant = {
  HeadingExtraBold44: {
    fontType: "heading",
    fontSize: 44,
    fontWeight: "800" /* EXTRA_BOLD */
  },
  HeadingExtraBold34: {
    fontType: "heading",
    fontSize: 34,
    fontWeight: "800" /* EXTRA_BOLD */
  },
  HeadingExtraBold28: {
    fontType: "heading",
    fontSize: 28,
    fontWeight: "800" /* EXTRA_BOLD */
  },
  HeadingExtraBold22: {
    fontType: "heading",
    fontSize: 22,
    fontWeight: "800" /* EXTRA_BOLD */
  },
  HeadingExtraBold20: {
    fontType: "heading",
    fontSize: 20,
    fontWeight: "800" /* EXTRA_BOLD */
  },
  HeadingExtraBold18: {
    fontType: "heading",
    fontSize: 18,
    fontWeight: "800" /* EXTRA_BOLD */
  },
  HeadingExtraBold16: {
    fontType: "heading",
    fontSize: 16,
    fontWeight: "800" /* EXTRA_BOLD */
  },
  HeadingExtraBold15: {
    fontType: "heading",
    fontSize: 15,
    fontWeight: "800" /* EXTRA_BOLD */
  },
  HeadingExtraBold14: {
    fontType: "heading",
    fontSize: 14,
    fontWeight: "800" /* EXTRA_BOLD */
  },
  HeadingExtraBold13: {
    fontType: "heading",
    fontSize: 13,
    fontWeight: "800" /* EXTRA_BOLD */
  },
  HeadingBold34: {
    fontType: "heading",
    fontSize: 34,
    fontWeight: "700" /* BOLD */
  },
  HeadingBold28: {
    fontType: "heading",
    fontSize: 28,
    fontWeight: "700" /* BOLD */
  },
  HeadingBold22: {
    fontType: "heading",
    fontSize: 22,
    fontWeight: "700" /* BOLD */
  },
  HeadingBold20: {
    fontType: "heading",
    fontSize: 20,
    fontWeight: "700" /* BOLD */
  },
  HeadingBold18: {
    fontType: "heading",
    fontSize: 18,
    fontWeight: "700" /* BOLD */
  },
  HeadingBold16: {
    fontType: "heading",
    fontSize: 16,
    fontWeight: "700" /* BOLD */
  },
  HeadingBold14: {
    fontType: "heading",
    fontSize: 14,
    fontWeight: "700" /* BOLD */
  },
  HeadingBold13: {
    fontType: "heading",
    fontSize: 13,
    fontWeight: "700" /* BOLD */
  },
  HeadingBold11: {
    fontType: "heading",
    fontSize: 11,
    fontWeight: "700" /* BOLD */
  },
  HeadingSemiBold22: {
    fontType: "heading",
    fontSize: 22,
    fontWeight: "600" /* SEMI_BOLD */
  },
  HeadingSemiBold20: {
    fontType: "heading",
    fontSize: 20,
    fontWeight: "600" /* SEMI_BOLD */
  },
  HeadingSemiBold18: {
    fontType: "heading",
    fontSize: 18,
    fontWeight: "600" /* SEMI_BOLD */
  },
  HeadingSemiBold16: {
    fontType: "heading",
    fontSize: 16,
    fontWeight: "600" /* SEMI_BOLD */
  },
  HeadingSemiBold14: {
    fontType: "heading",
    fontSize: 14,
    fontWeight: "600" /* SEMI_BOLD */
  },
  HeadingSemiBold13: {
    fontType: "heading",
    fontSize: 13,
    fontWeight: "600" /* SEMI_BOLD */
  },
  HeadingSemiBold12: {
    fontType: "heading",
    fontSize: 12,
    fontWeight: "600" /* SEMI_BOLD */
  },
  HeadingSemiBold10: {
    fontType: "heading",
    fontSize: 10,
    fontWeight: "600" /* SEMI_BOLD */
  },
  BodyMedium16: {
    fontType: "body",
    fontSize: 16,
    fontWeight: "500" /* MEDIUM */
  },
  BodyMedium15: {
    fontType: "body",
    fontSize: 15,
    fontWeight: "500" /* MEDIUM */
  },
  BodyMedium14: {
    fontType: "body",
    fontSize: 14,
    fontWeight: "500" /* MEDIUM */
  },
  BodyMedium13: {
    fontType: "body",
    fontSize: 13,
    fontWeight: "500" /* MEDIUM */
  },
  BodyMedium12: {
    fontType: "body",
    fontSize: 12,
    fontWeight: "500" /* MEDIUM */
  },
  BodyMedium11: {
    fontType: "body",
    fontSize: 11,
    fontWeight: "500" /* MEDIUM */
  },
  BodyRegular16: {
    fontType: "body",
    fontSize: 16,
    fontWeight: "400" /* REGULAR */
  },
  BodyRegular15: {
    fontType: "body",
    fontSize: 15,
    fontWeight: "400" /* REGULAR */
  },
  BodyRegular14: {
    fontType: "body",
    fontSize: 14,
    fontWeight: "400" /* REGULAR */
  },
  BodyRegular13: {
    fontType: "body",
    fontSize: 13,
    fontWeight: "400" /* REGULAR */
  },
  BodyRegular12: {
    fontType: "body",
    fontSize: 12,
    fontWeight: "400" /* REGULAR */
  },
  BodyRegular11: {
    fontType: "body",
    fontSize: 11,
    fontWeight: "400" /* REGULAR */
  },
  CapsExtraBold12: {
    fontType: "caps",
    fontSize: 12,
    fontWeight: "800" /* EXTRA_BOLD */
  },
  CapsExtraBold10: {
    fontType: "caps",
    fontSize: 10,
    fontWeight: "800" /* EXTRA_BOLD */
  },
  CapsBold12: {
    fontType: "caps",
    fontSize: 12,
    fontWeight: "700" /* BOLD */
  },
  CapsBold10: {
    fontType: "caps",
    fontSize: 10,
    fontWeight: "700" /* BOLD */
  },
  CapsBold8: {
    fontType: "caps",
    fontSize: 8,
    fontWeight: "700" /* BOLD */
  },
  CapsSemiBold12: {
    fontType: "caps",
    fontSize: 12,
    fontWeight: "600" /* SEMI_BOLD */
  },
  CapsSemiBold10: {
    fontType: "caps",
    fontSize: 10,
    fontWeight: "600" /* SEMI_BOLD */
  },
  CirkaHeadingBold36: {
    fontType: "serif-heading",
    fontSize: 36,
    fontWeight: "700" /* BOLD */
  },
  CirkaHeadingBold34: {
    fontType: "serif-heading",
    fontSize: 34,
    fontWeight: "700" /* BOLD */
  },
  CirkaHeadingBold32: {
    fontType: "serif-heading",
    fontSize: 32,
    fontWeight: "700" /* BOLD */
  },
  CirkaHeadingBold24: {
    fontType: "serif-heading",
    fontSize: 24,
    fontWeight: "700" /* BOLD */
  },
  CirkaHeadingBold22: {
    fontType: "serif-heading",
    fontSize: 22,
    fontWeight: "700" /* BOLD */
  },
  CirkaHeadingBold20: {
    fontType: "serif-heading",
    fontSize: 20,
    fontWeight: "700" /* BOLD */
  },
  CirkaHeadingBold18: {
    fontType: "serif-heading",
    fontSize: 18,
    fontWeight: "700" /* BOLD */
  }
};
var typographyGuide = {
  back: {
    heading: fontVariant.HeadingSemiBold14
  },
  header: {
    heading: fontVariant.CirkaHeadingBold24,
    description: fontVariant.BodyMedium14
  },
  containerCard: {
    heading: fontVariant.HeadingBold14,
    description: fontVariant.BodyMedium13
  },
  bottomSheet: {},
  tags: {
    containerText: fontVariant.CapsBold8,
    noContainerText: fontVariant.CapsBold10
  },
  searchBar: {
    input: fontVariant.HeadingSemiBold13
  },
  buttons: {
    big: fontVariant.HeadingBold14,
    medium: fontVariant.HeadingBold13,
    small: fontVariant.HeadingBold11
  },
  checkbox: {},
  toast: {
    heading: fontVariant.HeadingSemiBold13,
    description: fontVariant.BodyRegular11
  },
  inputFields: {
    label: fontVariant.CapsBold8,
    text: fontVariant.HeadingBold22
  }
};

// src/primitives/buttons.ts
var getButtonColors = (mode, variant, kind) => {
  const colors = mode === "dark" ? colorGuide.darkComponents.buttons : colorGuide.lightComponents.buttons;
  const transparentEdge = kind === "elevated" ? {
    top: "transparent",
    left: "transparent"
  } : {};
  return variant === "primary" ? {
    ...colors.primary,
    mode,
    edgeColors: { ...colors.primary.edgeColors, ...transparentEdge }
  } : {
    ...colors.secondary,
    mode,
    edgeColors: { ...colors.secondary.edgeColors, ...transparentEdge }
  };
};
var getSize = (number) => {
  switch (number) {
    case "50":
      return "big";
    case "40":
      return "medium";
    case "30":
      return "small";
    default:
      return "medium";
  }
};
var getSpacingConfig = (size) => {
  switch (size) {
    case "big":
      return {
        height: 50,
        iconHeight: 20,
        paddingHorizontal: 30,
        paddingVertical: 0
      };
    case "medium":
      return {
        height: 40,
        iconHeight: 16,
        paddingHorizontal: 20,
        paddingVertical: 0
      };
    case "small":
      return {
        height: 30,
        iconHeight: 14,
        paddingHorizontal: 25,
        paddingVertical: 0
      };
    default:
      return {
        height: 40,
        iconHeight: 16,
        paddingHorizontal: 20,
        paddingVertical: 0
      };
  }
};
var getTextStyle = (size) => {
  switch (size) {
    case "big":
      return typographyGuide.buttons.big;
    case "medium":
      return typographyGuide.buttons.medium;
    case "small":
      return typographyGuide.buttons.small;
    default:
      return typographyGuide.buttons.medium;
  }
};
var getButtonConfig = (name) => {
  const colorMode = name.slice(1, 2) === "l" ? "light" : "dark";
  const variant = name.slice(2, 3) === "s" ? "secondary" : "primary";
  const size = name.slice(3, 5);
  const kind = name.slice(5, 6) === "p" ? "elevated" : "flat";
  const arrow = name.slice(6, 7);
  return {
    colorConfig: getButtonColors(colorMode, variant, kind),
    spacingConfig: getSpacingConfig(getSize(size)),
    colorMode,
    size: getSize(size),
    kind,
    variant,
    showArrow: Boolean(Number(arrow))
  };
};

// src/primitives/index.ts
var PlunkProps = /* @__PURE__ */ ((PlunkProps2) => {
  PlunkProps2[PlunkProps2["WIDTH"] = 3] = "WIDTH";
  PlunkProps2[PlunkProps2["ANGLE"] = 45] = "ANGLE";
  return PlunkProps2;
})(PlunkProps || {});

export {
  fontOpacity,
  mainColors,
  colorPalette,
  colorGuide,
  extend,
  fontNameSpaces,
  fontVariant,
  typographyGuide,
  getButtonColors,
  getSpacingConfig,
  getTextStyle,
  getButtonConfig,
  PlunkProps,
  primitives_exports
};
//# sourceMappingURL=chunk-JXA5O32Y.mjs.map