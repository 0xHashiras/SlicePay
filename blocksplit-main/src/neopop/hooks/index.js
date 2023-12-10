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

// src/hooks/index.ts
var hooks_exports = {};
__export(hooks_exports, {
  useLayout: () => useLayout_default,
  useScrollIntoView: () => useScrollIntoView_default,
  useToggle: () => useToggle_default
});
module.exports = __toCommonJS(hooks_exports);

// src/hooks/useLayout.ts
var React = __toESM(require("react"));
var useLayout = () => {
  const [layout, setLayout] = React.useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0
  });
  const handleLayout = React.useCallback((event) => setLayout(event.nativeEvent.layout), []);
  return {
    handleLayout,
    ...layout
  };
};
var useLayout_default = useLayout;

// src/hooks/useScrollIntoView.ts
var React2 = __toESM(require("react"));
var import_react_native = require("react-native");
var useScrollIntoView = ({ ref, scrollIntoView = false }) => {
  React2.useEffect(() => {
    var _a, _b;
    if (import_react_native.Platform.OS === "web") {
      if (scrollIntoView instanceof Object) {
        (_a = ref == null ? void 0 : ref.current) == null ? void 0 : _a.scrollIntoView(scrollIntoView);
      } else {
        (_b = ref == null ? void 0 : ref.current) == null ? void 0 : _b.scrollIntoView();
      }
    }
  }, [ref, scrollIntoView]);
};
var useScrollIntoView_default = useScrollIntoView;

// src/hooks/useToggle.ts
var React3 = __toESM(require("react"));
var useToggle = ({ isChecked, onChange }) => {
  const [isToggleChecked, setIsToggleChecked] = React3.useState(isChecked ?? false);
  React3.useEffect(() => {
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  useLayout,
  useScrollIntoView,
  useToggle
});
//# sourceMappingURL=index.js.map