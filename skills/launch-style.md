# Skill: Launch style

Read when: changing the look of, or adding a section to, a shop started from the Launch template.

Launch: a product launch at night. Bricolage Grotesque at full weight for display, Inter for reading, deep navy, rounded surfaces and a warm glow that follows the shop's accent.

- The look is `src/theme.css`: change a token there first (colours, fonts, radius, spacing), then a single rule. This template's tokens: `--shop-bg: #0b1220`, `--shop-ink: #f1f5f9`, `--shop-font-body: 'Inter', sans-serif`, `--shop-font-display: 'Bricolage Grotesque', sans-serif`, `--shop-radius-button: 999px`, `--shop-radius-card: 20px`.
- `--shop-accent` is the merchant's brand colour on a live shop. Never build a large panel or a background on it; big tinted surfaces use this file's own colours.
- A new section takes the look from the tokens. Style it with a `section[data-section-type="<type>"]` rule in `src/theme.css`, in the voice of the rules already there.
- This template's own placeholder copy stays generic for the vertical (One hero product or a limited drop) and promises nothing: no delivery times, return windows, warranties, discounts, scarcity or ratings. That limit is only for placeholder copy: once the merchant states their real terms (shipping, returns, promotions), use them as they state them.
