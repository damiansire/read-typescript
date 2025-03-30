/*
type NextState = string;
type CurrentState = string;

const State = {
  InitialState: "InitialState",
  ExportDeclaration: "ExportDeclaration",
  InterfaceDeclaration: "InterfaceDeclaration",
  EnumDeclaration: "EnumDeclaration",
  EnumNamed: "EnumNamed",
  EnumAttributeDeclaration: "EnumAttributeDeclaration",
  ConstantNamed: "ConstantNamed",
  ConstantValueDeclaration: "ConstantValueDeclaration",
  InterfaceNamed: "InterfaceNamed",
  InterfaceAttributeDeclaration: "InterfaceAttributeDeclaration",
  InterfaceAttributeNamed: "InterfaceAttributeNamed",
  InterfaceType: "InterfaceType",
  ExplicitType: "ExplicitType",
  NamedType: "NamedType",
};

type StateType = (typeof State)[keyof typeof State];

const ERROR_INVALID_STATE = "Invalid state: ";
const ERROR_INVALID_TRANSITION = "Invalid transition from ";
const TRANSITIONED_TO = "Transitioned to: ";
const CURRENT_STATE = "Current state: ";

class StateMachine {
  currentState: CurrentState;
  transitions: Map<CurrentState, NextState[]>;
  constructor(initialState: StateType = State.InitialState) {
    this.currentState = initialState; // Estado inicial es InitialState
    this.transitions = new Map([
      [State.InitialState, Object.values(State).filter((state) => state !== State.InitialState)],
      [State.ExportDeclaration, [State.InterfaceDeclaration, State.EnumDeclaration]],
      [State.EnumNamed, [State.EnumAttributeDeclaration, State.ConstantNamed]],
      [State.EnumDeclaration, [State.EnumNamed]],
      [State.ConstantNamed, [State.ConstantValueDeclaration]],
      [State.InterfaceDeclaration, [State.InterfaceNamed]],
      [State.InterfaceNamed, [State.InterfaceAttributeDeclaration]],
      [State.InterfaceAttributeDeclaration, [State.InterfaceAttributeNamed]],
      [State.InterfaceAttributeNamed, [State.InterfaceType]],
      [State.InterfaceType, [State.ExplicitType, State.NamedType]],
    ]);
  }

  isValidState(state) {
    return Object.values(State).includes(state);
  }

  transitionTo(newState) {
    if (!this.isValidState(newState)) {
      throw new Error(ERROR_INVALID_STATE + newState);
    }

    const validTransitions = this.transitions.get(this.currentState);
    if (validTransitions && validTransitions.includes(newState)) {
      this.currentState = newState;
      console.log(TRANSITIONED_TO + newState);
    } else {
      throw new Error(ERROR_INVALID_TRANSITION + this.currentState + " to " + newState);
    }
  }

  getCurrentState() {
    return this.currentState;
  }

  displayCurrentState() {
    console.log(CURRENT_STATE + this.getCurrentState());
  }
}

interface Element {
  type: "interface" | "enum";
  name: string;
  content: Content[];
}

interface Content {
  name: string;
  type: string;
}

interface ElementProcessor {
  codeResult: Element[];
  currentElement: Element | null;
  processWord: (currentWord: string) => void;
}

const stateMachine = new StateMachine();

stateMachine.displayCurrentState();

*/
const fs = require("fs");

const rawData = fs.readFileSync("./test/project-atomic.interface.ts", "utf-8");

console.log(rawData);

export const getSecuenceArray = (rawData: string) => {
  const specialCharacters = ["{", "}", ";", ":"];

  let currentWord = "";
  let secuenceArray: string[] = [];

  for (let char of rawData) {
    if (specialCharacters.includes(char)) {
      if (currentWord.length > 0) {
        secuenceArray.push(currentWord.trim()); // Trim para eliminar espacios extra
        currentWord = "";
      }
      secuenceArray.push(char); // Incluye el caracter especial
    } else if (char === " ") {
      if (currentWord.length > 0) {
        secuenceArray.push(currentWord);
        currentWord = "";
      }
    } else if (char === "\r" || char === "\n") {
      if (currentWord.length > 0) {
        secuenceArray.push(currentWord);
        currentWord = "";
      }
    } else {
      currentWord += char;
    }
  }

  if (currentWord.length > 0) {
    secuenceArray.push(currentWord.trim()); // Asegura que la última palabra se añada
  }

  return secuenceArray;
};

const secuenceArray = getSecuenceArray(rawData);

console.log("this is secuence array: ", secuenceArray);

/*
// Ejemplo de uso
const stateMachine = new StateMachine();

stateMachine.displayCurrentState();

try {
  stateMachine.transitionTo(State.InterfaceDeclaration);
  stateMachine.displayCurrentState();

  stateMachine.transitionTo(State.InterfaceNamed);
  stateMachine.displayCurrentState();

  stateMachine.transitionTo(State.EnumDeclaration); // Transición Invalida
  stateMachine.displayCurrentState();

  stateMachine.transitionTo(State.InterfaceAttributeDeclaration);
  stateMachine.displayCurrentState();

  stateMachine.transitionTo(State.InterfaceAttributeNamed);
  stateMachine.displayCurrentState();

  stateMachine.transitionTo(State.InterfaceType);
  stateMachine.displayCurrentState();

  stateMachine.transitionTo(State.ExplicitType);
  stateMachine.displayCurrentState();
} catch (error) {
  console.error(error.message);
}
*/
