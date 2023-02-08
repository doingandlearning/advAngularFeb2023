import { createAction } from '@ngrx/store';

export const addItem = createAction('ADD_ITEM');
export const listItems = createAction('LIST_ITEMS');
export const clearCart = createAction('CLEAR_CART');
