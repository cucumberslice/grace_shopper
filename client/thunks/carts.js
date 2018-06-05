import {
  gotCarts,
  gotSingleCart,
  addedCart,
  removedCart,
  editedCart
} from '../actionCreators/carts';
import axios from 'axios';

export const getCarts = () => async dispatch => {
  try {
    const allCarts = await axios.get('/api/carts');
    const carts = allCarts.data;
    dispatch(gotCarts(carts));
  } catch (err) {
    console.log(err);
  }
};

export const getSingleCart = id => async dispatch => {
  try {
    const singleCart = await axios.get(`/api/carts/${id}`);
    const cart = singleCart.data;
    dispatch(gotSingleCart(cart));
  } catch (err) {
    console.log(err);
  }
};

export const addCart = cartInfo => dispatch => {
  try {
    dispatch(addedCart(cartInfo));
  } catch (err) {
    console.log(err);
  }
};

export const removeCart = cartInfo => dispatch => {
  try {
    dispatch(removedCart(cartInfo));
  } catch (err) {
    console.log(err);
  }
};

export const editCart = cartInfo => dispatch => {
  try {
    dispatch(editedCart(cartInfo));
  } catch (err) {
    console.log(err);
  }
};
