import { ADD_OPERATION, DIVIDE_OPERATION, MULTIPLY_OPERATION, SUBSTRACT_OPERATION } from "../../utils/const";

export const operators = {
  [ ADD_OPERATION ]       : add,
  [ SUBSTRACT_OPERATION ] : substract,
  [ DIVIDE_OPERATION ]    : divide,
  [ MULTIPLY_OPERATION ]  : multiply
}

export function add( firstNumber, secondNumber ) {
  return firstNumber + secondNumber;
}

export function substract( firstNumber, secondNumber ) {
  return firstNumber - secondNumber;
}

export function divide( firstNumber, secondNumber ) {
  return firstNumber / secondNumber;
}

export function multiply( firstNumber, secondNumber ) {
  return firstNumber * secondNumber;
}