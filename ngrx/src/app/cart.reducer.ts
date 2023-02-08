import { createReducer, on } from '@ngrx/store';
import { addItem, listItems, clearCart } from './cart.actions';
import { Product } from './product';

export const ADD_PRODUCT = 'ADD_PRODUCT';

interface Action {
  type: string;
  payload?: any;
}

export function addProductReducer(state: Product[] = [], action: Action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return [...state, action.payload];
    default:
      return state;
  }
}
