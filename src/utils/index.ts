export const StringUnion = <UnionType extends string>(...values: UnionType[]) => {
  Object.freeze(values);
  const valueSet: Set<string> = new Set(values);

  const guard = (value: string): value is UnionType => {
    return valueSet.has(value);
  };

  const check = (value: string): UnionType => {
    if (!guard(value)) {
      const actual = JSON.stringify(value);
      const expected = values.map(s => JSON.stringify(s)).join(' | ');
      throw new TypeError(`Value '${actual}' is not assignable to type '${expected}'.`);
    }
    return value;
  };

  const unionNamespace = { guard, check, values };
  return Object.freeze(unionNamespace as typeof unionNamespace & { type: UnionType });
};

export const formatCountriesFull = (allCountries: Array<String>) =>
  allCountries.map(country => ({
    name: country[0],
    iso2: country[1].toUpperCase(),
    dialCode: country[2],
    priority: country[3] || 0,
    areaCodes: country[4] || null,
  }))

export const keysCodes = {
  ESC: 'Escape',
  ENTER: 'Enter',
  NUMPAD_ENTER: 'NumpadEnter',
  SPACE: 'Space',
  END: 'End',
  HOME: 'Home',
  ARROW_LEFT: 'ArrowLeft',
  ARROW_UP: 'ArrowUp',
  ARROW_RIGHT: 'ArrowRight',
  ARROW_DOWN: 'ArrowDown',
  TAB: 'Tab',
}
