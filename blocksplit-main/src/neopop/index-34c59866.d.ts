import * as react_native from 'react-native';
import { TransformsStyle, TextStyle } from 'react-native';
import { a as FontType, F as FontWeight } from './types-5620d230.js';

declare const hexToRGBA: (hex: string, alpha: string | number) => string;
declare const isEmpty: (value: any) => boolean;
declare const getTransform: (transforms: (NonNullable<TransformsStyle['transform']>[0] | {
    translateZ: number;
})[]) => (react_native.PerpectiveTransform | react_native.RotateTransform | react_native.RotateXTransform | react_native.RotateYTransform | react_native.RotateZTransform | react_native.ScaleTransform | react_native.ScaleXTransform | react_native.ScaleYTransform | react_native.TranslateXTransform | react_native.TranslateYTransform | react_native.SkewXTransform | react_native.SkewYTransform | react_native.MatrixTransform)[] | undefined;
declare const generateTextStyle: (fontType?: FontType, fontSize?: number, fontWeight?: FontWeight, color?: string) => TextStyle;
declare const isObject: (item: any) => boolean;
declare const mergeDeep: (target: any, ...sources: any[]) => any;

declare const index_hexToRGBA: typeof hexToRGBA;
declare const index_isEmpty: typeof isEmpty;
declare const index_getTransform: typeof getTransform;
declare const index_generateTextStyle: typeof generateTextStyle;
declare const index_isObject: typeof isObject;
declare const index_mergeDeep: typeof mergeDeep;
declare namespace index {
  export {
    index_hexToRGBA as hexToRGBA,
    index_isEmpty as isEmpty,
    index_getTransform as getTransform,
    index_generateTextStyle as generateTextStyle,
    index_isObject as isObject,
    index_mergeDeep as mergeDeep,
  };
}

export { isEmpty as a, generateTextStyle as b, isObject as c, getTransform as g, hexToRGBA as h, index as i, mergeDeep as m };
