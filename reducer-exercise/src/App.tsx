import { useState } from 'react';

type State = {
  isDark: boolean;
  fSize: number;
};

type Action =
  | { type: 'TOGGLE_DARK_MODE' }
  | { type: 'INCREASE_FONT' }
  | { type: 'DECREASE_FONT' };

const initialState: State = { isDark: false, fSize: 16 };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'TOGGLE_DARK_MODE':
      return { ...state, isDark: !state.isDark };
    case 'INCREASE_FONT':
      return { ...state, fSize: state.fSize + 1 };
    case 'DECREASE_FONT':
      return { ...state, fSize: state.fSize - 1 };
    default:
      return state;
  }
}

export default function App() {
  const [state, setState] = useState(initialState);

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <p
      style={{
        backgroundColor: state.isDark ? 'black' : 'white',
        color: state.isDark ? 'white' : 'black',
        fontSize: `${state.fSize}px`,
      }}
      >This is dummy text.</p>
      <div className="mt-4 space-x-2">
        <button
          onClick={() =>
            setState(reducer(state, { type: 'TOGGLE_DARK_MODE' }))
          }
        >
          Toggle Dark Mode
        </button>
        <button
          onClick={() =>
            setState(reducer(state, { type: 'INCREASE_FONT' }))
          }
        >
          Increase Font Size
        </button>
        <button
          onClick={() =>
            setState(reducer(state, { type: 'DECREASE_FONT' }))
          }
        >
          Decrease Font Size
        </button>
      </div>
    </div>
  );
}
