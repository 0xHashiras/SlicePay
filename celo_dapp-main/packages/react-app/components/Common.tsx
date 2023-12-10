import { colorPalette, mainColors } from "@cred/neopop-web/lib/primitives";
import { hexToRGBA } from "@cred/neopop-web/lib/utils";

export const colorConfig = {
    backgroundColor: mainColors.black,
    color: mainColors.white,
    borderColor: '#E5FE40',
    edgeColors: { right: '#A2B42D', bottom: '#67721F', top: 'transparent', left: 'transparent' },
    disabledColors: {
        backgroundColor: colorPalette.black[50],
        color: hexToRGBA(mainColors.white, 0.5),
        edgeColors: {
            top: 'transparent',
            left: 'transparent',
            right: colorPalette.white[70],
            bottom: colorPalette.white[50],
        },
    },
};