import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Product } from '../product';

export const selectCountProducts = createSelector(
  createFeatureSelector('cartEntries'),
  (state: Product[]) => {
    return state.length;
  }
);

export const selectTotalPrice = createSelector(
  createFeatureSelector('cartEntries'),
  (state: Product[]) => {
    return state.reduce((total, current) => total + current.price, 0);
  }
);
