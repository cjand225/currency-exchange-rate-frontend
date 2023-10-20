import { useState } from 'react';

/**
 * A generic custom hook to manage state and its updater function.
 *
 * @param {T} initialValue - The initial value for the state.
 * @returns {Array} - An array where the first item is the state and the second item is the handler.
 */
function useGenericState<T>(initialValue: T) {
  const [state, setState] = useState<T>(initialValue);

  const handler = (value: T) => {
    setState(value);
  };

  return [state, handler] as const;
}

export default useGenericState;
