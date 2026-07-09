/**
 * Active visual theme — The Daily Standard (light only for now).
 */

export const THEME_IDS = /** @type {const} */ (["default"]);

export const LIGHT_THEME_IDS = /** @type {const} */ (["default"]);

/** @param {string} id */
export function isLightThemeId(id) {
  return LIGHT_THEME_IDS.includes(id);
}

/** @type {(typeof THEME_IDS)[number]} */
const CHOSEN_THEME = "default";

export const ACTIVE_THEME_ID = THEME_IDS.includes(CHOSEN_THEME)
  ? CHOSEN_THEME
  : "default";
