"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/components/index.ts
var components_exports = {};
__export(components_exports, {
  Back: () => Back_default,
  Button: () => Button_default,
  Checkbox: () => Checkbox_default,
  Chevron: () => Chevron,
  Column: () => Column,
  Cross: () => Cross,
  ElevatedCard: () => ElevatedCard_default,
  Header: () => Header_default,
  HorizontalDivider: () => HorizontalDivider,
  HorizontalSpacer: () => HorizontalSpacer,
  InputField: () => InputField_default,
  PageContainer: () => PageContainer,
  Pointer: () => Pointer,
  Row: () => Row,
  SearchBar: () => SearchBar_default,
  Tag: () => Tag_default,
  Typography: () => Typography_default,
  VerticalSpacer: () => VerticalSpacer
});
module.exports = __toCommonJS(components_exports);

// src/components/Back/index.tsx
var React4 = __toESM(require("react"));
var import_react_native5 = require("react-native");
var import_react_native_svg2 = __toESM(require("react-native-svg"));

// src/utils/index.ts
var import_react_native = require("react-native");
var hexToRGBA = (hex, alpha) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return alpha ? `rgba(${r}, ${g}, ${b}, ${alpha})` : `rgb(${r}, ${g}, ${b})`;
};
var isEmpty = (value) => {
  var _a, _b, _c;
  return value == null || typeof value === "string" && value.trim() === "" || Array.isArray(value) && value.length === 0 || ((_a = value == null ? void 0 : value.constructor) == null ? void 0 : _a.name) === "Object" && Object.keys(value).length === 0 || (((_b = value == null ? void 0 : value.constructor) == null ? void 0 : _b.name) === "Map" || ((_c = value == null ? void 0 : value.constructor) == null ? void 0 : _c.name) === "Set") && value.size === 0;
};
var getTransform = (transforms) => transforms.filter((transform) => !("translateZ" in transform) || import_react_native.Platform.OS === "web");
var generateTextStyle = (fontType = "body", fontSize = 14, fontWeight = "400" /* REGULAR */, color = "#FFFFFF") => {
  const LINE_HEIGHT_MULTIPLIER = {
    heading: 1.25,
    caps: 1.25,
    body: 1.5,
    "serif-heading": 1.25
  };
  const getLetterSpacing = (fType, fSize, fWeight) => {
    switch (fType) {
      case "heading":
        switch (fWeight) {
          case "800" /* EXTRA_BOLD */:
            return fSize >= 44 ? 0 : 0.2;
          case "700" /* BOLD */:
            return fSize >= 13 ? 0.2 : 0.4;
          case "600" /* SEMI_BOLD */:
            return fSize >= 18 ? 0.2 : 0.4;
          default:
            return 0.2;
        }
      case "caps":
        return fSize > 8 ? 2 : 1;
      case "body":
        return 0.4;
      case "serif-heading":
        return 0.2;
      default:
        return 0.4;
    }
  };
  const letterSpacing = getLetterSpacing(fontType, fontSize, fontWeight);
  return {
    color,
    fontSize,
    fontStyle: "normal",
    fontWeight,
    letterSpacing,
    lineHeight: Math.round(fontSize * LINE_HEIGHT_MULTIPLIER[fontType]),
    ...fontType === "caps" && {
      textTransform: "uppercase"
    }
  };
};

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

// src/components/Helpers/index.tsx
var React = __toESM(require("react"));
var import_react_native2 = require("react-native");
var import_react_native_svg = __toESM(require("react-native-svg"));
var Row = React.forwardRef(({ h, style, v, ...props }, ref) => /* @__PURE__ */ React.createElement(import_react_native2.View, {
  ref,
  style: [
    {
      flexDirection: "row",
      ...h === "center" && {
        alignItems: "center"
      },
      ...v === "center" && {
        justifyContent: "center"
      },
      ...v === "justify" && {
        justifyContent: "space-between"
      }
    },
    style
  ],
  ...props
}));
var Column = React.forwardRef(({ h, style, v, ...props }, ref) => /* @__PURE__ */ React.createElement(import_react_native2.View, {
  ref,
  style: [
    {
      flexDirection: "column",
      ...v === "center" && {
        alignItems: "center"
      },
      ...h === "center" && {
        justifyContent: "center"
      }
    },
    style
  ],
  ...props
}));
var PageContainer = React.forwardRef(({ style, ...props }, ref) => /* @__PURE__ */ React.createElement(import_react_native2.SafeAreaView, {
  ref,
  style: [
    {
      backgroundColor: mainColors.black,
      paddingLeft: 30,
      paddingRight: 15,
      paddingTop: 0,
      ...import_react_native2.Platform.OS === "web" && {
        width: "100vw"
      }
    },
    style
  ],
  ...props
}));
var HorizontalDivider = ({ color }) => /* @__PURE__ */ React.createElement(import_react_native2.View, {
  style: {
    backgroundColor: color ?? hexToRGBA(mainColors.white, 0.1),
    height: 1,
    margin: 0,
    position: "relative",
    width: "100%"
  }
});
var HorizontalSpacer = ({ n }) => /* @__PURE__ */ React.createElement(import_react_native2.View, {
  style: { marginBottom: n * 5 }
});
var VerticalSpacer = ({ n }) => /* @__PURE__ */ React.createElement(import_react_native2.View, {
  style: { marginRight: n * 5 }
});
var rotateDegrees = {
  north: "-90deg",
  south: "90deg",
  east: "0deg",
  west: "180deg"
};
var Chevron = ({
  color = mainColors.white,
  direction = "east",
  style
}) => /* @__PURE__ */ React.createElement(import_react_native_svg.default, {
  style: [{ transform: [{ rotate: rotateDegrees[direction] }] }, style],
  width: 8,
  height: 11,
  viewBox: "0 0 8 11",
  fill: "none"
}, /* @__PURE__ */ React.createElement(import_react_native_svg.Path, {
  d: "M2 9.5L6 5.5L2 1.5",
  stroke: color,
  strokeWidth: 1.5,
  strokeLinecap: "square"
}));
var Pointer = ({
  color = mainColors.white,
  direction = "east",
  size = "medium",
  style
}) => size === "small" ? /* @__PURE__ */ React.createElement(import_react_native_svg.default, {
  style: [{ transform: [{ rotate: rotateDegrees[direction] }] }, style],
  width: 13,
  height: 9,
  viewBox: "0 0 13 9",
  fill: "none"
}, /* @__PURE__ */ React.createElement(import_react_native_svg.Path, {
  d: "M1 3.74996H0.25V5.24996H1V3.74996ZM1 5.24996H11.9997V3.74996H1V5.24996ZM8.37874 0.5C8.37874 3.09998 10.4246 5.25 12.9997 5.25V3.75C11.299 3.75 9.87874 2.31829 9.87874 0.5L8.37874 0.5ZM12.9997 3.75C10.4246 3.75 8.37865 5.89999 8.37865 8.5H9.87865C9.87865 6.68173 11.299 5.25 12.9997 5.25V3.75Z",
  fill: color
})) : /* @__PURE__ */ React.createElement(import_react_native_svg.default, {
  style: [{ transform: [{ rotate: rotateDegrees[direction] }] }, style],
  width: 21,
  height: 9,
  viewBox: "0 0 21 9",
  fill: "none"
}, /* @__PURE__ */ React.createElement(import_react_native_svg.Path, {
  d: "M1 3.74996H0.25L0.25 5.24996L1 5.24996L1 3.74996ZM1 5.24996L20 5.24996V3.74996L1 3.74996L1 5.24996ZM16.379 0.5C16.379 3.09998 18.4249 5.25 21 5.25V3.75C19.2993 3.75 17.879 2.3183 17.879 0.5L16.379 0.5ZM21 3.75C18.4249 3.75 16.3789 5.89999 16.3789 8.5H17.8789C17.8789 6.68172 19.2993 5.25 21 5.25V3.75Z",
  fill: color
}));
var Cross = ({ color = mainColors.white, onPress }) => /* @__PURE__ */ React.createElement(import_react_native_svg.default, {
  width: 12,
  height: 12,
  viewBox: "0 0 12 12",
  fill: "none",
  onPress
}, /* @__PURE__ */ React.createElement(import_react_native_svg.Path, {
  d: "M2 10L6 6L2 2",
  stroke: color,
  strokeWidth: 1.5,
  strokeLinecap: "square"
}), /* @__PURE__ */ React.createElement(import_react_native_svg.Path, {
  d: "M10 10L6 6L10 2",
  stroke: color,
  strokeWidth: 1.5,
  strokeLinecap: "square"
}));

// src/components/Typography/index.tsx
var React3 = __toESM(require("react"));
var import_react_native4 = require("react-native");

// src/components/Typography/styles.ts
var React2 = __toESM(require("react"));
var import_react_native3 = require("react-native");
var useStyles = ({
  color,
  fontSize,
  fontType,
  fontWeight,
  lineClamp,
  overflow
}) => React2.useMemo(() => import_react_native3.StyleSheet.create({
  typographyWrapper: {
    ...generateTextStyle(fontType, fontSize, fontWeight, color),
    ...import_react_native3.Platform.OS === "web" && (overflow && lineClamp ? {
      WebkitBoxOrient: "vertical",
      display: "-webkit-box",
      whiteSpace: "break-spaces"
    } : {
      display: "block"
    })
  },
  paragraphWrapper: {
    ...generateTextStyle(fontType, fontSize, fontWeight, color),
    ...import_react_native3.Platform.OS === "web" && (overflow && lineClamp ? {
      WebkitBoxOrient: "vertical",
      display: "-webkit-box",
      whiteSpace: "break-spaces"
    } : {
      display: "block"
    })
  },
  spanWrapper: {
    ...generateTextStyle(fontType, fontSize, fontWeight, color),
    ...import_react_native3.Platform.OS === "web" && overflow && lineClamp && {
      WebkitBoxOrient: "vertical",
      display: "-webkit-box",
      whiteSpace: "break-spaces"
    }
  }
}), [color, fontSize, fontType, fontWeight, lineClamp, overflow]);
var styles_default = useStyles;

// src/components/Typography/index.tsx
var Typography = ({
  as,
  children,
  color,
  fontSize,
  fontType,
  fontWeight,
  lineClamp,
  overflow,
  style,
  ...props
}) => {
  const styles = styles_default({ color, fontSize, fontType, fontWeight, lineClamp, overflow });
  switch (as) {
    case "p":
      return /* @__PURE__ */ React3.createElement(import_react_native4.Text, {
        ellipsizeMode: overflow === "ellipsis" ? "tail" : overflow,
        numberOfLines: overflow && (lineClamp ?? 1),
        style: [
          styles.paragraphWrapper,
          {
            fontFamily: fontType === "serif-heading" ? "serif" : "sans-serif"
          },
          style
        ],
        ...props
      }, children);
    case "span":
      return /* @__PURE__ */ React3.createElement(import_react_native4.Text, {
        ellipsizeMode: overflow === "ellipsis" ? "tail" : overflow,
        numberOfLines: overflow && (lineClamp ?? 1),
        style: [
          styles.spanWrapper,
          {
            fontFamily: fontType === "serif-heading" ? "serif" : "sans-serif"
          },
          style
        ],
        ...props
      }, children);
    default:
      return /* @__PURE__ */ React3.createElement(import_react_native4.Text, {
        ellipsizeMode: overflow === "ellipsis" ? "tail" : overflow,
        numberOfLines: overflow && (lineClamp ?? 1),
        style: [
          styles.typographyWrapper,
          {
            fontFamily: fontType === "serif-heading" ? "serif" : "sans-serif"
          },
          style
        ],
        ...props
      }, children);
  }
};
var Typography_default = Typography;

// src/components/Back/index.tsx
var Back = ({
  color,
  heading,
  onPress,
  rightElement,
  textStyle = typographyGuide.back.heading
}) => /* @__PURE__ */ React4.createElement(Row, {
  h: "center",
  style: { paddingHorizontal: 0, paddingVertical: 12 }
}, /* @__PURE__ */ React4.createElement(Row, {
  h: "center"
}, /* @__PURE__ */ React4.createElement(import_react_native5.TouchableWithoutFeedback, {
  onPress
}, /* @__PURE__ */ React4.createElement(Row, {
  h: "center",
  style: { height: 36 }
}, /* @__PURE__ */ React4.createElement(import_react_native_svg2.default, {
  width: 32,
  height: 12,
  viewBox: "0 0 32 12",
  fill: "none"
}, /* @__PURE__ */ React4.createElement(import_react_native_svg2.Path, {
  d: "M31 6L0.999999 6",
  stroke: color ?? mainColors.white,
  strokeWidth: 1.5,
  strokeLinecap: "square",
  strokeLinejoin: "round"
}), /* @__PURE__ */ React4.createElement(import_react_native_svg2.Path, {
  d: "M7 12C7 8.68629 4.31371 6 1 6",
  stroke: color ?? mainColors.white,
  strokeWidth: 1.5
}), /* @__PURE__ */ React4.createElement(import_react_native_svg2.Path, {
  d: "M1 6C4.31371 6 7 3.31371 7 0",
  stroke: color ?? mainColors.white,
  strokeWidth: 1.5
})))), /* @__PURE__ */ React4.createElement(VerticalSpacer, {
  n: 4
}), heading && /* @__PURE__ */ React4.createElement(Typography_default, {
  ...textStyle,
  color: color ?? mainColors.white
}, heading)), /* @__PURE__ */ React4.createElement(import_react_native5.View, {
  style: { marginLeft: "auto" }
}, rightElement ?? null));
var Back_default = Back;

// src/components/Button/index.tsx
var React10 = __toESM(require("react"));

// src/components/Button/components/ElevatedButton.tsx
var React7 = __toESM(require("react"));
var import_react_native7 = require("react-native");

// src/hooks/useLayout.ts
var React5 = __toESM(require("react"));
var useLayout = () => {
  const [layout, setLayout] = React5.useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0
  });
  const handleLayout = React5.useCallback((event) => setLayout(event.nativeEvent.layout), []);
  return {
    handleLayout,
    ...layout
  };
};
var useLayout_default = useLayout;

// src/components/Button/styles.ts
var React6 = __toESM(require("react"));
var import_react_native6 = require("react-native");
var EDGEWIDTH = 3 /* WIDTH */;
var SKEW_ANGLE = 45 /* ANGLE */;
var shouldNotMoveRightEdge = (elevationDirection) => elevationDirection === "left-center" || elevationDirection === "right-center" || elevationDirection === "top-center" || elevationDirection === "top-right" || elevationDirection === "top-left";
var shouldNotMoveBottomEdge = (elevationDirection) => elevationDirection === "left-center" || elevationDirection === "top-center" || elevationDirection === "bottom-center" || elevationDirection === "bottom-left" || elevationDirection === "top-left";
var useStyles2 = ({
  color,
  colorConfig,
  disabled,
  elevationDirection,
  fullWidth,
  layout,
  spacingConfig
}) => React6.useMemo(() => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o;
  return import_react_native6.StyleSheet.create({
    buttonWrapper: {
      backgroundColor: "transparent",
      overflow: "hidden",
      width: fullWidth ? "100%" : "auto",
      ...import_react_native6.Platform.OS === "web" && {
        cursor: "pointer",
        display: fullWidth ? "flex" : "inline-flex",
        height: "100%",
        outlineStyle: "none",
        userSelect: "none",
        WebkitTapHighlightColor: "transparent",
        width: fullWidth ? "100%" : "fit-content",
        willChange: "transform"
      }
    },
    buttonFace: {
      alignItems: "center",
      backgroundColor: (colorConfig == null ? void 0 : colorConfig.backgroundColor) ?? "transparent",
      borderColor: colorConfig == null ? void 0 : colorConfig.borderColor,
      borderWidth: (colorConfig == null ? void 0 : colorConfig.borderColor) ? 1 : 0,
      flexDirection: "row",
      height: (spacingConfig == null ? void 0 : spacingConfig.height) ?? "auto",
      justifyContent: "center",
      paddingHorizontal: (spacingConfig == null ? void 0 : spacingConfig.paddingHorizontal) ?? 20,
      paddingVertical: (spacingConfig == null ? void 0 : spacingConfig.paddingVertical) ?? 16,
      zIndex: 2,
      ...import_react_native6.Platform.OS === "web" && {
        textAlign: "center",
        transition: "transform 0.12s ease-in-out"
      },
      ...disabled && {
        backgroundColor: (_a = colorConfig == null ? void 0 : colorConfig.disabledColors) == null ? void 0 : _a.backgroundColor,
        borderColor: (_b = colorConfig == null ? void 0 : colorConfig.disabledColors) == null ? void 0 : _b.borderColor,
        borderWidth: ((_c = colorConfig == null ? void 0 : colorConfig.disabledColors) == null ? void 0 : _c.borderColor) ? 1 : 0
      }
    },
    buttonFaceElevated: {
      marginBottom: EDGEWIDTH,
      marginLeft: 0,
      marginRight: EDGEWIDTH,
      marginTop: 0
    },
    buttonFacePressed: {
      transform: disabled ? [] : getTransform([
        { translateX: EDGEWIDTH },
        { translateY: EDGEWIDTH },
        { translateZ: 0 }
      ])
    },
    icon: {
      height: (spacingConfig == null ? void 0 : spacingConfig.iconHeight) ?? 16,
      marginRight: 1,
      width: "auto"
    },
    arrow: {
      marginLeft: 10
    },
    buttonEdge: {
      position: "absolute",
      ...import_react_native6.Platform.OS === "web" && {
        transformOrigin: "0% 0%",
        transition: "transform 0.12s ease-in-out"
      }
    },
    buttonEdgeRight: {
      backgroundColor: disabled ? ((_e = (_d = colorConfig == null ? void 0 : colorConfig.disabledColors) == null ? void 0 : _d.edgeColors) == null ? void 0 : _e.right) ?? "transparent" : ((_f = colorConfig == null ? void 0 : colorConfig.edgeColors) == null ? void 0 : _f.right) ?? "transparent",
      height: import_react_native6.Platform.OS === "web" ? `calc(100% - ${EDGEWIDTH}px)` : layout.height - EDGEWIDTH / 2,
      right: 0,
      top: 0,
      transform: getTransform([{ translateZ: 0 }, { skewY: "45deg" }]),
      width: EDGEWIDTH,
      zIndex: 2
    },
    buttonEdgeRightPressed: {
      transform: disabled || shouldNotMoveBottomEdge(elevationDirection) ? [{ skewY: `${SKEW_ANGLE}deg` }] : getTransform([
        { translateX: EDGEWIDTH },
        { translateY: EDGEWIDTH },
        { translateZ: 0 },
        { skewY: `${SKEW_ANGLE}deg` }
      ])
    },
    buttonEdgeBottom: {
      backgroundColor: disabled ? ((_h = (_g = colorConfig == null ? void 0 : colorConfig.disabledColors) == null ? void 0 : _g.edgeColors) == null ? void 0 : _h.bottom) ?? "transparent" : ((_i = colorConfig == null ? void 0 : colorConfig.edgeColors) == null ? void 0 : _i.bottom) ?? "transparent",
      bottom: 0,
      height: EDGEWIDTH,
      left: 0,
      transform: getTransform([{ translateZ: 0 }, { skewX: "45deg" }]),
      width: import_react_native6.Platform.OS === "web" ? `calc(100% - ${EDGEWIDTH}px)` : layout.width - EDGEWIDTH / 2,
      zIndex: 2
    },
    buttonEdgeBottomPressed: {
      transform: disabled || shouldNotMoveRightEdge(elevationDirection) ? [{ skewX: `${SKEW_ANGLE}deg` }] : getTransform([
        { translateX: EDGEWIDTH },
        { translateY: EDGEWIDTH },
        { translateZ: 0 },
        { skewX: `${SKEW_ANGLE}deg` }
      ])
    },
    buttonEdgeTop: {
      backgroundColor: disabled ? ((_k = (_j = colorConfig == null ? void 0 : colorConfig.disabledColors) == null ? void 0 : _j.edgeColors) == null ? void 0 : _k.top) ?? "transparent" : ((_l = colorConfig == null ? void 0 : colorConfig.edgeColors) == null ? void 0 : _l.top) ?? "transparent",
      height: EDGEWIDTH,
      left: 0,
      top: 0,
      transform: [{ skewX: "45deg" }, { scaleY: 1 }],
      width: import_react_native6.Platform.OS === "web" ? `calc(100% - ${EDGEWIDTH}px)` : layout.width - EDGEWIDTH / 2
    },
    buttonEdgeLeft: {
      backgroundColor: disabled ? ((_n = (_m = colorConfig == null ? void 0 : colorConfig.disabledColors) == null ? void 0 : _m.edgeColors) == null ? void 0 : _n.left) ?? "transparent" : ((_o = colorConfig == null ? void 0 : colorConfig.edgeColors) == null ? void 0 : _o.left) ?? "transparent",
      height: import_react_native6.Platform.OS === "web" ? `calc(100% - ${EDGEWIDTH}px)` : layout.height - EDGEWIDTH / 2,
      left: 0,
      top: 0,
      transform: [{ skewY: "45deg" }, { scaleY: 1 }],
      width: EDGEWIDTH,
      zIndex: 1
    },
    linkButtonWrapper: {
      backgroundColor: "transparent",
      borderBottomColor: color,
      borderBottomWidth: color ? 1 : 0,
      ...import_react_native6.Platform.OS === "web" && {
        cursor: "pointer",
        display: "inline-flex",
        outlineStyle: "none",
        WebkitTapHighlightColor: "transparent",
        userSelect: "none"
      }
    }
  });
}, [color, colorConfig, disabled, elevationDirection, fullWidth, layout, spacingConfig]);
var styles_default2 = useStyles2;

// src/components/Button/components/ElevatedButton.tsx
var ElevatedButton = ({
  children,
  color,
  colorConfig,
  colorMode = "dark",
  disabled,
  elevationDirection,
  fullWidth,
  icon,
  kind = "flat",
  showArrow,
  size = "medium",
  spacingConfig,
  style,
  textStyle,
  variant = "primary",
  ...props
}) => {
  var _a;
  const spacing = spacingConfig ?? getSpacingConfig(size);
  const colors = colorConfig ?? getButtonColors(colorMode, variant, kind);
  const customTextStyle = textStyle ?? getTextStyle(size) ?? fontNameSpaces.th14b;
  const textColor = disabled ? (_a = colors == null ? void 0 : colors.disabledColors) == null ? void 0 : _a.color : colors == null ? void 0 : colors.color;
  const { handleLayout, ...layout } = useLayout_default();
  const styles = styles_default2({
    color: textColor,
    colorConfig: colors,
    disabled,
    elevationDirection,
    fullWidth,
    layout,
    spacingConfig: spacing
  });
  return /* @__PURE__ */ React7.createElement(import_react_native7.Pressable, {
    disabled,
    style: [styles.buttonWrapper, style],
    onLayout: handleLayout,
    ...props
  }, ({ pressed }) => /* @__PURE__ */ React7.createElement(React7.Fragment, null, /* @__PURE__ */ React7.createElement(import_react_native7.View, {
    style: [
      styles.buttonFace,
      styles.buttonFaceElevated,
      pressed && styles.buttonFacePressed
    ]
  }, icon && /* @__PURE__ */ React7.createElement(import_react_native7.Image, {
    source: icon,
    style: styles.icon
  }), /* @__PURE__ */ React7.createElement(Typography_default, {
    ...customTextStyle,
    color: disabled ? "rgba(255, 255, 255, 0.5)" : textColor
  }, children), showArrow && /* @__PURE__ */ React7.createElement(Pointer, {
    style: { marginLeft: 10 },
    color: textColor
  })), /* @__PURE__ */ React7.createElement(import_react_native7.View, {
    style: [styles.buttonEdge, styles.buttonEdgeTop]
  }), /* @__PURE__ */ React7.createElement(import_react_native7.View, {
    style: [styles.buttonEdge, styles.buttonEdgeLeft]
  }), /* @__PURE__ */ React7.createElement(import_react_native7.View, {
    style: [
      styles.buttonEdge,
      styles.buttonEdgeBottom,
      pressed && styles.buttonEdgeBottomPressed
    ]
  }), /* @__PURE__ */ React7.createElement(import_react_native7.View, {
    style: [
      styles.buttonEdge,
      styles.buttonEdgeRight,
      pressed && styles.buttonEdgeRightPressed
    ]
  })));
};
var ElevatedButton_default = ElevatedButton;

// src/components/Button/components/FlatButton.tsx
var React8 = __toESM(require("react"));
var import_react_native8 = require("react-native");
var FlatButton = ({
  children,
  color,
  colorConfig,
  colorMode = "dark",
  disabled,
  elevationDirection,
  fullWidth,
  icon,
  kind = "flat",
  showArrow,
  size = "medium",
  spacingConfig,
  style,
  textStyle,
  variant = "primary",
  ...props
}) => {
  var _a;
  const spacing = spacingConfig ?? getSpacingConfig(size);
  const colors = colorConfig ?? getButtonColors(colorMode, variant, kind);
  const customTextStyle = textStyle ?? getTextStyle(size) ?? fontNameSpaces.th14b;
  const textColor = disabled ? (_a = colors == null ? void 0 : colors.disabledColors) == null ? void 0 : _a.color : colors == null ? void 0 : colors.color;
  const { handleLayout, ...layout } = useLayout_default();
  const styles = styles_default2({
    color: textColor,
    colorConfig: colors,
    disabled,
    elevationDirection,
    fullWidth,
    layout,
    spacingConfig: spacing
  });
  return /* @__PURE__ */ React8.createElement(import_react_native8.Pressable, {
    disabled,
    style: [styles.buttonWrapper, style],
    onLayout: handleLayout,
    ...props
  }, ({ pressed }) => /* @__PURE__ */ React8.createElement(React8.Fragment, null, /* @__PURE__ */ React8.createElement(import_react_native8.View, {
    style: [styles.buttonFace, pressed && styles.buttonFacePressed]
  }, icon && /* @__PURE__ */ React8.createElement(import_react_native8.Image, {
    source: icon,
    style: styles.icon
  }), /* @__PURE__ */ React8.createElement(Typography_default, {
    ...customTextStyle,
    color: disabled ? "rgba(255, 255, 255, 0.5)" : textColor
  }, children), showArrow && /* @__PURE__ */ React8.createElement(Pointer, {
    style: { marginLeft: 10 },
    color: textColor
  })), /* @__PURE__ */ React8.createElement(import_react_native8.View, {
    style: [styles.buttonEdge, styles.buttonEdgeLeft]
  }), /* @__PURE__ */ React8.createElement(import_react_native8.View, {
    style: [styles.buttonEdge, styles.buttonEdgeTop]
  })));
};
var FlatButton_default = FlatButton;

// src/components/Button/components/LinkButton.tsx
var React9 = __toESM(require("react"));
var import_react_native9 = require("react-native");
var LinkButton = ({
  children,
  color,
  colorConfig,
  colorMode,
  elevationDirection,
  fullWidth,
  icon,
  kind,
  showArrow,
  size,
  spacingConfig,
  style,
  textStyle,
  variant,
  ...props
}) => {
  const customTextStyle = textStyle ?? fontVariant.BodyMedium11;
  const { handleLayout, ...layout } = useLayout_default();
  const styles = styles_default2({
    color,
    layout
  });
  return /* @__PURE__ */ React9.createElement(import_react_native9.Pressable, {
    style: [styles.linkButtonWrapper, style],
    onLayout: handleLayout,
    ...props
  }, /* @__PURE__ */ React9.createElement(Typography_default, {
    ...customTextStyle,
    color
  }, children));
};
var LinkButton_default = LinkButton;

// src/components/Button/index.tsx
var Button = ({ kind, ...props }) => {
  switch (kind) {
    case "elevated":
      return /* @__PURE__ */ React10.createElement(ElevatedButton_default, {
        kind,
        ...props
      });
    case "flat":
      return /* @__PURE__ */ React10.createElement(FlatButton_default, {
        kind,
        ...props
      });
    case "link":
      return /* @__PURE__ */ React10.createElement(LinkButton_default, {
        kind,
        ...props
      });
    default:
      return /* @__PURE__ */ React10.createElement(FlatButton_default, {
        kind,
        ...props
      });
  }
};
var Button_default = Button;

// src/components/Checkbox/index.tsx
var React12 = __toESM(require("react"));
var import_react_native11 = require("react-native");
var import_react_native_svg3 = __toESM(require("react-native-svg"));

// src/hooks/useToggle.ts
var React11 = __toESM(require("react"));
var useToggle = ({ isChecked, onChange }) => {
  const [isToggleChecked, setIsToggleChecked] = React11.useState(isChecked ?? false);
  React11.useEffect(() => {
    if (typeof isChecked === "boolean") {
      setIsToggleChecked(isChecked);
    }
  }, [isChecked]);
  const handleChange = (event) => {
    if (onChange instanceof Function) {
      onChange(event);
    } else {
      setIsToggleChecked(event.target.checked);
    }
  };
  return { isChecked: isToggleChecked, handleChange };
};
var useToggle_default = useToggle;

// src/components/Checkbox/styles.ts
var import_react_native10 = require("react-native");
var BOX_SIZE = 20;
var useStyles3 = (props) => {
  var _a, _b, _c, _d, _e, _f;
  return import_react_native10.StyleSheet.create({
    checkboxLabel: {
      width: BOX_SIZE,
      height: BOX_SIZE,
      overflow: "hidden",
      ...import_react_native10.Platform.OS === "web" && {
        cursor: "pointer",
        display: "inline",
        WebkitTapHighlightColor: "transparent",
        transition: "transform 0.15s ease",
        userSelect: "none"
      }
    },
    checkmarkWrapper: {
      height: 20,
      overflow: "hidden",
      width: 20
    },
    checkmarkWrapperBefore: {
      backgroundColor: (_a = props.colorConfig) == null ? void 0 : _a.topPlunk,
      height: 3 /* WIDTH */,
      left: 0,
      opacity: 0,
      position: "absolute",
      top: 0,
      transform: [{ skewX: `${45 /* ANGLE */}deg` }, { scaleY: 1 }],
      width: 20,
      ...import_react_native10.Platform.OS === "web" && {
        transformOrigin: "0% 0%",
        transition: "background-color 0.15s ease"
      }
    },
    checkmarkWrapperAfter: {
      backgroundColor: (_b = props.colorConfig) == null ? void 0 : _b.leftPlunk,
      bottom: 0,
      height: 20,
      left: 0,
      opacity: 0,
      position: "absolute",
      transform: [{ skewY: `${45 /* ANGLE */}deg` }, { scaleX: 1 }],
      width: 3 /* WIDTH */,
      ...import_react_native10.Platform.OS === "web" && {
        transformOrigin: "0% 0%",
        transition: "background-color 0.15s ease"
      }
    },
    checkmarkWrapperPressedBefore: {
      opacity: 1,
      ...import_react_native10.Platform.OS === "web" && {
        transition: "opacity 0.1s ease 0.03s"
      }
    },
    checkmarkWrapperPressedAfter: {
      opacity: 1,
      ...import_react_native10.Platform.OS === "web" && {
        transition: "opacity 0.1s ease 0.03s"
      }
    },
    checkmark: {
      backgroundColor: props.isChecked ? (_c = props.colorConfig) == null ? void 0 : _c.border : (_d = props.colorConfig) == null ? void 0 : _d.background,
      alignItems: "center",
      borderColor: (_e = props.colorConfig) == null ? void 0 : _e.border,
      borderWidth: 1,
      height: BOX_SIZE,
      justifyContent: "center",
      position: "absolute",
      width: BOX_SIZE,
      zIndex: 999,
      ...import_react_native10.Platform.OS === "web" && {
        cursor: "pointer",
        transition: "all 0.15s ease"
      }
    },
    checkmarkPressed: {
      backgroundColor: (_f = props.colorConfig) == null ? void 0 : _f.border,
      transform: [{ translateX: 3 /* WIDTH */ }, { translateY: 3 /* WIDTH */ }]
    },
    tickSvg: {
      opacity: props.isChecked ? 1 : 0,
      ...import_react_native10.Platform.OS === "web" && {
        transition: "opacity 0.15s ease"
      }
    }
  });
};
var styles_default3 = useStyles3;

// src/components/Checkbox/index.tsx
var Checkbox = ({
  children,
  colorConfig,
  colorMode = "dark",
  isChecked: isToggleChecked,
  name,
  nativeID,
  onChange,
  style,
  ...props
}) => {
  const { isChecked, handleChange } = useToggle_default({ isChecked: isToggleChecked, onChange });
  const defaultColorConfig = colorMode === "dark" ? colorGuide.darkComponents.checkbox : colorGuide.lightComponents.checkbox;
  const colors = isEmpty(colorConfig) ? defaultColorConfig : colorConfig ?? defaultColorConfig;
  const styles = styles_default3({
    children,
    colorConfig: colors,
    isChecked
  });
  return /* @__PURE__ */ React12.createElement(import_react_native11.Pressable, {
    ...import_react_native11.Platform.OS === "web" ? {
      accessibilityRole: "label",
      focusable: false
    } : {
      nativeID
    },
    style: [styles.checkboxLabel, style],
    ...props
  }, ({ pressed }) => /* @__PURE__ */ React12.createElement(React12.Fragment, null, import_react_native11.Platform.OS === "web" && /* @__PURE__ */ React12.createElement("input", {
    checked: isChecked,
    id: nativeID,
    name,
    style: {
      cursor: "pointer",
      height: 0,
      opacity: 0,
      position: "absolute",
      width: 0
    },
    type: "checkbox",
    onChange: handleChange
  }), /* @__PURE__ */ React12.createElement(Row, null, /* @__PURE__ */ React12.createElement(import_react_native11.View, {
    style: styles.checkmarkWrapper
  }, /* @__PURE__ */ React12.createElement(import_react_native11.View, {
    style: [
      styles.checkmarkWrapperBefore,
      pressed && styles.checkmarkWrapperPressedBefore
    ]
  }), /* @__PURE__ */ React12.createElement(import_react_native11.View, {
    style: [styles.checkmark, pressed && styles.checkmarkPressed]
  }, /* @__PURE__ */ React12.createElement(import_react_native_svg3.default, {
    style: styles.tickSvg,
    width: 10,
    height: 8,
    viewBox: "0 0 11 8",
    fill: "none"
  }, /* @__PURE__ */ React12.createElement(import_react_native_svg3.Path, {
    d: "M1.45456 3.99973L4.18183 6.72701L10.5455 1.27246",
    stroke: colors.background,
    strokeWidth: 1.36364
  }))), /* @__PURE__ */ React12.createElement(import_react_native11.View, {
    style: [
      styles.checkmarkWrapperAfter,
      pressed && styles.checkmarkWrapperPressedAfter
    ]
  })), children && /* @__PURE__ */ React12.createElement(React12.Fragment, null, /* @__PURE__ */ React12.createElement(VerticalSpacer, {
    n: 3
  }), children))));
};
var Checkbox_default = Checkbox;

// src/components/ElevatedCard/index.tsx
var React14 = __toESM(require("react"));
var import_react_native13 = require("react-native");

// src/components/ElevatedCard/styles.ts
var React13 = __toESM(require("react"));
var import_react_native12 = require("react-native");
var EDGEWIDTH2 = 3 /* WIDTH */;
var SKEW_ANGLE2 = 45 /* ANGLE */;
var useStyles4 = ({ backgroundColor, edgeColors, fullWidth, layout }) => React13.useMemo(() => import_react_native12.StyleSheet.create({
  cardFace: {
    backgroundColor: backgroundColor ?? "transparent",
    marginBottom: EDGEWIDTH2,
    marginLeft: 0,
    marginRight: EDGEWIDTH2,
    marginTop: 0,
    zIndex: 1
  },
  cardEdge: {
    position: "absolute",
    ...import_react_native12.Platform.OS === "web" && {
      transformOrigin: "0% 0%",
      transition: `transform ${EDGEWIDTH2 / 100}s ease`
    }
  },
  cardEdgeRight: {
    backgroundColor: (edgeColors == null ? void 0 : edgeColors.right) ?? "transparent",
    height: import_react_native12.Platform.OS === "web" ? `calc(100% - ${EDGEWIDTH2}px)` : layout.height - EDGEWIDTH2 / 2,
    right: 0,
    top: 0,
    width: EDGEWIDTH2,
    transform: getTransform([
      { translateX: 0 },
      { translateY: 0 },
      { translateZ: 0 },
      { skewY: `${SKEW_ANGLE2}deg` }
    ])
  },
  cardEdgeBottom: {
    backgroundColor: (edgeColors == null ? void 0 : edgeColors.bottom) ?? "transparent",
    bottom: 0,
    height: EDGEWIDTH2,
    left: 0,
    transform: getTransform([
      { translateX: 0 },
      { translateY: 0 },
      { translateZ: 0 },
      { skewX: `${SKEW_ANGLE2}deg` }
    ]),
    width: import_react_native12.Platform.OS === "web" ? `calc(100% - ${EDGEWIDTH2}px)` : layout.width - EDGEWIDTH2 / 2
  },
  cardContainer: {
    overflow: "hidden",
    width: "100%",
    ...import_react_native12.Platform.OS === "web" && {
      display: fullWidth ? "block" : "inline-flex",
      userSelect: "none"
    }
  }
}), [backgroundColor, edgeColors, fullWidth, layout]);
var styles_default4 = useStyles4;

// src/components/ElevatedCard/index.tsx
var ElevatedCard = ({
  backgroundColor,
  children,
  edgeColors,
  fullWidth,
  style,
  ...props
}) => {
  const { handleLayout, ...layout } = useLayout_default();
  const styles = styles_default4({
    backgroundColor,
    edgeColors,
    fullWidth,
    layout
  });
  return /* @__PURE__ */ React14.createElement(import_react_native13.View, {
    style: [styles.cardContainer, style],
    onLayout: handleLayout,
    ...props
  }, /* @__PURE__ */ React14.createElement(import_react_native13.View, {
    style: styles.cardFace,
    ...props
  }, children), /* @__PURE__ */ React14.createElement(import_react_native13.View, {
    style: [styles.cardEdge, styles.cardEdgeRight]
  }), /* @__PURE__ */ React14.createElement(import_react_native13.View, {
    style: [styles.cardEdge, styles.cardEdgeBottom]
  }));
};
var ElevatedCard_default = ElevatedCard;

// src/components/Header/index.tsx
var React15 = __toESM(require("react"));
var import_react_native14 = require("react-native");
var Header = ({
  color,
  description,
  heading,
  onBackPress,
  textStyle = {
    heading: typographyGuide.header.heading,
    description: typographyGuide.header.description
  }
}) => {
  const fallbackColor = color ?? mainColors.white;
  return /* @__PURE__ */ React15.createElement(Column, null, /* @__PURE__ */ React15.createElement(Back_default, {
    color: fallbackColor,
    onPress: onBackPress
  }), heading && /* @__PURE__ */ React15.createElement(import_react_native14.View, {
    style: { paddingTop: 10 }
  }, /* @__PURE__ */ React15.createElement(Typography_default, {
    ...textStyle.heading,
    color: fallbackColor,
    style: { maxWidth: "75%", opacity: fontOpacity.heading }
  }, heading)), description && /* @__PURE__ */ React15.createElement(import_react_native14.View, {
    style: { paddingTop: 5 }
  }, /* @__PURE__ */ React15.createElement(Typography_default, {
    ...textStyle.description,
    color: fallbackColor,
    style: { maxWidth: "75%", opacity: fontOpacity.bodyText }
  }, description)));
};
var Header_default = Header;

// src/components/InputField/index.tsx
var React17 = __toESM(require("react"));
var import_react_native17 = require("react-native");

// src/hooks/useScrollIntoView.ts
var React16 = __toESM(require("react"));
var import_react_native15 = require("react-native");
var useScrollIntoView = ({ ref, scrollIntoView = false }) => {
  React16.useEffect(() => {
    var _a, _b;
    if (import_react_native15.Platform.OS === "web") {
      if (scrollIntoView instanceof Object) {
        (_a = ref == null ? void 0 : ref.current) == null ? void 0 : _a.scrollIntoView(scrollIntoView);
      } else {
        (_b = ref == null ? void 0 : ref.current) == null ? void 0 : _b.scrollIntoView();
      }
    }
  }, [ref, scrollIntoView]);
};
var useScrollIntoView_default = useScrollIntoView;

// src/components/InputField/styles.ts
var import_react_native16 = require("react-native");
var useStyles5 = (props) => {
  var _a, _b, _c, _d, _e;
  return import_react_native16.StyleSheet.create({
    container: {},
    input: {
      ...generateTextStyle((_a = props.textStyle) == null ? void 0 : _a.input.fontType, (_b = props.textStyle) == null ? void 0 : _b.input.fontSize, (_c = props.textStyle) == null ? void 0 : _c.input.fontWeight, (_d = props.colorConfig) == null ? void 0 : _d.textColor),
      backgroundColor: "transparent",
      maxWidth: "100%",
      ...import_react_native16.Platform.OS === "web" && {
        caretColor: (_e = props.colorConfig) == null ? void 0 : _e.caretColor,
        display: "block",
        outlineStyle: "none"
      }
    },
    label: {
      marginBottom: 10,
      ...import_react_native16.Platform.OS === "web" && {
        textAlign: "left"
      }
    }
  });
};
var styles_default5 = useStyles5;

// src/components/InputField/index.tsx
var InputField = ({
  colorConfig,
  colorMode = "dark",
  errorMessage = "error message",
  hasError,
  inputRef,
  isDisabled,
  label,
  name,
  nativeID,
  scrollIntoView,
  tabIndex,
  textStyle,
  ...props
}) => {
  const customRef = React17.useRef(null);
  const labelRef = React17.useRef(null);
  useScrollIntoView_default({ ref: customRef, scrollIntoView });
  React17.useEffect(() => {
    if (import_react_native17.Platform.OS === "web") {
      if (customRef.current != null) {
        customRef.current.name = name;
        customRef.current.tabIndex = tabIndex;
      }
      if (labelRef.current != null) {
        labelRef.current.htmlFor = nativeID;
      }
    }
  }, [name, nativeID, tabIndex]);
  const getLabelColor = () => hasError ? colorConfig == null ? void 0 : colorConfig.errorColor : colorConfig == null ? void 0 : colorConfig.labelColor;
  const getLabelText = () => hasError ? errorMessage : label;
  const defaultColorConfig = colorMode === "dark" ? colorGuide.darkComponents.inputFields : colorGuide.lightComponents.inputFields;
  const colors = isEmpty(colorConfig) ? defaultColorConfig : colorConfig ?? defaultColorConfig;
  const styles = styles_default5({
    colorConfig: colors,
    textStyle: {
      input: (textStyle == null ? void 0 : textStyle.input) ?? typographyGuide.inputFields.text,
      label: (textStyle == null ? void 0 : textStyle.label) ?? typographyGuide.inputFields.label
    }
  });
  return /* @__PURE__ */ React17.createElement(import_react_native17.View, {
    style: styles.container
  }, label && /* @__PURE__ */ React17.createElement(import_react_native17.View, {
    ref: labelRef,
    ...import_react_native17.Platform.OS === "web" && {
      accessibilityRole: "label"
    },
    style: styles.label
  }, /* @__PURE__ */ React17.createElement(Typography_default, {
    ...(textStyle == null ? void 0 : textStyle.label) ?? typographyGuide.inputFields.label,
    color: getLabelColor()
  }, getLabelText())), /* @__PURE__ */ React17.createElement(import_react_native17.TextInput, {
    ref: (ref) => {
      customRef.current = inputRef ? inputRef.current = ref : ref;
    },
    editable: !isDisabled,
    nativeID,
    placeholderTextColor: colors.placeholderColor ?? hexToRGBA(mainColors.black, 0.3),
    style: styles.input,
    ...props
  }));
};
var InputField_default = InputField;

// src/components/SearchBar/index.tsx
var React18 = __toESM(require("react"));
var import_react_native19 = require("react-native");

// src/components/SearchBar/styles.ts
var import_react_native18 = require("react-native");
var useStyles6 = (props) => {
  var _a, _b, _c, _d;
  return import_react_native18.StyleSheet.create({
    container: {
      alignItems: "center",
      backgroundColor: (_a = props.colorConfig) == null ? void 0 : _a.backgroundColor,
      borderColor: (_b = props.colorConfig) == null ? void 0 : _b.border,
      borderWidth: ((_c = props.colorConfig) == null ? void 0 : _c.border) ? 1 : 0,
      flexDirection: "row",
      paddingHorizontal: 15,
      paddingVertical: 11,
      ...import_react_native18.Platform.OS === "web" && {
        outlineStyle: "none"
      }
    },
    containerActive: {
      borderColor: (_d = props.colorConfig) == null ? void 0 : _d.activeBorder
    },
    icon: {
      height: 16,
      marginRight: 10,
      minWidth: 16,
      width: "auto"
    },
    input: {
      flexShrink: 1,
      width: "100%"
    }
  });
};
var styles_default6 = useStyles6;

// src/components/SearchBar/index.tsx
var SearchBar = ({
  colorConfig,
  colorMode = "dark",
  icon,
  inputFieldColorConfig,
  onSearchInput,
  onSubmit,
  placeholder = "search",
  textStyle = typographyGuide.searchBar.input
}) => {
  const [searchText, setSearchText] = React18.useState("");
  const [isActive, setIsActive] = React18.useState(false);
  const inputRef = React18.useRef(null);
  const handleChange = (event) => {
    const value = event.nativeEvent.text;
    setSearchText(value);
    onSearchInput(value);
  };
  const handleSubmit = (event) => {
    var _a;
    event.preventDefault();
    (_a = inputRef == null ? void 0 : inputRef.current) == null ? void 0 : _a.blur();
    onSubmit == null ? void 0 : onSubmit();
  };
  const handleClearData = () => {
    setSearchText("");
    onSearchInput("");
  };
  const defaultColorConfig = colorMode === "dark" ? colorGuide.darkComponents.searchBar : colorGuide.lightComponents.searchBar;
  const defaultInputFieldColorConfig = colorMode === "dark" ? colorGuide.darkComponents.inputFields : colorGuide.lightComponents.inputFields;
  const colors = isEmpty(colorConfig) ? defaultColorConfig : colorConfig ?? defaultColorConfig;
  const inputFieldColors = isEmpty(inputFieldColorConfig) ? defaultInputFieldColorConfig : inputFieldColorConfig ?? defaultInputFieldColorConfig;
  const styles = styles_default6({
    colorConfig: colors
  });
  const inputField = /* @__PURE__ */ React18.createElement(InputField_default, {
    autoFocus: isActive,
    colorConfig: inputFieldColors,
    inputRef,
    placeholder,
    textStyle: {
      input: textStyle,
      label: typographyGuide.inputFields.label
    },
    value: searchText,
    onChange: handleChange
  });
  return /* @__PURE__ */ React18.createElement(import_react_native19.TouchableWithoutFeedback, {
    onBlur: () => setIsActive(false),
    onPress: () => setIsActive(true)
  }, /* @__PURE__ */ React18.createElement(import_react_native19.View, {
    style: [styles.container, isActive && styles.containerActive]
  }, icon && /* @__PURE__ */ React18.createElement(import_react_native19.Image, {
    source: icon,
    style: styles.icon
  }), /* @__PURE__ */ React18.createElement(import_react_native19.View, {
    style: styles.input
  }, import_react_native19.Platform.OS === "web" ? /* @__PURE__ */ React18.createElement("form", {
    style: { margin: 0, padding: 0 },
    onSubmit: handleSubmit
  }, inputField, /* @__PURE__ */ React18.createElement("input", {
    type: "submit",
    style: { display: "none" }
  })) : React18.cloneElement(inputField, {
    onSubmitEditing: handleSubmit
  })), !!searchText && /* @__PURE__ */ React18.createElement(Cross, {
    color: colors.closeIcon,
    onPress: handleClearData
  })));
};
var SearchBar_default = SearchBar;

// src/components/Tag/index.tsx
var React19 = __toESM(require("react"));
var import_react_native21 = require("react-native");

// src/primitives/tags.ts
var getTagColors = (type, mode) => {
  const colors = mode === "dark" ? colorGuide.darkComponents.tags : colorGuide.lightComponents.tags;
  switch (type) {
    case "success":
      return colors.success;
    case "error":
      return colors.error;
    case "warning":
      return colors.warning;
    default:
      return colors.error;
  }
};

// src/components/Tag/styles.ts
var import_react_native20 = require("react-native");
var useStyles7 = () => import_react_native20.StyleSheet.create({
  tagContainer: {
    alignItems: "center",
    flexDirection: "row",
    paddingBottom: 4,
    paddingHorizontal: 10,
    paddingTop: 5,
    ...import_react_native20.Platform.OS === "web" && {
      display: "inline-flex"
    }
  },
  tagIcon: {
    height: 10,
    minWidth: 10,
    width: "auto"
  },
  tagIconContainer: {
    marginRight: 5
  }
});
var styles_default7 = useStyles7;

// src/components/Tag/index.tsx
var Tag = ({
  children,
  colorConfig,
  colorMode = "dark",
  icon,
  noContainer = false,
  style,
  textStyle,
  type = "success"
}) => {
  const defaultColorConfig = getTagColors(type, colorMode);
  const colors = isEmpty(colorConfig) ? defaultColorConfig : colorConfig ?? defaultColorConfig;
  const styles = styles_default7();
  if (noContainer) {
    return /* @__PURE__ */ React19.createElement(Typography_default, {
      ...textStyle ?? typographyGuide.tags.noContainerText,
      as: "span",
      color: colors.color
    }, children);
  }
  return /* @__PURE__ */ React19.createElement(import_react_native21.View, {
    style: [styles.tagContainer, { backgroundColor: colors.background }, style]
  }, icon ? /* @__PURE__ */ React19.createElement(import_react_native21.View, {
    style: styles.tagIconContainer
  }, /* @__PURE__ */ React19.createElement(import_react_native21.Image, {
    source: icon,
    style: styles.tagIcon
  })) : null, /* @__PURE__ */ React19.createElement(Typography_default, {
    ...textStyle ?? typographyGuide.tags.containerText,
    color: colors.color
  }, children));
};
var Tag_default = Tag;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Back,
  Button,
  Checkbox,
  Chevron,
  Column,
  Cross,
  ElevatedCard,
  Header,
  HorizontalDivider,
  HorizontalSpacer,
  InputField,
  PageContainer,
  Pointer,
  Row,
  SearchBar,
  Tag,
  Typography,
  VerticalSpacer
});
//# sourceMappingURL=index.js.map