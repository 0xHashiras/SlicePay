import { TextProps } from 'react-native';

declare type FontType = 'heading' | 'caps' | 'body' | 'serif-heading';
declare enum FontWeight {
    EXTRA_BOLD = "800",
    BOLD = "700",
    SEMI_BOLD = "600",
    MEDIUM = "500",
    REGULAR = "400",
    THIN = "300"
}
declare type FontOverflow = 'ellipsis' | 'clip';
interface TypographyProps extends TextProps {
    /**
     * as paragraph/span
     */
    as?: 'p' | 'span';
    /**
     * text content
     */
    children: React.ReactNode;
    /**
     * text color
     */
    color?: string;
    /**
     * font size
     */
    fontSize: number;
    /**
     * typography variant
     */
    fontType: FontType;
    /**
     * font weight
     */
    fontWeight: FontWeight;
    /**
     * line-clamp to truncate text at a specific number of lines
     */
    lineClamp?: number;
    /**
     * text overflow
     */
    overflow?: FontOverflow;
}

export { FontWeight as F, TypographyProps as T, FontType as a, FontOverflow as b };
