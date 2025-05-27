'use client';

import {vars} from 'nativewind';

export const config = {
  light: vars({
    /* Primary (Light Mode) */
    '--color-primary-0': '252 240 230',
    '--color-primary-50': '250 230 215',
    '--color-primary-100': '245 220 200',
    '--color-primary-200': '240 200 170',
    '--color-primary-300': '235 180 140',
    '--color-primary-400': '225 150 100',
    '--color-primary-500': '209 113 44', // #D1712C - (primary in Figma)
    '--color-primary-600': '195 105 42',
    '--color-primary-700': '173 96 41', // #AD6029 - (primary-dark in Figma)
    '--color-primary-800': '150 85 35',
    '--color-primary-900': '120 70 30',
    '--color-primary-950': '90 50 20',

    /* Secondary */
    '--color-secondary-0': '180 180 180',
    '--color-secondary-50': '170 170 170',
    '--color-secondary-100': '160 160 160',
    '--color-secondary-200': '125 125 125',
    '--color-secondary-300': '85 85 85', // #555555 - secondary in Figma
    '--color-secondary-400': '75 75 75',
    '--color-secondary-500': '68 68 68', // #444444 - secondary-dark in Figma
    '--color-secondary-600': '56 56 56',
    '--color-secondary-700': '47 47 47',
    '--color-secondary-800': '38 38 38',
    '--color-secondary-900': '29 29 29',
    '--color-secondary-950': '20 20 20',

    /* Contrast */
    '--color-contrast-0': '255 255 255',
    '--color-contrast-50': '240 240 240',
    '--color-contrast-100': '225 225 225',
    '--color-contrast-200': '200 200 200',
    '--color-contrast-300': '175 175 175',
    '--color-contrast-400': '150 150 150',
    '--color-contrast-500': '125 125 125',
    '--color-contrast-600': '100 100 100',
    '--color-contrast-700': '75 75 75',
    '--color-contrast-800': '50 50 50',
    '--color-contrast-900': '25 25 25',
    '--color-contrast-950': '0 0 0',

    /* Tertiary */
    '--color-tertiary-0': '140 140 140',
    '--color-tertiary-50': '125 125 125',
    '--color-tertiary-100': '110 110 110',
    '--color-tertiary-200': '95 95 95',
    '--color-tertiary-300': '80 80 80',
    '--color-tertiary-400': '65 65 65',
    '--color-tertiary-500': '36 36 36', // #242424 - tertiary in Figma
    '--color-tertiary-600': '32 32 32',
    '--color-tertiary-700': '28 28 28',
    '--color-tertiary-800': '24 24 24',
    '--color-tertiary-900': '20 20 20',
    '--color-tertiary-950': '15 15 15',

    /* Error */
    '--color-error-0': '254 233 233',
    '--color-error-50': '254 226 226',
    '--color-error-100': '254 202 202',
    '--color-error-200': '252 165 165',
    '--color-error-300': '248 113 113',
    '--color-error-400': '239 68 68',
    '--color-error-500': '230 53 53',
    '--color-error-600': '220 38 38',
    '--color-error-700': '185 28 28',
    '--color-error-800': '153 27 27',
    '--color-error-900': '127 29 29',
    '--color-error-950': '83 19 19',

    /* Success */
    '--color-success-0': '228 255 244',
    '--color-success-50': '202 255 232',
    '--color-success-100': '162 241 192',
    '--color-success-200': '132 211 162',
    '--color-success-300': '102 181 132',
    '--color-success-400': '72 151 102',
    '--color-success-500': '52 131 82',
    '--color-success-600': '42 121 72',
    '--color-success-700': '32 111 62',
    '--color-success-800': '22 101 52',
    '--color-success-900': '20 83 45',
    '--color-success-950': '27 50 36',

    /* Warning */
    '--color-warning-0': '255 249 245',
    '--color-warning-50': '255 244 236',
    '--color-warning-100': '255 231 213',
    '--color-warning-200': '254 205 170',
    '--color-warning-300': '253 173 116',
    '--color-warning-400': '251 149 75',
    '--color-warning-500': '231 120 40',
    '--color-warning-600': '215 108 31',
    '--color-warning-700': '180 90 26',
    '--color-warning-800': '130 68 23',
    '--color-warning-900': '108 56 19',
    '--color-warning-950': '84 45 18',

    /* Info */
    '--color-info-0': '236 248 254',
    '--color-info-50': '199 235 252',
    '--color-info-100': '162 221 250',
    '--color-info-200': '124 207 248',
    '--color-info-300': '87 194 246',
    '--color-info-400': '50 180 244',
    '--color-info-500': '13 166 242',
    '--color-info-600': '11 141 205',
    '--color-info-700': '9 115 168',
    '--color-info-800': '7 90 131',
    '--color-info-900': '5 64 93',
    '--color-info-950': '3 38 56',

    /* Typography */
    '--color-typography-0': '180 180 180',
    '--color-typography-50': '160 160 160',
    '--color-typography-100': '140 140 140', // #8E8E8E - text-secondary in Figma
    '--color-typography-200': '120 120 120',
    '--color-typography-300': '100 100 100',
    '--color-typography-400': '80 80 80',
    '--color-typography-500': '70 70 70',
    '--color-typography-600': '60 60 60',
    '--color-typography-700': '50 50 50',
    '--color-typography-800': '40 40 40',
    '--color-typography-900': '30 30 30',
    '--color-typography-950': '20 20 20',

    /* Outline */
    '--color-outline-0': '253 254 254',
    '--color-outline-50': '243 243 243',
    '--color-outline-100': '230 230 230',
    '--color-outline-200': '221 220 219',
    '--color-outline-300': '211 211 211',
    '--color-outline-400': '165 163 163',
    '--color-outline-500': '140 141 141',
    '--color-outline-600': '115 116 116',
    '--color-outline-700': '83 82 82',
    '--color-outline-800': '65 65 65',
    '--color-outline-900': '39 38 36',
    '--color-outline-950': '26 23 23',

    /* Background  */
    '--color-background-0': '255 255 255',
    '--color-background-50': '250 250 250',
    '--color-background-100': '245 245 245',
    '--color-background-200': '240 240 240',
    '--color-background-300': '235 235 235',
    '--color-background-400': '230 230 230',
    '--color-background-500': '225 225 225',
    '--color-background-600': '220 220 220',
    '--color-background-700': '210 210 210',
    '--color-background-800': '200 200 200',
    '--color-background-900': '190 190 190',
    '--color-background-950': '180 180 180',

    /* Background Special */
    '--color-background-error': '254 241 241',
    '--color-background-warning': '255 243 234',
    '--color-background-success': '237 252 242',
    '--color-background-muted': '247 248 247',
    '--color-background-info': '235 248 254',

    /* Focus Ring Indicator  */
    '--color-indicator-primary': '209 113 44', // #D1712C - (primary in Figma)
    '--color-indicator-info': '83 153 236',
    '--color-indicator-error': '185 28 28',
  }),
  dark: vars({
    /* Primary  */
    '--color-primary-0': '60 32 13',
    '--color-primary-50': '87 48 20',
    '--color-primary-100': '110 60 25',
    '--color-primary-200': '130 72 30',
    '--color-primary-300': '148 82 35',
    '--color-primary-400': '160 90 38',
    '--color-primary-500': '173 96 41', // #AD6029 - primary-dark in Figma
    '--color-primary-600': '190 104 42',
    '--color-primary-700': '209 113 44', // #D1712C - primary in Figma
    '--color-primary-800': '223 140 78',
    '--color-primary-900': '237 181 135',
    '--color-primary-950': '252 223 198',

    /* Secondary */
    '--color-secondary-0': '40 40 40',
    '--color-secondary-50': '50 50 50',
    '--color-secondary-100': '58 58 58',
    '--color-secondary-200': '65 65 65',
    '--color-secondary-300': '68 68 68', // #444444 - secondary-dark in Figma
    '--color-secondary-400': '75 75 75',
    '--color-secondary-500': '85 85 85', // #555555 - secondary in Figma
    '--color-secondary-600': '100 100 100',
    '--color-secondary-700': '120 120 120',
    '--color-secondary-800': '140 140 140',
    '--color-secondary-900': '165 165 165',
    '--color-secondary-950': '190 190 190',

    /* Contrast */
    '--color-contrast-0': '0 0 0',
    '--color-contrast-50': '25 25 25',
    '--color-contrast-100': '50 50 50',
    '--color-contrast-200': '75 75 75',
    '--color-contrast-300': '100 100 100',
    '--color-contrast-400': '125 125 125',
    '--color-contrast-500': '150 150 150',
    '--color-contrast-600': '175 175 175',
    '--color-contrast-700': '200 200 200',
    '--color-contrast-800': '225 225 225',
    '--color-contrast-900': '240 240 240',
    '--color-contrast-950': '255 255 255',

    /* Tertiary */
    '--color-tertiary-0': '15 15 15',
    '--color-tertiary-50': '20 20 20',
    '--color-tertiary-100': '25 25 25',
    '--color-tertiary-200': '30 30 30',
    '--color-tertiary-300': '32 32 32',
    '--color-tertiary-400': '34 34 34',
    '--color-tertiary-500': '36 36 36', // #242424 - tertiary in Figma
    '--color-tertiary-600': '60 60 60',
    '--color-tertiary-700': '85 85 85',
    '--color-tertiary-800': '110 110 110',
    '--color-tertiary-900': '135 135 135',
    '--color-tertiary-950': '160 160 160',

    /* Error */
    '--color-error-0': '83 19 19',
    '--color-error-50': '127 29 29',
    '--color-error-100': '153 27 27',
    '--color-error-200': '185 28 28',
    '--color-error-300': '220 38 38',
    '--color-error-400': '230 53 53',
    '--color-error-500': '239 68 68',
    '--color-error-600': '249 97 96',
    '--color-error-700': '229 91 90',
    '--color-error-800': '254 202 202',
    '--color-error-900': '254 226 226',
    '--color-error-950': '254 233 233',

    /* Success */
    '--color-success-0': '27 50 36',
    '--color-success-50': '20 83 45',
    '--color-success-100': '22 101 52',
    '--color-success-200': '32 111 62',
    '--color-success-300': '42 121 72',
    '--color-success-400': '52 131 82',
    '--color-success-500': '72 151 102',
    '--color-success-600': '102 181 132',
    '--color-success-700': '132 211 162',
    '--color-success-800': '162 241 192',
    '--color-success-900': '202 255 232',
    '--color-success-950': '228 255 244',

    /* Warning */
    '--color-warning-0': '84 45 18',
    '--color-warning-50': '108 56 19',
    '--color-warning-100': '130 68 23',
    '--color-warning-200': '180 90 26',
    '--color-warning-300': '215 108 31',
    '--color-warning-400': '231 120 40',
    '--color-warning-500': '251 149 75',
    '--color-warning-600': '253 173 116',
    '--color-warning-700': '254 205 170',
    '--color-warning-800': '255 231 213',
    '--color-warning-900': '255 244 237',
    '--color-warning-950': '255 249 245',

    /* Info */
    '--color-info-0': '3 38 56',
    '--color-info-50': '5 64 93',
    '--color-info-100': '7 90 131',
    '--color-info-200': '9 115 168',
    '--color-info-300': '11 141 205',
    '--color-info-400': '13 166 242',
    '--color-info-500': '50 180 244',
    '--color-info-600': '87 194 246',
    '--color-info-700': '124 207 248',
    '--color-info-800': '162 221 250',
    '--color-info-900': '199 235 252',
    '--color-info-950': '236 248 254',

    /* Typography */
    '--color-typography-0': '20 20 20',
    '--color-typography-50': '40 40 40',
    '--color-typography-100': '60 60 60',
    '--color-typography-200': '80 80 80',
    '--color-typography-300': '100 100 100',
    '--color-typography-400': '120 120 120',
    '--color-typography-500': '142 142 142', // #8E8E8E - text-secondary in Figma
    '--color-typography-600': '165 165 165',
    '--color-typography-700': '190 190 190',
    '--color-typography-800': '215 215 215',
    '--color-typography-900': '235 235 235',
    '--color-typography-950': '255 255 255', // #FFFFFF - text-primary in Figma

    /* Outline */
    '--color-outline-0': '20 20 20',
    '--color-outline-50': '25 25 25',
    '--color-outline-100': '30 30 30',
    '--color-outline-200': '35 35 35',
    '--color-outline-300': '45 45 45',
    '--color-outline-400': '50 50 50',
    '--color-outline-500': '55 55 55', // #373737 - border in Figma
    '--color-outline-600': '75 75 75',
    '--color-outline-700': '100 100 100',
    '--color-outline-800': '125 125 125',
    '--color-outline-900': '150 150 150',
    '--color-outline-950': '175 175 175',

    /* Background */
    '--color-background-0': '16 16 16', // #0F0F0F - (background in Figma)
    '--color-background-50': '18 18 18',
    '--color-background-100': '20 20 20',
    '--color-background-200': '22 22 22',
    '--color-background-300': '24 24 24',
    '--color-background-400': '26 26 26',
    '--color-background-500': '27 27 27',
    '--color-background-600': '27 27 27', // #1B1B1B - (surface in Figma)
    '--color-background-700': '40 40 40',
    '--color-background-800': '55 55 55',
    '--color-background-900': '70 70 70',
    '--color-background-950': '85 85 85',

    /* Background Special */
    '--color-background-error': '66 43 43',
    '--color-background-warning': '65 47 35',
    '--color-background-success': '28 43 33',
    '--color-background-muted': '51 51 51',
    '--color-background-info': '26 40 46',

    /* Focus Ring Indicator  */
    '--color-indicator-primary': '209 113 44', // #D1712C - primary in Figma
    '--color-indicator-info': '161 199 245',
    '--color-indicator-error': '232 70 69',
  }),
};
