import {
  fetchRegions,
  fetchCategories,
  fetchRestaurants,
} from '../services/api';

export function setRegions(regions) {
  return {
    type: 'setRegions',
    payload: { regions },
  };
}

export function loadRegions() {
  return async (dispatch) => {
    const regions = await fetchRegions();

    dispatch(setRegions(regions));
  };
}

export function setRestaurants(restaurants) {
  return {
    type: 'setRestaurants',
    payload: { restaurants },
  };
}

export function loadRestaurants({ region, categoryId }) {
  return async (dispatch) => {
    const restaurants = await fetchRestaurants({ region, categoryId });

    dispatch(setRestaurants(restaurants));
  };
}

export function setCategories(categories) {
  return {
    type: 'setCategories',
    payload: { categories },
  };
}

export function loadCategories() {
  return async (dispatch) => {
    const Categories = await fetchCategories();

    dispatch(setCategories(Categories));
  };
}

export function changeSearch({ search, value }) {
  return {
    type: 'changeSearch',
    payload: {
      search,
      value,
    },
  };
}
