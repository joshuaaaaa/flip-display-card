import { html, LitElement } from "lit";
import { state } from "lit/decorators/state";
import { styles } from "./flip-display.styles";
import { HomeAssistant, LovelaceCardConfig, ActionConfig } from "custom-card-helpers";

import Tick from '@pqina/flip';

// HA config object
interface Config extends LovelaceCardConfig {
  entity: string;
  hideBackground?: boolean;
  styles?: Styles;
  tap_action?: ActionConfig;
}

interface HassEvent extends Event {
  detail
}

// Available CSS options for the card
type Styles = {
  width?: string;
  height?: string;
  font?: string;
  fontSize?: string;
  textColor?: string;
  textOffsetHorizontal?: string;
  textOffsetVertical?: string;
  frontFlapColor?: string;
  frontFlapGradientOpacity?: string;
  frontFlapShadowOpacity?: string;
  rearFlapColor?: string;
  rearFlapVerticalOffset?: string;
}

// Value object for updating the flip-display
type DisplayValue = {
  digit1: number;
  digit2: number;
  digit3: number;
  digit4: number;
}

// The Flip-Display custom element
export class FlipDisplayCard extends LitElement {
  @state() private config: Config;

  // private properties
  private _hass: HomeAssistant;
  private _tick;
  private _timer;

  // required by HA
  setConfig(config: Config) {
    if (!config.entity) {
      throw new Error('Please define an entity');
    }
    
    this.config = config;
    // call set hass() to immediately adjust to a changed entity
    // while editing the entity in the card editor
    if (this._hass) {
      this.hass = this._hass;
    }

    if (!this._tick) {
      this.setup();
    }
  }

  // required by HA
  set hass(hass: HomeAssistant) {
    this._hass = hass;
    if (this._tick && this._hass) {
      this._tick.value = this.getDisplayValue();
    }
  }

  // Load styles using LitElement
  static styles = styles;

  // Add tap listener
  constructor() {
    super();
    this.addEventListener('click', (e) => this.handleTapAction(this.config));
  }

  // Create and configure the PQINA flip display
  setup() {
    // Setup 'flip' subviews for 4 digits
    const views = [
      { view: 'flip', transform: 'pad(00)', key: 'digit1' },
      { view: 'flip', transform: 'pad(00)', key: 'digit2' },
      { view: 'flip', transform: 'pad(00)', key: 'digit3' },
      { view: 'flip', transform: 'pad(00)', key: 'digit4' }
    ];

    // Create the main flip-display object
    this._tick = Tick.DOM.create({
      credits: false,
      view: {
        children: [{
          root: 'div',
          layout: 'horizontal fill',
          children: views
        }]
      },
      didInit: (tick) => {
        // Add timer to update the display each second
        this._timer = Tick.helper.interval(
          () => {
            tick.value = this.getDisplayValue();
          },
          1000
        );
      }
    });
  }

  // Lit callback where we (re)start the timer when the display is shown (again)
  connectedCallback() {
    super.connectedCallback();
    this._timer?.reset();
  }

  // Lit callback where we stop the timer when the display is removed
  disconnectedCallback() {
    super.disconnectedCallback();
    this._timer?.stop();
  }

  // Lit callback for the HTML template
  render() {
    return html`
      <ha-card>
        <div class="card-content">
          <div class="clock-container"></div>
        </div>
      </ha-card>
    `;
  }

  // Lit callback when the HTML template was loaded / updated
  updated() {
    // HTML template re-created? Add display to new parent
    const parent = this._tick.root.parentNode;
    if (parent) {
      parent.removeChild(this._tick.root);
    }
    this.shadowRoot.querySelector('.clock-container').appendChild(this._tick.root);

    this.updateCssVars();
  }

  // Apply the CSS vars according the config options set by the user
  updateCssVars() {
    const card: HTMLElement = this.shadowRoot.querySelector('ha-card');
    card.style.setProperty('--ha-card-border-color', this.config.hideBackground ? 'transparent' : '');
    card.style.setProperty('--ha-card-background', this.config.hideBackground ? 'transparent' : '');

    // Set default sizes
    card.style.setProperty('--height', '1.8em');
    card.style.setProperty('--font-size', '2em');

    const cardContent: HTMLElement = this.shadowRoot.querySelector('.card-content');

    if (this.config.styles) {
      Object.entries(this.config.styles).forEach(([key, value]) => {
        const kebapCaseKey = key.replace(/([a-zA-Z])(?=[A-Z])/g,'$1-').toLowerCase()
        cardContent.style.setProperty(`--${kebapCaseKey}`, value || "");
      });
    }
  }

  // Called each second by the flip-display timer to update the shown values
  getDisplayValue(): DisplayValue {
    if (!this.config.entity || !this._hass) {
      return { digit1: 0, digit2: 0, digit3: 0, digit4: 0 };
    }

    const entity = this._hass.states[this.config.entity];
    if (!entity) {
      return { digit1: 0, digit2: 0, digit3: 0, digit4: 0 };
    }

    let value = String(entity.state);
    
    // Clean value - remove non-digits and dots
    value = value.replace(/[^\d.]/g, '');
    value = value.replace(/\./g, '');
    value = value.slice(0, 4);
    value = value.padStart(4, '0');
    
    return {
      digit1: parseInt(value[0]) || 0,
      digit2: parseInt(value[1]) || 0,
      digit3: parseInt(value[2]) || 0,
      digit4: parseInt(value[3]) || 0
    };
  }

  // Call user configured tap action
  private handleTapAction(config: Config) {
    if (config.tap_action) {
      const actionConfig = {
        entity: config.entity,
        tap_action: config.tap_action
      };

      const event: HassEvent = new Event("hass-action", {
        bubbles: true,
        composed: true
      }) as HassEvent;

      event.detail = {
        config: actionConfig,
        action: "tap",
      };

      this.dispatchEvent(event);
    }
  }

  // Required for card editor
  static getConfigElement() {
    return document.createElement('flip-display-card-editor');
  }

  static getStubConfig() {
    return {
      entity: 'sensor.example',
      hideBackground: false
    };
  }
}
