// counter.ts
import { Action } from '@ngrx/store';
export const CHANGE_QUESTION = 'change-question';
export const COMPLETED = 'completed';
export const PROMPT = 'prompt';
export const STORENODE = 'storeNode';

export const EMPTY = 'empty';
export const RESTORE = 'restore';

export class ChangeQuestion implements Action {
  readonly type = CHANGE_QUESTION;
  constructor(public payload: any = {}) { }
}

// export class Completed implements Action {
//   readonly type = COMPLETED;
//   constructor(public payload: any = {}) { }
// }

// export class Empty implements Action {
//   readonly type = EMPTY;
//   constructor(public payload: any= {}) { }
// }
// export class Restore implements Action {
//   readonly type = RESTORE;
//   constructor(public payload: any = {}) { }
// }

// export class Prompt implements Action {
//   readonly type = PROMPT;
//   constructor(public payload: any= {}) { }
// }
// export class StoreNode implements Action {
//   readonly type = STORENODE;

//   constructor(public payload: any) { }
// }

export type ChangeAction
  = ChangeQuestion;

// export type AlertChange
//   = Empty
//   | Restore
//   | Prompt
//   | StoreNode;

// export const REFRESHEVENT = 'Refresh';
// export const DECREMENT = 'DECREMENT';
// export const RESET = 'RESET';

export function quizReducer(state: any = {}, action: ChangeAction) {
  switch (action.type) {
    case CHANGE_QUESTION:
      return Object.assign({}, { questionNumber : action.payload.index});
    default:
      return state;
  }
}
