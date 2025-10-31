import { FlipDisplayCard } from "./flip-display";

declare global {
  interface Window {
    customCards: Array<Object>;
  }
}

customElements.define("flip-display-card", FlipDisplayCard);

// Register with HA
window.customCards = window.customCards || [];
window.customCards.push({
  type: "flip-display-card",
  name: "Flip Display Card",
  description: "A flip display card for showing sensor values in Home Assistant",
});
