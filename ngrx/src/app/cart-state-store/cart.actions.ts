import { createAction, props } from '@ngrx/store';
import { Product } from '../product';

export const addProduct = createAction('ADD_PRODUCT', props<Product>());
export const removeProduct = createAction('REMOVE_PRODUCT', props<Product>());
export const clearCart = createAction('CLEAR_CART');
