# Flip Display Card pro Home Assistant

Vlastní karta pro Home Assistant, která zobrazuje hodnoty senzorů s krásnou flip animací, podobnou klasickým překlápěcím displejům ze železničních stanic a letišť.

## Funkce

- 🎨 Plynulá flip animace při změně čísel
- 🎯 Konfigurovatelný počet číslic na kartu (1 nebo 2 číslice)
- 🎭 Přizpůsobitelné styly a barvy
- 📱 Podpora akcí po kliknutí
- 🖼️ Možnost skrýt pozadí
- ⚡ Aktualizace hodnot v reálném čase

## Náhled

**Jedna číslice na kartu:**
```
┌───┐ ┌───┐ ┌───┐ ┌───┐
│ 0 │ │ 0 │ │ 6 │ │ 3 │
└───┘ └───┘ └───┘ └───┘
```

**Dvě číslice na kartu:**
```
┌────┐ ┌────┐ ┌────┐ ┌────┐
│ 01 │ │ 02 │ │ 04 │ │ 09 │
└────┘ └────┘ └────┘ └────┘
```

## Instalace

### HACS (Doporučeno)
1. Přidejte tento repozitář do HACS jako vlastní repozitář
2. Vyhledejte "Flip Display Card" v HACS
3. Nainstalujte kartu
4. Přidejte kartu do vaší Lovelace konfigurace

### Manuální instalace
1. Stáhněte soubor `flip-display-card.js`
2. Zkopírujte ho do složky `/config/www/`
3. Přidejte odkaz na zdroj v Lovelace:
```yaml
resources:
  - url: /local/flip-display-card.js
    type: module
```

## Konfigurace

### Základní konfigurace

```yaml
type: custom:flip-display-card
entity: sensor.temperature
```

### Pokročilá konfigurace

```yaml
type: custom:flip-display-card
entity: sensor.power_consumption
digits_per_card: 1          # 1 nebo 2 (výchozí: 2)
hideBackground: false        # true nebo false (výchozí: false)
tap_action:
  action: more-info
styles:
  fontSize: 3em
  height: 2em
  color: '#ff6600'
```

## Možnosti konfigurace

| Možnost | Typ | Výchozí | Popis |
|---------|-----|---------|-------|
| `entity` | string | **povinné** | ID entity k zobrazení |
| `digits_per_card` | číslo | `2` | Počet číslic na kartu (1 nebo 2) |
| `hideBackground` | boolean | `false` | Skrýt pozadí karty |
| `tap_action` | objekt | - | Akce při kliknutí |
| `styles` | objekt | - | Vlastní CSS vlastnosti |

### Počet číslic na kartu

- **`digits_per_card: 1`** - Zobrazí 4 karty s 1 číslicí (0-9)
  - Zobrazí až 4-místná čísla
  - Příklad: `63` → `0` `0` `6` `3`
  
- **`digits_per_card: 2`** - Zobrazí 4 karty se 2 číslicemi (00-99)
  - Zobrazí až 8-místná čísla
  - Příklad: `1234567` → `01` `23` `45` `67`

## Příklady použití

### Teplotní senzor (jedna číslice)
```yaml
type: custom:flip-display-card
entity: sensor.living_room_temperature
digits_per_card: 1
hideBackground: false
styles:
  fontSize: 3em
  color: '#2196F3'
```

### Počítadlo (dvě číslice)
```yaml
type: custom:flip-display-card
entity: sensor.visitor_counter
digits_per_card: 2
hideBackground: true
styles:
  fontSize: 2.5em
  height: 2.2em
```

### Spotřeba energie s akcí
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

## Vlastní styly

Vzhled můžete přizpůsobit pomocí vlastnosti `styles`. Běžné možnosti:

- `fontSize` - Velikost číslic (např. `3em`, `48px`)
- `height` - Výška každé karty (např. `2em`)
- `color` - Barva textu (např. `#ff6600`, `red`)
- `background` - Barva pozadí
- Jakákoli jiná CSS vlastnost v camelCase formátu

## Poznámky

- Karta automaticky odstraní desetinné tečky a nečíselné znaky
- Hodnoty se zleva doplní nulami, pokud jsou kratší než kapacita displeje
- Pro `digits_per_card: 1` se zobrazí maximálně 4 číslice
- Pro `digits_per_card: 2` se zobrazí maximálně 8 číslic
- Flip animace se aktualizuje každou sekundu

## Poděkování

Vytvořeno s knihovnou [PQINA Tick](https://pqina.nl/tick/) pro flip animační efekt.

## Licence

MIT License

## Podpora

Pokud se vám tato karta líbí, prosím ⭐ označte tento repozitář hvězdičkou!

Našli jste chybu nebo máte nápad na vylepšení? Vytvořte prosím issue.
