// src/hooks/useLayout.ts
import * as React from "react";
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

// src/hooks/useToggle.ts
import * as React2 from "react";
var useToggle = ({ isChecked, onChange }) => {
  const [isToggleChecked, setIsToggleChecked] = React2.useState(isChecked ?? false);
  React2.useEffect(() => {
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

// src/hooks/useScrollIntoView.ts
import * as React3 from "react";
import { Platform } from "react-native";
var useScrollIntoView = ({ ref, scrollIntoView = false }) => {
  React3.useEffect(() => {
    var _a, _b;
    if (Platform.OS === "web") {
      if (scrollIntoView instanceof Object) {
        (_a = ref == null ? void 0 : ref.current) == null ? void 0 : _a.scrollIntoView(scrollIntoView);
      } else {
        (_b = ref == null ? void 0 : ref.current) == null ? void 0 : _b.scrollIntoView();
      }
    }
  }, [ref, scrollIntoView]);
};
var useScrollIntoView_default = useScrollIntoView;

export {
  useLayout_default,
  useToggle_default,
  useScrollIntoView_default
};
//# sourceMappingURL=chunk-7UKYRF6S.mjs.map