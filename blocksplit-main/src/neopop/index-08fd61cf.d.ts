import * as React from 'react';
import { B as BackProps, a as ButtonProps, C as CardProps, H as HeaderProps, R as RowProps, b as ColumnProps, P as PageContainerProps, c as HorizontalDividerProps, d as HorizontalSpacerProps, V as VerticalSpacerProps, e as ChevronProps, f as PointerProps, g as CrossProps, I as InputFieldProps, S as SearchBarProps, T as TagProps } from './types-c721aa45.js';
import { ViewProps, View } from 'react-native';
import { T as TypographyProps } from './types-5620d230.js';

declare const Back: React.FC<BackProps>;

declare const Button: React.FC<ButtonProps>;

interface CheckboxColorConfig {
    background: string;
    border: string;
    leftPlunk: string;
    topPlunk: string;
}
declare type CheckboxColorModes = 'dark' | 'light';
interface CheckboxProps extends ViewProps {
    children?: React.ReactNode;
    /**
     * checkbox color config
     */
    colorConfig?: CheckboxColorConfig;
    /**
     * dark or light
     */
    colorMode?: CheckboxColorModes;
    /**
     * if true, the component is checked
     */
    isChecked: boolean;
    name?: string;
    /**
     * onChange event handler
     */
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

declare const Checkbox: React.FC<CheckboxProps>;

declare const ElevatedCard: React.FC<CardProps>;

declare const Header: React.FC<HeaderProps>;

declare const Row: React.ForwardRefExoticComponent<RowProps & React.RefAttributes<View>>;
declare const Column: React.ForwardRefExoticComponent<ColumnProps & React.RefAttributes<View>>;
declare const PageContainer: React.ForwardRefExoticComponent<PageContainerProps & React.RefAttributes<View>>;
declare const HorizontalDivider: React.FC<HorizontalDividerProps>;
declare const HorizontalSpacer: React.FC<HorizontalSpacerProps>;
declare const VerticalSpacer: React.FC<VerticalSpacerProps>;
declare const Chevron: React.FC<ChevronProps>;
declare const Pointer: React.FC<PointerProps>;
declare const Cross: React.FC<CrossProps>;

declare const InputField: React.FC<InputFieldProps>;

declare const SearchBar: React.FC<SearchBarProps>;

declare const Tag: React.FC<TagProps>;

declare const Typography: React.FC<TypographyProps>;

declare const index_Back: typeof Back;
declare const index_Button: typeof Button;
declare const index_Checkbox: typeof Checkbox;
declare const index_ElevatedCard: typeof ElevatedCard;
declare const index_Header: typeof Header;
declare const index_InputField: typeof InputField;
declare const index_SearchBar: typeof SearchBar;
declare const index_Tag: typeof Tag;
declare const index_Typography: typeof Typography;
declare const index_Row: typeof Row;
declare const index_Column: typeof Column;
declare const index_PageContainer: typeof PageContainer;
declare const index_HorizontalDivider: typeof HorizontalDivider;
declare const index_HorizontalSpacer: typeof HorizontalSpacer;
declare const index_VerticalSpacer: typeof VerticalSpacer;
declare const index_Chevron: typeof Chevron;
declare const index_Pointer: typeof Pointer;
declare const index_Cross: typeof Cross;
declare namespace index {
  export {
    index_Back as Back,
    index_Button as Button,
    index_Checkbox as Checkbox,
    index_ElevatedCard as ElevatedCard,
    index_Header as Header,
    index_InputField as InputField,
    index_SearchBar as SearchBar,
    index_Tag as Tag,
    index_Typography as Typography,
    index_Row as Row,
    index_Column as Column,
    index_PageContainer as PageContainer,
    index_HorizontalDivider as HorizontalDivider,
    index_HorizontalSpacer as HorizontalSpacer,
    index_VerticalSpacer as VerticalSpacer,
    index_Chevron as Chevron,
    index_Pointer as Pointer,
    index_Cross as Cross,
  };
}

export { Back as B, Checkbox as C, ElevatedCard as E, Header as H, InputField as I, PageContainer as P, Row as R, SearchBar as S, Tag as T, VerticalSpacer as V, Button as a, Typography as b, Column as c, HorizontalDivider as d, HorizontalSpacer as e, Chevron as f, Pointer as g, Cross as h, index as i };
