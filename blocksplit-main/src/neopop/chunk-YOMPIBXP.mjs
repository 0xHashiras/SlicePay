import {
  __export
} from "./chunk-5VRACIDE.mjs";

// src/utils/index.ts
var utils_exports = {};
__export(utils_exports, {
  generateTextStyle: () => generateTextStyle,
  getTransform: () => getTransform,
  hexToRGBA: () => hexToRGBA,
  isEmpty: () => isEmpty,
  isObject: () => isObject,
  mergeDeep: () => mergeDeep
});
import { Platform } from "react-native";
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
var getTransform = (transforms) => transforms.filter((transform) => !("translateZ" in transform) || Platform.OS === "web");
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
var isObject = (item) => item instanceof Object && !Array.isArray(item);
var mergeDeep = (target, ...sources) => {
  if (sources.length === 0) {
    return target;
  }
  const source = sources.shift();
  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) {
          Object.assign(target, { [key]: {} });
        }
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }
  return mergeDeep(target, ...sources);
};

export {
  hexToRGBA,
  isEmpty,
  getTransform,
  generateTextStyle,
  isObject,
  mergeDeep,
  utils_exports
};
//# sourceMappingURL=chunk-YOMPIBXP.mjs.map