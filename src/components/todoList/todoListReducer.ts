import React from "react";
import { TasksStatus } from "./TodoList"

export interface TodoType {
  id: string;
  text: string;
  done: boolean;
  edited: boolean;
  deleted: boolean;
}

export enum Actions {ADD = "ADD", DELETE = "DELETE", EDIT = "EDIT", DONETOGGLE = "DONETOGGLE", ADDINPUTHANDLE = "ADDINPUTHANDLE", CLEARALL = "CLEARALL"}

interface AddAction {
  type: Actions.ADD;
  payload: {
    id: string;
    text: string;
    done: boolean;
    edited: boolean;
    deleted: boolean;
    addInput: string;
    setErrorRepeated: Function;
    setAddInput: Function;
  }
}

interface AddInputHandle {
  type: Actions.ADDINPUTHANDLE;
  payload: {
    addInput: string;
    setAddInput: Function;
  }
}

interface DeleteAction {
  type: Actions.DELETE;
  id: string;
}

interface DoneToggleAction {
  type: Actions.DONETOGGLE;
  payload: {
    id: string;
    done: boolean
  }
}

interface EditAction {
  type: Actions.EDIT;
  payload: {
    id: string;
    newText: string;
    setErrorRepeated: Function;
  }
}

interface ClearAll {
  type: Actions.CLEARALL;
}

export type Action = AddAction | DeleteAction | DoneToggleAction | EditAction | AddInputHandle | ClearAll;


export default function todoListReducer(state: TasksStatus, action: Action): TodoType[] {

  switch (action.type) {

    case Actions.ADDINPUTHANDLE:
      action.payload.setAddInput(action.payload.addInput)
      return state
    
    case Actions.ADD:
      let repeated = false
      state.forEach( ({text}) => {
        if (text.trim().toLocaleLowerCase() === action.payload.addInput.trim().toLocaleLowerCase()) repeated = true
        action.payload.setErrorRepeated(true)
      })
      if (!repeated) {
        let taskStatus = {
          id: Math.random().toFixed(4),
          text: action.payload.addInput,
          done: false,
          edited: false,
          deleted: false
        }
        action.payload.setAddInput('')
        action.payload.setErrorRepeated(false)
        return state.concat(taskStatus)
      }
      return state
      // break

    case Actions.DELETE:
      return state.filter( task => task.id !== action.id)

    case Actions.EDIT:
      return (
        (state.map( task => {
          if (action.payload.id === task.id) {
            return {...task, text: action.payload.newText}
          }
          return task
        })) 
      )
    
    case Actions.DONETOGGLE:
      return (
        (state.map( task => {
          if (task.id !== action.payload.id) return task
          return {...task, done: !task.done}
        }))
      )

    case Actions.CLEARALL:
      return []
    
    default:
      return state
  }
}