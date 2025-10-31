# GitHub Repository Info

## Repository Description (krátký popis pro GitHub)

**English:**
```
Custom Home Assistant card with flip animation effect for displaying sensor values. Configurable single or double digit display per card.
```

**Czech:**
```
Vlastní Home Assistant karta s flip animací pro zobrazení hodnot senzorů. Konfigurovatelné zobrazení jedné nebo dvou číslic na kartu.
```

## Topics/Tags (štítky pro GitHub)
```
home-assistant
home-assistant-custom
lovelace
lovelace-card
flip-display
flip-animation
custom-card
sensor-display
smart-home
homeassistant
```

## Short Feature List (pro About sekci)
- ✨ Flip animation effect
- 🔢 1 or 2 digits per card
- 🎨 Fully customizable styles
- 📱 Mobile friendly
- ⚡ Real-time updates

---

# CHANGELOG

## [1.1.0] - 2024-10-31

### Added
- **New feature:** Configurable `digits_per_card` parameter
  - Option to display 1 digit per card (0-9)
  - Option to display 2 digits per card (00-99)
- Default configuration now includes `digits_per_card` parameter
- Extended documentation with examples

### Changed
- Modified `setup()` function to support dynamic digit configuration
- Updated `getDisplayValue()` function to handle both single and double digit modes
- Improved value parsing logic

### Technical Details
- Single digit mode: displays up to 4 digits (0-9 per card)
- Double digit mode: displays up to 8 digits (00-99 per card)
- Backward compatible: defaults to 2 digits per card if not specified

## [1.0.0] - Initial Release

### Features
- Flip animation effect for number transitions
- Support for any numeric Home Assistant sensor
- Customizable styles and colors
- Tap action support
- Background hiding option
- Automatic value updates every second
