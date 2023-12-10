import {
  useLayout_default,
  useScrollIntoView_default,
  useToggle_default
} from "./chunk-7UKYRF6S.mjs";
import {
  colorGuide,
  fontNameSpaces,
  fontOpacity,
  fontVariant,
  getButtonColors,
  getSpacingConfig,
  getTextStyle,
  mainColors,
  typographyGuide
} from "./chunk-JXA5O32Y.mjs";
import {
  generateTextStyle,
  getTransform,
  hexToRGBA,
  isEmpty
} from "./chunk-YOMPIBXP.mjs";
import {
  __export
} from "./chunk-5VRACIDE.mjs";

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

// src/components/Back/index.tsx
import * as React4 from "react";
import { TouchableWithoutFeedback, View as View2 } from "react-native";
import Svg2, { Path as Path2 } from "react-native-svg";

// src/components/Helpers/index.tsx
import * as React from "react";
import { Platform, SafeAreaView, View } from "react-native";
import Svg, { Path } from "react-native-svg";
var Row = React.forwardRef(({ h, style, v, ...props }, ref) => /* @__PURE__ */ React.createElement(View, {
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
var Column = React.forwardRef(({ h, style, v, ...props }, ref) => /* @__PURE__ */ React.createElement(View, {
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
var PageContainer = React.forwardRef(({ style, ...props }, ref) => /* @__PURE__ */ React.createElement(SafeAreaView, {
  ref,
  style: [
    {
      backgroundColor: mainColors.black,
      paddingLeft: 30,
      paddingRight: 15,
      paddingTop: 0,
      ...Platform.OS === "web" && {
        width: "100vw"
      }
    },
    style
  ],
  ...props
}));
var HorizontalDivider = ({ color }) => /* @__PURE__ */ React.createElement(View, {
  style: {
    backgroundColor: color ?? hexToRGBA(mainColors.white, 0.1),
    height: 1,
    margin: 0,
    position: "relative",
    width: "100%"
  }
});
var HorizontalSpacer = ({ n }) => /* @__PURE__ */ React.createElement(View, {
  style: { marginBottom: n * 5 }
});
var VerticalSpacer = ({ n }) => /* @__PURE__ */ React.createElement(View, {
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
}) => /* @__PURE__ */ React.createElement(Svg, {
  style: [{ transform: [{ rotate: rotateDegrees[direction] }] }, style],
  width: 8,
  height: 11,
  viewBox: "0 0 8 11",
  fill: "none"
}, /* @__PURE__ */ React.createElement(Path, {
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
}) => size === "small" ? /* @__PURE__ */ React.createElement(Svg, {
  style: [{ transform: [{ rotate: rotateDegrees[direction] }] }, style],
  width: 13,
  height: 9,
  viewBox: "0 0 13 9",
  fill: "none"
}, /* @__PURE__ */ React.createElement(Path, {
  d: "M1 3.74996H0.25V5.24996H1V3.74996ZM1 5.24996H11.9997V3.74996H1V5.24996ZM8.37874 0.5C8.37874 3.09998 10.4246 5.25 12.9997 5.25V3.75C11.299 3.75 9.87874 2.31829 9.87874 0.5L8.37874 0.5ZM12.9997 3.75C10.4246 3.75 8.37865 5.89999 8.37865 8.5H9.87865C9.87865 6.68173 11.299 5.25 12.9997 5.25V3.75Z",
  fill: color
})) : /* @__PURE__ */ React.createElement(Svg, {
  style: [{ transform: [{ rotate: rotateDegrees[direction] }] }, style],
  width: 21,
  height: 9,
  viewBox: "0 0 21 9",
  fill: "none"
}, /* @__PURE__ */ React.createElement(Path, {
  d: "M1 3.74996H0.25L0.25 5.24996L1 5.24996L1 3.74996ZM1 5.24996L20 5.24996V3.74996L1 3.74996L1 5.24996ZM16.379 0.5C16.379 3.09998 18.4249 5.25 21 5.25V3.75C19.2993 3.75 17.879 2.3183 17.879 0.5L16.379 0.5ZM21 3.75C18.4249 3.75 16.3789 5.89999 16.3789 8.5H17.8789C17.8789 6.68172 19.2993 5.25 21 5.25V3.75Z",
  fill: color
}));
var Cross = ({ color = mainColors.white, onPress }) => /* @__PURE__ */ React.createElement(Svg, {
  width: 12,
  height: 12,
  viewBox: "0 0 12 12",
  fill: "none",
  onPress
}, /* @__PURE__ */ React.createElement(Path, {
  d: "M2 10L6 6L2 2",
  stroke: color,
  strokeWidth: 1.5,
  strokeLinecap: "square"
}), /* @__PURE__ */ React.createElement(Path, {
  d: "M10 10L6 6L10 2",
  stroke: color,
  strokeWidth: 1.5,
  strokeLinecap: "square"
}));

// src/components/Typography/index.tsx
import * as React3 from "react";
import { Text } from "react-native";

// src/components/Typography/styles.ts
import * as React2 from "react";
import { Platform as Platform2, StyleSheet } from "react-native";
var useStyles = ({
  color,
  fontSize,
  fontType,
  fontWeight,
  lineClamp,
  overflow
}) => React2.useMemo(() => StyleSheet.create({
  typographyWrapper: {
    ...generateTextStyle(fontType, fontSize, fontWeight, color),
    ...Platform2.OS === "web" && (overflow && lineClamp ? {
      WebkitBoxOrient: "vertical",
      display: "-webkit-box",
      whiteSpace: "break-spaces"
    } : {
      display: "block"
    })
  },
  paragraphWrapper: {
    ...generateTextStyle(fontType, fontSize, fontWeight, color),
    ...Platform2.OS === "web" && (overflow && lineClamp ? {
      WebkitBoxOrient: "vertical",
      display: "-webkit-box",
      whiteSpace: "break-spaces"
    } : {
      display: "block"
    })
  },
  spanWrapper: {
    ...generateTextStyle(fontType, fontSize, fontWeight, color),
    ...Platform2.OS === "web" && overflow && lineClamp && {
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
      return /* @__PURE__ */ React3.createElement(Text, {
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
      return /* @__PURE__ */ React3.createElement(Text, {
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
      return /* @__PURE__ */ React3.createElement(Text, {
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
}, /* @__PURE__ */ React4.createElement(TouchableWithoutFeedback, {
  onPress
}, /* @__PURE__ */ React4.createElement(Row, {
  h: "center",
  style: { height: 36 }
}, /* @__PURE__ */ React4.createElement(Svg2, {
  width: 32,
  height: 12,
  viewBox: "0 0 32 12",
  fill: "none"
}, /* @__PURE__ */ React4.createElement(Path2, {
  d: "M31 6L0.999999 6",
  stroke: color ?? mainColors.white,
  strokeWidth: 1.5,
  strokeLinecap: "square",
  strokeLinejoin: "round"
}), /* @__PURE__ */ React4.createElement(Path2, {
  d: "M7 12C7 8.68629 4.31371 6 1 6",
  stroke: color ?? mainColors.white,
  strokeWidth: 1.5
}), /* @__PURE__ */ React4.createElement(Path2, {
  d: "M1 6C4.31371 6 7 3.31371 7 0",
  stroke: color ?? mainColors.white,
  strokeWidth: 1.5
})))), /* @__PURE__ */ React4.createElement(VerticalSpacer, {
  n: 4
}), heading && /* @__PURE__ */ React4.createElement(Typography_default, {
  ...textStyle,
  color: color ?? mainColors.white
}, heading)), /* @__PURE__ */ React4.createElement(View2, {
  style: { marginLeft: "auto" }
}, rightElement ?? null));
var Back_default = Back;

// src/components/Button/index.tsx
import * as React9 from "react";

// src/components/Button/components/ElevatedButton.tsx
import * as React6 from "react";
import { Image, Pressable, View as View3 } from "react-native";

// src/components/Button/styles.ts
import * as React5 from "react";
import { Platform as Platform3, StyleSheet as StyleSheet2 } from "react-native";
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
}) => React5.useMemo(() => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o;
  return StyleSheet2.create({
    buttonWrapper: {
      backgroundColor: "transparent",
      overflow: "hidden",
      width: fullWidth ? "100%" : "auto",
      ...Platform3.OS === "web" && {
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
      ...Platform3.OS === "web" && {
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
      ...Platform3.OS === "web" && {
        transformOrigin: "0% 0%",
        transition: "transform 0.12s ease-in-out"
      }
    },
    buttonEdgeRight: {
      backgroundColor: disabled ? ((_e = (_d = colorConfig == null ? void 0 : colorConfig.disabledColors) == null ? void 0 : _d.edgeColors) == null ? void 0 : _e.right) ?? "transparent" : ((_f = colorConfig == null ? void 0 : colorConfig.edgeColors) == null ? void 0 : _f.right) ?? "transparent",
      height: Platform3.OS === "web" ? `calc(100% - ${EDGEWIDTH}px)` : layout.height - EDGEWIDTH / 2,
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
      width: Platform3.OS === "web" ? `calc(100% - ${EDGEWIDTH}px)` : layout.width - EDGEWIDTH / 2,
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
      width: Platform3.OS === "web" ? `calc(100% - ${EDGEWIDTH}px)` : layout.width - EDGEWIDTH / 2
    },
    buttonEdgeLeft: {
      backgroundColor: disabled ? ((_n = (_m = colorConfig == null ? void 0 : colorConfig.disabledColors) == null ? void 0 : _m.edgeColors) == null ? void 0 : _n.left) ?? "transparent" : ((_o = colorConfig == null ? void 0 : colorConfig.edgeColors) == null ? void 0 : _o.left) ?? "transparent",
      height: Platform3.OS === "web" ? `calc(100% - ${EDGEWIDTH}px)` : layout.height - EDGEWIDTH / 2,
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
      ...Platform3.OS === "web" && {
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
  return /* @__PURE__ */ React6.createElement(Pressable, {
    disabled,
    style: [styles.buttonWrapper, style],
    onLayout: handleLayout,
    ...props
  }, ({ pressed }) => /* @__PURE__ */ React6.createElement(React6.Fragment, null, /* @__PURE__ */ React6.createElement(View3, {
    style: [
      styles.buttonFace,
      styles.buttonFaceElevated,
      pressed && styles.buttonFacePressed
    ]
  }, icon && /* @__PURE__ */ React6.createElement(Image, {
    source: icon,
    style: styles.icon
  }), /* @__PURE__ */ React6.createElement(Typography_default, {
    ...customTextStyle,
    color: disabled ? "rgba(255, 255, 255, 0.5)" : textColor
  }, children), showArrow && /* @__PURE__ */ React6.createElement(Pointer, {
    style: { marginLeft: 10 },
    color: textColor
  })), /* @__PURE__ */ React6.createElement(View3, {
    style: [styles.buttonEdge, styles.buttonEdgeTop]
  }), /* @__PURE__ */ React6.createElement(View3, {
    style: [styles.buttonEdge, styles.buttonEdgeLeft]
  }), /* @__PURE__ */ React6.createElement(View3, {
    style: [
      styles.buttonEdge,
      styles.buttonEdgeBottom,
      pressed && styles.buttonEdgeBottomPressed
    ]
  }), /* @__PURE__ */ React6.createElement(View3, {
    style: [
      styles.buttonEdge,
      styles.buttonEdgeRight,
      pressed && styles.buttonEdgeRightPressed
    ]
  })));
};
var ElevatedButton_default = ElevatedButton;

// src/components/Button/components/FlatButton.tsx
import * as React7 from "react";
import { Image as Image2, Pressable as Pressable2, View as View4 } from "react-native";
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
  return /* @__PURE__ */ React7.createElement(Pressable2, {
    disabled,
    style: [styles.buttonWrapper, style],
    onLayout: handleLayout,
    ...props
  }, ({ pressed }) => /* @__PURE__ */ React7.createElement(React7.Fragment, null, /* @__PURE__ */ React7.createElement(View4, {
    style: [styles.buttonFace, pressed && styles.buttonFacePressed]
  }, icon && /* @__PURE__ */ React7.createElement(Image2, {
    source: icon,
    style: styles.icon
  }), /* @__PURE__ */ React7.createElement(Typography_default, {
    ...customTextStyle,
    color: disabled ? "rgba(255, 255, 255, 0.5)" : textColor
  }, children), showArrow && /* @__PURE__ */ React7.createElement(Pointer, {
    style: { marginLeft: 10 },
    color: textColor
  })), /* @__PURE__ */ React7.createElement(View4, {
    style: [styles.buttonEdge, styles.buttonEdgeLeft]
  }), /* @__PURE__ */ React7.createElement(View4, {
    style: [styles.buttonEdge, styles.buttonEdgeTop]
  })));
};
var FlatButton_default = FlatButton;

// src/components/Button/components/LinkButton.tsx
import * as React8 from "react";
import { Pressable as Pressable3 } from "react-native";
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
  return /* @__PURE__ */ React8.createElement(Pressable3, {
    style: [styles.linkButtonWrapper, style],
    onLayout: handleLayout,
    ...props
  }, /* @__PURE__ */ React8.createElement(Typography_default, {
    ...customTextStyle,
    color
  }, children));
};
var LinkButton_default = LinkButton;

// src/components/Button/index.tsx
var Button = ({ kind, ...props }) => {
  switch (kind) {
    case "elevated":
      return /* @__PURE__ */ React9.createElement(ElevatedButton_default, {
        kind,
        ...props
      });
    case "flat":
      return /* @__PURE__ */ React9.createElement(FlatButton_default, {
        kind,
        ...props
      });
    case "link":
      return /* @__PURE__ */ React9.createElement(LinkButton_default, {
        kind,
        ...props
      });
    default:
      return /* @__PURE__ */ React9.createElement(FlatButton_default, {
        kind,
        ...props
      });
  }
};
var Button_default = Button;

// src/components/Checkbox/index.tsx
import * as React10 from "react";
import { Platform as Platform5, Pressable as Pressable4, View as View5 } from "react-native";
import Svg3, { Path as Path3 } from "react-native-svg";

// src/components/Checkbox/styles.ts
import { Platform as Platform4, StyleSheet as StyleSheet3 } from "react-native";
var BOX_SIZE = 20;
var useStyles3 = (props) => {
  var _a, _b, _c, _d, _e, _f;
  return StyleSheet3.create({
    checkboxLabel: {
      width: BOX_SIZE,
      height: BOX_SIZE,
      overflow: "hidden",
      ...Platform4.OS === "web" && {
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
      ...Platform4.OS === "web" && {
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
      ...Platform4.OS === "web" && {
        transformOrigin: "0% 0%",
        transition: "background-color 0.15s ease"
      }
    },
    checkmarkWrapperPressedBefore: {
      opacity: 1,
      ...Platform4.OS === "web" && {
        transition: "opacity 0.1s ease 0.03s"
      }
    },
    checkmarkWrapperPressedAfter: {
      opacity: 1,
      ...Platform4.OS === "web" && {
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
      ...Platform4.OS === "web" && {
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
      ...Platform4.OS === "web" && {
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
  return /* @__PURE__ */ React10.createElement(Pressable4, {
    ...Platform5.OS === "web" ? {
      accessibilityRole: "label",
      focusable: false
    } : {
      nativeID
    },
    style: [styles.checkboxLabel, style],
    ...props
  }, ({ pressed }) => /* @__PURE__ */ React10.createElement(React10.Fragment, null, Platform5.OS === "web" && /* @__PURE__ */ React10.createElement("input", {
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
  }), /* @__PURE__ */ React10.createElement(Row, null, /* @__PURE__ */ React10.createElement(View5, {
    style: styles.checkmarkWrapper
  }, /* @__PURE__ */ React10.createElement(View5, {
    style: [
      styles.checkmarkWrapperBefore,
      pressed && styles.checkmarkWrapperPressedBefore
    ]
  }), /* @__PURE__ */ React10.createElement(View5, {
    style: [styles.checkmark, pressed && styles.checkmarkPressed]
  }, /* @__PURE__ */ React10.createElement(Svg3, {
    style: styles.tickSvg,
    width: 10,
    height: 8,
    viewBox: "0 0 11 8",
    fill: "none"
  }, /* @__PURE__ */ React10.createElement(Path3, {
    d: "M1.45456 3.99973L4.18183 6.72701L10.5455 1.27246",
    stroke: colors.background,
    strokeWidth: 1.36364
  }))), /* @__PURE__ */ React10.createElement(View5, {
    style: [
      styles.checkmarkWrapperAfter,
      pressed && styles.checkmarkWrapperPressedAfter
    ]
  })), children && /* @__PURE__ */ React10.createElement(React10.Fragment, null, /* @__PURE__ */ React10.createElement(VerticalSpacer, {
    n: 3
  }), children))));
};
var Checkbox_default = Checkbox;

// src/components/ElevatedCard/index.tsx
import * as React12 from "react";
import { View as View6 } from "react-native";

// src/components/ElevatedCard/styles.ts
import * as React11 from "react";
import { Platform as Platform6, StyleSheet as StyleSheet4 } from "react-native";
var EDGEWIDTH2 = 3 /* WIDTH */;
var SKEW_ANGLE2 = 45 /* ANGLE */;
var useStyles4 = ({ backgroundColor, edgeColors, fullWidth, layout }) => React11.useMemo(() => StyleSheet4.create({
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
    ...Platform6.OS === "web" && {
      transformOrigin: "0% 0%",
      transition: `transform ${EDGEWIDTH2 / 100}s ease`
    }
  },
  cardEdgeRight: {
    backgroundColor: (edgeColors == null ? void 0 : edgeColors.right) ?? "transparent",
    height: Platform6.OS === "web" ? `calc(100% - ${EDGEWIDTH2}px)` : layout.height - EDGEWIDTH2 / 2,
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
    width: Platform6.OS === "web" ? `calc(100% - ${EDGEWIDTH2}px)` : layout.width - EDGEWIDTH2 / 2
  },
  cardContainer: {
    overflow: "hidden",
    width: "100%",
    ...Platform6.OS === "web" && {
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
  return /* @__PURE__ */ React12.createElement(View6, {
    style: [styles.cardContainer, style],
    onLayout: handleLayout,
    ...props
  }, /* @__PURE__ */ React12.createElement(View6, {
    style: styles.cardFace,
    ...props
  }, children), /* @__PURE__ */ React12.createElement(View6, {
    style: [styles.cardEdge, styles.cardEdgeRight]
  }), /* @__PURE__ */ React12.createElement(View6, {
    style: [styles.cardEdge, styles.cardEdgeBottom]
  }));
};
var ElevatedCard_default = ElevatedCard;

// src/components/Header/index.tsx
import * as React13 from "react";
import { View as View7 } from "react-native";
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
  return /* @__PURE__ */ React13.createElement(Column, null, /* @__PURE__ */ React13.createElement(Back_default, {
    color: fallbackColor,
    onPress: onBackPress
  }), heading && /* @__PURE__ */ React13.createElement(View7, {
    style: { paddingTop: 10 }
  }, /* @__PURE__ */ React13.createElement(Typography_default, {
    ...textStyle.heading,
    color: fallbackColor,
    style: { maxWidth: "75%", opacity: fontOpacity.heading }
  }, heading)), description && /* @__PURE__ */ React13.createElement(View7, {
    style: { paddingTop: 5 }
  }, /* @__PURE__ */ React13.createElement(Typography_default, {
    ...textStyle.description,
    color: fallbackColor,
    style: { maxWidth: "75%", opacity: fontOpacity.bodyText }
  }, description)));
};
var Header_default = Header;

// src/components/InputField/index.tsx
import * as React14 from "react";
import { Platform as Platform8, TextInput, View as View8 } from "react-native";

// src/components/InputField/styles.ts
import { Platform as Platform7, StyleSheet as StyleSheet5 } from "react-native";
var useStyles5 = (props) => {
  var _a, _b, _c, _d, _e;
  return StyleSheet5.create({
    container: {},
    input: {
      ...generateTextStyle((_a = props.textStyle) == null ? void 0 : _a.input.fontType, (_b = props.textStyle) == null ? void 0 : _b.input.fontSize, (_c = props.textStyle) == null ? void 0 : _c.input.fontWeight, (_d = props.colorConfig) == null ? void 0 : _d.textColor),
      backgroundColor: "transparent",
      maxWidth: "100%",
      ...Platform7.OS === "web" && {
        caretColor: (_e = props.colorConfig) == null ? void 0 : _e.caretColor,
        display: "block",
        outlineStyle: "none"
      }
    },
    label: {
      marginBottom: 10,
      ...Platform7.OS === "web" && {
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
  const customRef = React14.useRef(null);
  const labelRef = React14.useRef(null);
  useScrollIntoView_default({ ref: customRef, scrollIntoView });
  React14.useEffect(() => {
    if (Platform8.OS === "web") {
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
  return /* @__PURE__ */ React14.createElement(View8, {
    style: styles.container
  }, label && /* @__PURE__ */ React14.createElement(View8, {
    ref: labelRef,
    ...Platform8.OS === "web" && {
      accessibilityRole: "label"
    },
    style: styles.label
  }, /* @__PURE__ */ React14.createElement(Typography_default, {
    ...(textStyle == null ? void 0 : textStyle.label) ?? typographyGuide.inputFields.label,
    color: getLabelColor()
  }, getLabelText())), /* @__PURE__ */ React14.createElement(TextInput, {
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
import * as React15 from "react";
import {
  Image as Image3,
  Platform as Platform10,
  TouchableWithoutFeedback as TouchableWithoutFeedback2,
  View as View9
} from "react-native";

// src/components/SearchBar/styles.ts
import { Platform as Platform9, StyleSheet as StyleSheet6 } from "react-native";
var useStyles6 = (props) => {
  var _a, _b, _c, _d;
  return StyleSheet6.create({
    container: {
      alignItems: "center",
      backgroundColor: (_a = props.colorConfig) == null ? void 0 : _a.backgroundColor,
      borderColor: (_b = props.colorConfig) == null ? void 0 : _b.border,
      borderWidth: ((_c = props.colorConfig) == null ? void 0 : _c.border) ? 1 : 0,
      flexDirection: "row",
      paddingHorizontal: 15,
      paddingVertical: 11,
      ...Platform9.OS === "web" && {
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
  const [searchText, setSearchText] = React15.useState("");
  const [isActive, setIsActive] = React15.useState(false);
  const inputRef = React15.useRef(null);
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
  const inputField = /* @__PURE__ */ React15.createElement(InputField_default, {
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
  return /* @__PURE__ */ React15.createElement(TouchableWithoutFeedback2, {
    onBlur: () => setIsActive(false),
    onPress: () => setIsActive(true)
  }, /* @__PURE__ */ React15.createElement(View9, {
    style: [styles.container, isActive && styles.containerActive]
  }, icon && /* @__PURE__ */ React15.createElement(Image3, {
    source: icon,
    style: styles.icon
  }), /* @__PURE__ */ React15.createElement(View9, {
    style: styles.input
  }, Platform10.OS === "web" ? /* @__PURE__ */ React15.createElement("form", {
    style: { margin: 0, padding: 0 },
    onSubmit: handleSubmit
  }, inputField, /* @__PURE__ */ React15.createElement("input", {
    type: "submit",
    style: { display: "none" }
  })) : React15.cloneElement(inputField, {
    onSubmitEditing: handleSubmit
  })), !!searchText && /* @__PURE__ */ React15.createElement(Cross, {
    color: colors.closeIcon,
    onPress: handleClearData
  })));
};
var SearchBar_default = SearchBar;

// src/components/Tag/index.tsx
import * as React16 from "react";
import { Image as Image4, View as View10 } from "react-native";

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
import { Platform as Platform11, StyleSheet as StyleSheet7 } from "react-native";
var useStyles7 = () => StyleSheet7.create({
  tagContainer: {
    alignItems: "center",
    flexDirection: "row",
    paddingBottom: 4,
    paddingHorizontal: 10,
    paddingTop: 5,
    ...Platform11.OS === "web" && {
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
    return /* @__PURE__ */ React16.createElement(Typography_default, {
      ...textStyle ?? typographyGuide.tags.noContainerText,
      as: "span",
      color: colors.color
    }, children);
  }
  return /* @__PURE__ */ React16.createElement(View10, {
    style: [styles.tagContainer, { backgroundColor: colors.background }, style]
  }, icon ? /* @__PURE__ */ React16.createElement(View10, {
    style: styles.tagIconContainer
  }, /* @__PURE__ */ React16.createElement(Image4, {
    source: icon,
    style: styles.tagIcon
  })) : null, /* @__PURE__ */ React16.createElement(Typography_default, {
    ...textStyle ?? typographyGuide.tags.containerText,
    color: colors.color
  }, children));
};
var Tag_default = Tag;

export {
  Row,
  Column,
  PageContainer,
  HorizontalDivider,
  HorizontalSpacer,
  VerticalSpacer,
  Chevron,
  Pointer,
  Cross,
  Typography_default,
  Back_default,
  Button_default,
  Checkbox_default,
  ElevatedCard_default,
  Header_default,
  InputField_default,
  SearchBar_default,
  Tag_default,
  components_exports
};
//# sourceMappingURL=chunk-WNSVWYNF.mjs.map