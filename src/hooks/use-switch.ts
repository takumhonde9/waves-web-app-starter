import { useState } from 'react';

/**
 * A hook that provides a boolean state that can be
 * turned on/off and toggled.
 *
 * @param defaultValue the default value to start with
 */
export function useSwitch(
  defaultValue = false,
): [
  state: boolean,
  turnOn: VoidFunction,
  turnOff: VoidFunction,
  toggle: VoidFunction,
] {
  const [state, setState] = useState<boolean>(defaultValue);

  const turnOff = () => setState(false);
  const turnOn = () => setState(true);
  const toggle = () => setState((prev) => !prev);

  return [state, turnOn, turnOff, toggle];
}
