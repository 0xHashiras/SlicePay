import { LayoutChangeEvent } from 'react-native';
import * as React from 'react';

declare const useLayout: () => {
    x: number;
    y: number;
    width: number;
    height: number;
    handleLayout: (event: LayoutChangeEvent) => void;
};

interface UseScrollIntoViewOptions {
    ref?: React.MutableRefObject<any>;
    scrollIntoView?: ScrollIntoViewOptions | boolean;
}
declare const useScrollIntoView: ({ ref, scrollIntoView }: UseScrollIntoViewOptions) => void;

interface UseToggleOptions {
    isChecked?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
declare const useToggle: ({ isChecked, onChange }: UseToggleOptions) => {
    isChecked: boolean;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

declare const index_useLayout: typeof useLayout;
declare const index_useScrollIntoView: typeof useScrollIntoView;
declare const index_useToggle: typeof useToggle;
declare namespace index {
  export {
    index_useLayout as useLayout,
    index_useScrollIntoView as useScrollIntoView,
    index_useToggle as useToggle,
  };
}

export { useScrollIntoView as a, useToggle as b, index as i, useLayout as u };
