import { ActionReducer, createReducer, on, INIT, UPDATE } from '@ngrx/store';
import { clearCart } from '../cart.actions';
import { Product } from '../product';
import { addProduct, removeProduct } from './cart.actions';

export const initialCartEntries: Product[] = [];

export const cartReducer = createReducer(
  initialCartEntries,
  on(addProduct, (state, product) => {
    const newState = structuredClone(state);
    newState.push(product);
    return newState;
  }),
  on(removeProduct, (state, product) => {
    const newState = structuredClone(state);
    // const newState = [...state]
    const found = newState.find((e: Product) => e.id === product.id);
    if (found) {
      newState.splice(newState.indexOf(found), 1);
    }
    return newState;
  }),
  on(clearCart, (_) => [])
);

export const metaReducerLocalStorage = (
  reducer: ActionReducer<any>
): ActionReducer<any> => {
  return (state, action) => {
    if (action.type === INIT) {
      const storageValue = localStorage.getItem('state');
      if (storageValue) {
        try {
          console.log('update or init');

          return JSON.parse(storageValue);
        } catch {
          localStorage.removeItem('state');
        }
      }
    }
    const nextState = reducer(state, action);
    localStorage.setItem('state', JSON.stringify(nextState));
    return nextState;
  };
};
