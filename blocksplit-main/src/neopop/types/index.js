"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/types/index.ts
var types_exports = {};
__export(types_exports, {
  FontWeight: () => FontWeight
});
module.exports = __toCommonJS(types_exports);

// src/components/Typography/types.ts
var FontWeight = /* @__PURE__ */ ((FontWeight2) => {
  FontWeight2["EXTRA_BOLD"] = "800";
  FontWeight2["BOLD"] = "700";
  FontWeight2["SEMI_BOLD"] = "600";
  FontWeight2["MEDIUM"] = "500";
  FontWeight2["REGULAR"] = "400";
  FontWeight2["THIN"] = "300";
  return FontWeight2;
})(FontWeight || {});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FontWeight
});
//# sourceMappingURL=index.js.map