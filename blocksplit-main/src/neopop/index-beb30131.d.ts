import { h as ButtonColorModes, j as ButtonVariants, k as ButtonKinds, l as ButtonSizes, m as ButtonSpacingConfig, F as FontNameSpace } from './types-c721aa45.js';

declare const getButtonColors: (mode: ButtonColorModes, variant: ButtonVariants, kind: ButtonKinds) => {
    mode: ButtonColorModes;
    edgeColors: {
        top: string;
        left: string;
        bottom: string;
        right: string;
    } | {
        top: string;
        left: string;
        bottom: string;
        right: string;
    };
    backgroundColor: string;
    color: string;
    disabledColors: {
        backgroundColor: string;
        color: string;
        edgeColors: {
            top: string;
            left: string;
            right: string;
            bottom: string;
        };
    };
} | {
    mode: ButtonColorModes;
    edgeColors: {
        top: string;
        left: string;
        bottom: string;
        right: string;
    } | {
        top: string;
        left: string;
        bottom: string;
        right: string;
    };
    backgroundColor: string;
    color: string;
    borderColor: string;
    disabledColors: {
        backgroundColor: string;
        color: string;
        borderColor: string;
        edgeColors: {
            top: string;
            left: string;
            right: string;
            bottom: string;
        };
    };
};
declare const getSpacingConfig: (size: ButtonSizes) => ButtonSpacingConfig;
declare const getTextStyle: (size: ButtonSizes) => FontNameSpace;
declare const getButtonConfig: (name: string) => {
    colorConfig: {
        mode: ButtonColorModes;
        edgeColors: {
            top: string;
            left: string;
            bottom: string;
            right: string;
        } | {
            top: string;
            left: string;
            bottom: string;
            right: string;
        };
        backgroundColor: string;
        color: string;
        disabledColors: {
            backgroundColor: string;
            color: string;
            edgeColors: {
                top: string;
                left: string;
                right: string;
                bottom: string;
            };
        };
    } | {
        mode: ButtonColorModes;
        edgeColors: {
            top: string;
            left: string;
            bottom: string;
            right: string;
        } | {
            top: string;
            left: string;
            bottom: string;
            right: string;
        };
        backgroundColor: string;
        color: string;
        borderColor: string;
        disabledColors: {
            backgroundColor: string;
            color: string;
            borderColor: string;
            edgeColors: {
                top: string;
                left: string;
                right: string;
                bottom: string;
            };
        };
    };
    spacingConfig: ButtonSpacingConfig;
    colorMode: "dark" | "light";
    size: "big" | "medium" | "small";
    kind: "flat" | "elevated";
    variant: "primary" | "secondary";
    showArrow: boolean;
};

declare let mainColors: Readonly<{
    black: "#0D0D0D";
    white: "#FFFFFF";
    red: "#EE4D37";
    yellow: "#F08D32";
    blue: "#144CC7";
    green: "#06C270";
}>;
declare let colorPalette: Readonly<{
    white: {
        50: string;
        70: string;
        90: string;
    };
    popWhite: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
    };
    popBlack: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
    };
    black: {
        50: string;
        70: string;
        90: string;
        100: string;
    };
    poliPurple: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
    };
    orangeSunshine: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
    };
    parkGreen: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
    };
    pinkPong: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
    };
    mannna: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
    };
    neoPaccha: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
    };
    yoyo: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
    };
    error: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
    };
    warning: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
    };
    info: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
    };
    success: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
    };
}>;
declare let colorGuide: {
    mainAppBackground: string;
    darkComponents: {
        font: {
            heading: string;
            subHeading: string;
            bodyText: string;
            bodyTextLighter: string;
        };
        containerCard: {
            background: string;
            stroke: string;
        };
        bottomSheet: {};
        toast: {
            success: {
                background: string;
                color: string;
            };
            warning: {
                background: string;
                color: string;
            };
            error: {
                background: string;
                color: string;
            };
        };
        searchBar: {
            border: string;
            activeBorder: string;
            backgroundColor: string;
            closeIcon: string;
        };
        tags: {
            warning: {
                background: string;
                color: string;
            };
            error: {
                background: string;
                color: string;
            };
            success: {
                background: string;
                color: string;
            };
            info: {
                background: string;
                color: string;
            };
        };
        checkbox: {
            background: string;
            border: string;
            leftPlunk: string;
            topPlunk: string;
        };
        inputFields: {
            textColor: string;
            labelColor: string;
            caretColor: string;
            errorColor: string;
            placeholderColor: string;
        };
        toggle: {
            on: {
                switchBackground: string;
                switchBorder: string;
                buttonBackground: string;
                buttonBorder: string;
                buttonMarkBackground: string;
            };
            off: {
                switchBackground: string;
                switchBorder: string;
                buttonBackground: string;
                buttonBorder: string;
                buttonMarkBackground: string;
            };
        };
        radio: {
            background: string;
            border: string;
            plunk: string;
            dotBackground: string;
            containerConfig: {
                color: string;
                backgroundColor: string;
                borderColor: string;
                activeBackgroundColor: string;
                activeBorderColor: string;
            };
        };
        dropdown: {
            withLabel: {
                text: string;
                border: string;
                chevron: string;
            };
            withoutLabel: {
                text: string;
                border: string;
                chevron: string;
            };
        };
        scoremeter: {
            meterStrokeColor: {
                excellent: string;
                average: string;
                poor: string;
            };
            meterStrokeBackground: string;
            meterBorderColor: string;
            dotColor: string;
            indicatorColors: {
                neutral: string;
                increment: string;
                decrement: string;
            };
            scoreContainerBackground: string;
            scoreContainerBorder: string;
            scoreColor: string;
        };
        buttons: {
            primary: {
                backgroundColor: string;
                color: string;
                edgeColors: {
                    bottom: string;
                    right: string;
                    top: string;
                    left: string;
                };
                disabledColors: {
                    backgroundColor: string;
                    color: string;
                    edgeColors: {
                        top: string;
                        left: string;
                        right: string;
                        bottom: string;
                    };
                };
            };
            secondary: {
                backgroundColor: string;
                color: string;
                borderColor: string;
                edgeColors: {
                    bottom: string;
                    right: string;
                    left: string;
                    top: string;
                };
                disabledColors: {
                    backgroundColor: string;
                    color: string;
                    borderColor: string;
                    edgeColors: {
                        top: string;
                        left: string;
                        right: string;
                        bottom: string;
                    };
                };
            };
        };
    };
    lightComponents: {
        font: {
            heading: string;
            subHeading: string;
            bodyText: string;
            bodyTextLighter: string;
        };
        containerCard: {
            background: string;
            stroke: string;
        };
        searchBar: {
            border: string;
            activeBorder: string;
            backgroundColor: string;
            closeIcon: string;
        };
        bottomSheet: {};
        toast: {
            success: {
                background: string;
                color: string;
            };
            warning: {
                background: string;
                color: string;
            };
            error: {
                background: string;
                color: string;
            };
        };
        dropdown: {
            withLabel: {
                text: string;
                border: string;
                chevron: string;
            };
            withoutLabel: {
                text: string;
                border: string;
                chevron: string;
            };
        };
        scoremeter: {
            meterStrokeColor: {
                excellent: string;
                average: string;
                poor: string;
            };
            meterStrokeBackground: string;
            meterBorderColor: string;
            dotColor: string;
            indicatorColors: {
                neutral: string;
                increment: string;
                decrement: string;
            };
            scoreContainerBackground: string;
            scoreContainerBorder: string;
            scoreColor: string;
        };
        tags: {
            warning: {
                background: string;
                color: string;
            };
            error: {
                background: string;
                color: string;
            };
            success: {
                background: string;
                color: string;
            };
            info: {
                background: string;
                color: string;
            };
        };
        checkbox: {
            background: string;
            border: string;
            leftPlunk: string;
            topPlunk: string;
        };
        inputFields: {
            textColor: string;
            labelColor: string;
            caretColor: string;
            errorColor: string;
            placeholderColor: string;
        };
        buttons: {
            primary: {
                backgroundColor: string;
                color: string;
                edgeColors: {
                    bottom: string;
                    right: string;
                    top: string;
                    left: string;
                };
                disabledColors: {
                    backgroundColor: string;
                    color: string;
                    edgeColors: {
                        top: string;
                        left: string;
                        right: string;
                        bottom: string;
                    };
                };
            };
            secondary: {
                backgroundColor: string;
                color: string;
                borderColor: string;
                edgeColors: {
                    bottom: string;
                    top: string;
                    right: string;
                    left: string;
                };
                disabledColors: {
                    backgroundColor: string;
                    color: string;
                    borderColor: string;
                    edgeColors: {
                        top: string;
                        left: string;
                        right: string;
                        bottom: string;
                    };
                };
            };
        };
        toggle: {
            on: {
                switchBackground: string;
                switchBorder: string;
                buttonBackground: string;
                buttonBorder: string;
                buttonMarkBackground: string;
            };
            off: {
                switchBackground: string;
                switchBorder: string;
                buttonBackground: string;
                buttonBorder: string;
                buttonMarkBackground: string;
            };
        };
        radio: {
            background: string;
            border: string;
            plunk: string;
            dotBackground: string;
            containerConfig: {
                color: string;
                backgroundColor: string;
                borderColor: string;
                activeBackgroundColor: string;
                activeBorderColor: string;
            };
        };
    };
};
interface UserTheme {
    colorGuide?: typeof colorGuide;
    colorPalette?: typeof colorPalette;
    mainColors?: typeof mainColors;
}
declare const extend: (themeOverwrite: UserTheme) => void;

declare const fontOpacity: {
    heading: number;
    subHeading: number;
    bodyText: number;
    bodyTextLighter: number;
};

declare const fontNameSpaces: Record<string, FontNameSpace>;
declare const fontVariant: Record<string, FontNameSpace>;
declare const typographyGuide: {
    back: {
        heading: FontNameSpace;
    };
    header: {
        heading: FontNameSpace;
        description: FontNameSpace;
    };
    containerCard: {
        heading: FontNameSpace;
        description: FontNameSpace;
    };
    bottomSheet: {};
    tags: {
        containerText: FontNameSpace;
        noContainerText: FontNameSpace;
    };
    searchBar: {
        input: FontNameSpace;
    };
    buttons: {
        big: FontNameSpace;
        medium: FontNameSpace;
        small: FontNameSpace;
    };
    checkbox: {};
    toast: {
        heading: FontNameSpace;
        description: FontNameSpace;
    };
    inputFields: {
        label: FontNameSpace;
        text: FontNameSpace;
    };
};

declare const enum PlunkProps {
    WIDTH = 3,
    ANGLE = 45
}

type index_PlunkProps = PlunkProps;
declare const index_PlunkProps: typeof PlunkProps;
declare const index_getButtonColors: typeof getButtonColors;
declare const index_getSpacingConfig: typeof getSpacingConfig;
declare const index_getTextStyle: typeof getTextStyle;
declare const index_getButtonConfig: typeof getButtonConfig;
declare const index_mainColors: typeof mainColors;
declare const index_colorPalette: typeof colorPalette;
declare const index_colorGuide: typeof colorGuide;
declare const index_extend: typeof extend;
declare const index_fontOpacity: typeof fontOpacity;
declare const index_fontNameSpaces: typeof fontNameSpaces;
declare const index_fontVariant: typeof fontVariant;
declare const index_typographyGuide: typeof typographyGuide;
declare namespace index {
  export {
    index_PlunkProps as PlunkProps,
    index_getButtonColors as getButtonColors,
    index_getSpacingConfig as getSpacingConfig,
    index_getTextStyle as getTextStyle,
    index_getButtonConfig as getButtonConfig,
    index_mainColors as mainColors,
    index_colorPalette as colorPalette,
    index_colorGuide as colorGuide,
    index_extend as extend,
    index_fontOpacity as fontOpacity,
    index_fontNameSpaces as fontNameSpaces,
    index_fontVariant as fontVariant,
    index_typographyGuide as typographyGuide,
  };
}

export { PlunkProps as P, getSpacingConfig as a, getTextStyle as b, getButtonConfig as c, colorPalette as d, colorGuide as e, extend as f, getButtonColors as g, fontOpacity as h, index as i, fontNameSpaces as j, fontVariant as k, mainColors as m, typographyGuide as t };
