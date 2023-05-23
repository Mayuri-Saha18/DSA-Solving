import {
  GENERATE_NUMBERS,
  START_GAME,
  STOP_GAME,
  REORDER_NUMBERS,
  SET_LEVEL,
  RESET_GAME,
} from "./actions";

const initialState = {
  numbers: [],
  timeLeft: null,
  level: null,
  gameStatus: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GENERATE_NUMBERS:
      return {
        ...state,
        numbers: [...Array(action.payload.level)].map(() =>
          Math.floor(Math.random() * 100) + 1
        ),
        level: action.payload.level,
      };

    case START_GAME:
      return {
        ...state,
        gameStatus: "inProgress",
        timeLeft: state.level === "easy" ? 60 : state.level === "medium" ? 40 : 30,
      };

    case STOP_GAME:
      return {
        ...state,
        gameStatus: "lost",
        timeLeft: null,
      };

    case REORDER_NUMBERS:
      const { startIndex, endIndex } = action.payload;
      const numbers = [...state.numbers];
      const [removed] = numbers.splice(startIndex, 1);
      numbers.splice(endIndex, 0, removed);

      return {
        ...state,
        numbers,
      };

    case SET_LEVEL:
      return {
        ...state,
        level: action.payload.level,
        gameStatus: null,
      };

    case RESET_GAME:
      return {
        ...state,
        timeLeft: null,
        gameStatus: null,
      };
    
    default:
      return state;
    }
  };