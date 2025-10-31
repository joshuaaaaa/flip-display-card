import { css, unsafeCSS } from "lit";
// @ts-ignore: Will be loaded as string from parcel bundler
import flipStyles from "bundle-text:../node_modules/@pqina/flip/dist/flip.min.css";
// @ts-ignore: Will be loaded as string from parcel bundler
import customStyles from "bundle-text:./flip-display.css";

export const styles = css`
  ${unsafeCSS(flipStyles + '\n' + customStyles)}
`;
