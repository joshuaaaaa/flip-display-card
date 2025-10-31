# Flip Display Card for Home Assistant
[🇬🇧 English](README.md) | [🇨🇿 Čeština](README.cs.md)
A custom Home Assistant card that displays sensor values with a beautiful flip animation effect, similar to classic split-flap displays found in train stations and airports.

## Features

- 🎨 Smooth flip animation for number transitions
- 🎯 Configurable digits per card (1 or 2 digits)
- 🎭 Customizable styles and colors
- 📱 Tap action support
- 🖼️ Optional background hiding
- ⚡ Real-time value updates

## Preview

**Single digit per card:**
```
┌───┐ ┌───┐ ┌───┐ ┌───┐
│ 0 │ │ 0 │ │ 6 │ │ 3 │
└───┘ └───┘ └───┘ └───┘
```

**Two digits per card:**
```
┌────┐ ┌────┐ ┌────┐ ┌────┐
│ 01 │ │ 02 │ │ 04 │ │ 09 │
└────┘ └────┘ └────┘ └────┘
```

## Installation

### HACS (Recommended)
1. Add this repository to HACS as a custom repository
2. Search for "Flip Display Card" in HACS
3. Install the card
4. Add the card to your Lovelace configuration

### Manual Installation
1. Download `flip-display-card.js`
2. Copy it to `/config/www/` folder
3. Add resource reference in Lovelace:
```yaml
resources:
  - url: /local/flip-display-card.js
    type: module
```

## Configuration

### Basic Configuration

```yaml
type: custom:flip-display-card
entity: sensor.temperature
```

### Advanced Configuration

```yaml
type: custom:flip-display-card
entity: sensor.power_consumption
digits_per_card: 1          # 1 or 2 (default: 2)
hideBackground: false        # true or false (default: false)
tap_action:
  action: more-info
styles:
  fontSize: 3em
  height: 2em
  color: '#ff6600'
```

## Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `entity` | string | **required** | Entity ID to display |
| `digits_per_card` | number | `2` | Number of digits per card (1 or 2) |
| `hideBackground` | boolean | `false` | Hide card background |
| `tap_action` | object | - | Action to perform on tap |
| `styles` | object | - | Custom CSS properties |

### Digits Per Card

- **`digits_per_card: 1`** - Shows 4 cards with 1 digit each (0-9)
  - Displays up to 4-digit numbers
  - Example: `63` → `0` `0` `6` `3`
  
- **`digits_per_card: 2`** - Shows 4 cards with 2 digits each (00-99)
  - Displays up to 8-digit numbers
  - Example: `1234567` → `01` `23` `45` `67`

## Examples

### Temperature Sensor (Single Digit)
```yaml
type: custom:flip-display-card
entity: sensor.living_room_temperature
digits_per_card: 1
hideBackground: false
styles:
  fontSize: 3em
  color: '#2196F3'
```

### Counter (Double Digit)
```yaml
type: custom:flip-display-card
entity: sensor.visitor_counter
digits_per_card: 2
hideBackground: true
styles:
  fontSize: 2.5em
  height: 2.2em
```

### Power Consumption with Tap Action
```yaml
type: custom:flip-display-card
entity: sensor.power_consumption
digits_per_card: 1
tap_action:
  action: more-info
styles:
  fontSize: 4em
  color: '#ff9800'
```

## Custom Styles

You can customize the appearance using the `styles` property. Common options:

- `fontSize` - Size of the digits (e.g., `3em`, `48px`)
- `height` - Height of each card (e.g., `2em`)
- `color` - Text color (e.g., `#ff6600`, `red`)
- `background` - Background color
- Any other CSS property in camelCase

## Notes

- The card automatically removes decimal points and non-numeric characters
- Values are padded with zeros on the left if shorter than the display capacity
- For `digits_per_card: 1`, maximum 4 digits are shown
- For `digits_per_card: 2`, maximum 8 digits are shown
- The flip animation updates every second

## Credits

Built with [PQINA Tick](https://pqina.nl/tick/) library for the flip animation effect.

## License

MIT License

## Support

If you like this card, please ⭐ star this repository!

Found a bug or have a feature request? Please open an issue.
