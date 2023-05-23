// Action types
export const GENERATE_NUMBERS = "GENERATE_NUMBERS";
export const START_GAME = "START_GAME";
export const STOP_GAME = "STOP_GAME";
export const REORDER_NUMBERS = "REORDER_NUMBERS";
export const SET_LEVEL = "SET_LEVEL";
export const RESET_GAME = "RESET_GAME";

// Action creators
export const generateNumbers = (level) => ({
  type: GENERATE_NUMBERS,
  payload: {
    level,
  },
});

export const startGame = () => ({
  type: START_GAME,
});

export const stopGame = () => ({
  type: STOP_GAME,
});

export const reorderNumbers = (startIndex, endIndex) => ({
  type: REORDER_NUMBERS,
  payload: {
    startIndex,
    endIndex,
  },
});

export const setLevel = (level) => ({
  type: SET_LEVEL,
  payload: {
    level,
  },
});

export const resetGame = () => ({
  type: RESET_GAME,
});
