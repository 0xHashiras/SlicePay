import { PressableProps, ImageSourcePropType, StyleProp, ViewStyle, GestureResponderEvent, TextInputProps, TextInput, KeyboardTypeOptions, NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';
import { F as FontWeight, a as FontType, b as FontOverflow, T as TypographyProps } from './types-5620d230.js';
import * as React$1 from 'react';

interface EdgeColors$1 {
    bottom: string;
    left: string;
    right: string;
    top: string;
}
declare type ButtonElevationDirections = 'bottom-right' | 'top-right' | 'bottom-left' | 'top-left' | 'bottom-center' | 'top-center' | 'right-center' | 'left-center';
declare type ButtonVariants = 'primary' | 'secondary';
declare type ButtonKinds = 'flat' | 'elevated' | 'link';
declare type ButtonSizes = 'big' | 'medium' | 'small';
declare type ButtonColorModes = 'dark' | 'light';
interface ButtonColorConfig {
    backgroundColor?: string;
    borderColor?: string;
    color?: string;
    edgeColors?: EdgeColors$1;
    disabledColors?: {
        backgroundColor?: string;
        borderColor?: string;
        color?: string;
        edgeColors?: EdgeColors$1;
    };
}
interface ButtonSpacingConfig {
    height?: number;
    iconHeight?: number;
    paddingHorizontal?: number;
    paddingVertical?: number;
}
interface ButtonProps extends PressableProps {
    /**
     * use to render the center text or can pass any React Element
     */
    children?: React.ReactNode;
    color?: string;
    /**
     * object for taking in colors
     */
    colorConfig?: ButtonColorConfig;
    /**
     * mode of the button
     */
    colorMode?: ButtonColorModes;
    /**
     * if true, button is disabled
     */
    disabled?: boolean;
    /**
     * specifies the direction for an `elevated` button. this will decide which
     * plunk to hide or show when button is pressed.
     */
    elevationDirection?: ButtonElevationDirections;
    /**
     * flex the button to take full-width of the container
     */
    fullWidth?: boolean;
    /**
     * url for any image to be set, this aligns left to the text
     */
    icon?: ImageSourcePropType;
    /**
     * different kind of button
     */
    kind?: ButtonKinds;
    /**
     * arrow icon in the button
     */
    showArrow?: boolean;
    /**
     * used to decide the paddings, height, and typography style
     */
    size?: ButtonSizes;
    /**
     * object for taking in spacing details
     */
    spacingConfig?: ButtonSpacingConfig;
    /**
     * custom styles if any
     */
    style?: StyleProp<ViewStyle>;
    /**
     * text style - passes configs for `Typography`
     */
    textStyle?: FontNameSpace;
    /**
     * variant of `flat` or `elevated` button
     */
    variant?: ButtonVariants;
}

interface EdgeColors {
    bottom: string;
    right: string;
}
interface CardProps {
    /**
     * card background color
     */
    backgroundColor?: string;
    children: React.ReactNode;
    /**
     * color configs of right & bottom plunk
     */
    edgeColors?: EdgeColors;
    /**
     * if true, card takes full-width of the container
     */
    fullWidth?: boolean;
    /**
     * inline css styles
     */
    style?: StyleProp<ViewStyle>;
}

interface HeaderProps {
    color?: string;
    /**
     * text-description of the heading
     */
    description?: string;
    /**
     * text-content of the heading
     */
    heading?: string;
    /**
     * onPress handler on back button
     */
    onBackPress?: (event: GestureResponderEvent) => void;
    textStyle?: {
        description: FontNameSpace;
        heading: FontNameSpace;
    };
}

interface RowProps {
    children?: React$1.ReactNode;
    h?: 'center';
    style?: StyleProp<ViewStyle>;
    v?: 'center' | 'justify';
}
interface ColumnProps {
    children?: React$1.ReactNode;
    h?: 'center';
    style?: StyleProp<ViewStyle>;
    v?: 'center';
}
interface PageContainerProps {
    style?: StyleProp<ViewStyle>;
}
interface HorizontalDividerProps {
    /**
     * divider color
     * @default 'rgba(255, 255, 255, 0.1)'
     */
    color?: string;
}
interface HorizontalSpacerProps {
    /**
     * padding multiplier
     */
    n: number;
}
interface VerticalSpacerProps {
    /**
     * padding multiplier
     */
    n: number;
}
interface ChevronProps {
    /**
     * chevron icon color
     */
    color?: string;
    /**
     * chevron direction
     */
    direction?: 'north' | 'south' | 'east' | 'west';
    /**
     * inline style
     */
    style?: StyleProp<ViewStyle>;
}
interface PointerProps {
    /**
     * pointer icon color
     */
    color?: string;
    /**
     * pointer direction
     */
    direction?: 'north' | 'south' | 'east' | 'west';
    /**
     * pointer size
     */
    size?: 'big' | 'medium' | 'small';
    /**
     * inline style
     */
    style?: StyleProp<ViewStyle>;
}
interface CrossProps {
    /**
     * cross icon color
     */
    color?: string;
    /**
     * onPress event handler
     */
    onPress: (event?: GestureResponderEvent) => void;
}

interface InputFieldColorConfig {
    caretColor?: string;
    errorColor?: string;
    labelColor?: string;
    placeholderColor?: string;
    textColor?: string;
}
declare type InputFieldColorModes = 'dark' | 'light';
interface InputFieldProps extends TextInputProps {
    /**
     * specifies that an element should automatically get focus when the page
     * loads
     */
    autoFocus?: boolean;
    /**
     * can be used for passing additional color configurations
     */
    colorConfig?: InputFieldColorConfig;
    /**
     * dark or light
     */
    colorMode?: InputFieldColorModes;
    /**
     * defines error message
     */
    errorMessage?: string;
    /**
     * specifies error state
     */
    hasError?: boolean;
    /**
     * ref attribute for input field
     */
    inputRef?: React.MutableRefObject<TextInput | null>;
    /**
     * disable state
     */
    isDisabled?: boolean;
    /**
     * allows browser to display an appropriate virtual keyboard
     */
    keyboardType?: KeyboardTypeOptions;
    /**
     * specifies caption for the element
     */
    label?: string;
    /**
     * specifies the maximum value
     */
    maxLength?: number;
    /**
     * specifies the name
     */
    name?: string;
    /**
     * the unique identifier for this field
     */
    nativeID?: string;
    /**
     * event when an element loses focus
     */
    onBlur?: (event: NativeSyntheticEvent<TextInputFocusEventData>) => void;
    /**
     * event when the user commits a value change to a form control
     */
    onChange?: (event: NativeSyntheticEvent<TextInputFocusEventData>) => void;
    /**
     * event when the user sets focus on an element
     */
    onFocus?: (event: NativeSyntheticEvent<TextInputFocusEventData>) => void;
    /**
     * defines placeholder for the field
     */
    placeholder?: string;
    scrollIntoView?: boolean;
    /**
     * for inline styles
     */
    style?: StyleProp<ViewStyle>;
    /**
     * indicates the element can be focused, and participates in sequential
     * keyboard navigation
     */
    tabIndex?: number;
    /**
     * can be used for passing font styles for label and input
     */
    textStyle?: {
        input: FontNameSpace;
        label: FontNameSpace;
    };
    /**
     * specifies the value of an element
     */
    value?: any;
}

interface SearchBarColorConfig {
    activeBorder: string;
    backgroundColor: string;
    border: string;
    closeIcon: string;
}
declare type SearchBarColorModes = 'dark' | 'light';
interface SearchBarProps {
    /**
     * search container color config
     */
    colorConfig?: SearchBarColorConfig;
    /**
     * dark or light
     */
    colorMode?: SearchBarColorModes;
    /**
     * url of icon inside input field
     */
    icon?: ImageSourcePropType;
    /**
     * input field color config
     */
    inputFieldColorConfig?: InputFieldColorConfig;
    /**
     * onChange event handler
     */
    onSearchInput: (value: string) => void;
    /**
     * onSubmit event handler
     */
    onSubmit?: () => void;
    /**
     * input field placeholder
     */
    placeholder?: string;
    /**
     * font styles to be used for the input text field
     */
    textStyle?: FontNameSpace;
}

declare type TagColorModes = 'dark' | 'light';
declare type TagTypes = 'warning' | 'error' | 'success' | 'info';
interface TagColorConfig {
    background?: string;
    color: string;
}
interface TagProps {
    /**
     * tag keyword
     */
    children: React.ReactNode;
    /**
     * tag color config
     */
    colorConfig: TagColorConfig;
    /**
     * dark or light
     */
    colorMode?: TagColorModes;
    /**
     * tag with icon source
     */
    icon?: ImageSourcePropType;
    /**
     * tag without container
     */
    noContainer?: boolean;
    style?: StyleProp<ViewStyle>;
    /**
     * can be used for passing font style
     */
    textStyle?: FontNameSpace;
    type?: TagTypes;
}

interface FontNameSpace {
    fontWeight: FontWeight;
    fontType: FontType;
    fontSize: number;
}

type index_FontNameSpace = FontNameSpace;
type index_BackProps = BackProps;
type index_ButtonElevationDirections = ButtonElevationDirections;
type index_ButtonVariants = ButtonVariants;
type index_ButtonKinds = ButtonKinds;
type index_ButtonSizes = ButtonSizes;
type index_ButtonColorModes = ButtonColorModes;
type index_ButtonColorConfig = ButtonColorConfig;
type index_ButtonSpacingConfig = ButtonSpacingConfig;
type index_ButtonProps = ButtonProps;
type index_CardProps = CardProps;
type index_HeaderProps = HeaderProps;
type index_RowProps = RowProps;
type index_ColumnProps = ColumnProps;
type index_PageContainerProps = PageContainerProps;
type index_HorizontalDividerProps = HorizontalDividerProps;
type index_HorizontalSpacerProps = HorizontalSpacerProps;
type index_VerticalSpacerProps = VerticalSpacerProps;
type index_ChevronProps = ChevronProps;
type index_PointerProps = PointerProps;
type index_CrossProps = CrossProps;
type index_InputFieldColorConfig = InputFieldColorConfig;
type index_InputFieldColorModes = InputFieldColorModes;
type index_InputFieldProps = InputFieldProps;
type index_SearchBarColorConfig = SearchBarColorConfig;
type index_SearchBarColorModes = SearchBarColorModes;
type index_SearchBarProps = SearchBarProps;
type index_TagColorModes = TagColorModes;
type index_TagTypes = TagTypes;
type index_TagColorConfig = TagColorConfig;
type index_TagProps = TagProps;
declare const index_FontType: typeof FontType;
declare const index_FontWeight: typeof FontWeight;
declare const index_FontOverflow: typeof FontOverflow;
declare const index_TypographyProps: typeof TypographyProps;
declare namespace index {
  export {
    index_FontNameSpace as FontNameSpace,
    index_BackProps as BackProps,
    index_ButtonElevationDirections as ButtonElevationDirections,
    index_ButtonVariants as ButtonVariants,
    index_ButtonKinds as ButtonKinds,
    index_ButtonSizes as ButtonSizes,
    index_ButtonColorModes as ButtonColorModes,
    index_ButtonColorConfig as ButtonColorConfig,
    index_ButtonSpacingConfig as ButtonSpacingConfig,
    index_ButtonProps as ButtonProps,
    index_CardProps as CardProps,
    index_HeaderProps as HeaderProps,
    index_RowProps as RowProps,
    index_ColumnProps as ColumnProps,
    index_PageContainerProps as PageContainerProps,
    index_HorizontalDividerProps as HorizontalDividerProps,
    index_HorizontalSpacerProps as HorizontalSpacerProps,
    index_VerticalSpacerProps as VerticalSpacerProps,
    index_ChevronProps as ChevronProps,
    index_PointerProps as PointerProps,
    index_CrossProps as CrossProps,
    index_InputFieldColorConfig as InputFieldColorConfig,
    index_InputFieldColorModes as InputFieldColorModes,
    index_InputFieldProps as InputFieldProps,
    index_SearchBarColorConfig as SearchBarColorConfig,
    index_SearchBarColorModes as SearchBarColorModes,
    index_SearchBarProps as SearchBarProps,
    index_TagColorModes as TagColorModes,
    index_TagTypes as TagTypes,
    index_TagColorConfig as TagColorConfig,
    index_TagProps as TagProps,
    index_FontType as FontType,
    index_FontWeight as FontWeight,
    index_FontOverflow as FontOverflow,
    index_TypographyProps as TypographyProps,
  };
}

interface BackProps {
    color?: string;
    /**
     * back header heading
     */
    heading?: string;
    /**
     * onPress handler on back button
     */
    onPress?: (event: GestureResponderEvent) => void;
    rightElement?: React.ReactNode;
    textStyle?: FontNameSpace;
}

export { BackProps as B, CardProps as C, FontNameSpace as F, HeaderProps as H, InputFieldProps as I, PageContainerProps as P, RowProps as R, SearchBarProps as S, TagProps as T, VerticalSpacerProps as V, ButtonProps as a, ColumnProps as b, HorizontalDividerProps as c, HorizontalSpacerProps as d, ChevronProps as e, PointerProps as f, CrossProps as g, ButtonColorModes as h, index as i, ButtonVariants as j, ButtonKinds as k, ButtonSizes as l, ButtonSpacingConfig as m, ButtonElevationDirections as n, ButtonColorConfig as o, InputFieldColorConfig as p, InputFieldColorModes as q, SearchBarColorConfig as r, SearchBarColorModes as s, TagColorModes as t, TagTypes as u, TagColorConfig as v };
