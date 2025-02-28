import { ADD_PAYMENT_DETAILS_FAILURE, GET_WITHDRAWAL_HISTORY_SUCCESS, WITHDRAWAL_PROCEED_REQUEST } from "./ActionType";
import * as types from "./ActionTypes";


export const withdrawalRequest = ({amount, jwt}) => async (dispatch) => {
  dispatch({ type: WITHDRAWAL_REQUEST});

  try {
    const response = await api.post(`/api/withdrawal/${amount}`, null, {
        headers: {
            Authorization: `Bearer ${jwt}`,
        },
    })
    console.logo("withdrawal ---- ", response.data);
    dispatch({ type: WITHDRAWAL_SUCCESS, payload: response.data });
    
  } catch (error) {
    dispatch({ type: WITHDRAWAL_FAILURE, payload: error.message });
  }
};

export const proceedWithdrawal = ({id, jwt, accept}) => async (dispatch) => {
    dispatch({ type: WITHDRAWAL_PROCEED_REQUEST });
  
    try {
      const response = await api.patch(`/api/admin/withdrawal/${id}/proceed/${accept}`, null, {
          headers: {
              Authorization: `Bearer ${jwt}`,
          },
      })
  
      console.log("proceed withdrawal ----", response.data)
      dispatch({
        type: WITHDRAWAL_PROCEED_SUCCESS,
        payload: response.data
      });
    } catch (error) {
        console.log(error);
      dispatch({ type: WITHDRAWAL_PROCEED_FAILURE, error: error.message });
    }
  };


  export const getWithdrawalHistory = jwt => async (dispatch) => {
    dispatch({ type: GET_WITHDRAWAL_HISTORY_REQUEST });
    
    try {
      const response = await api.get("/api/withdrawal", {
            headers: {
              Authorization: `Bearer ${jwt}`,
          },
       })
  
        console.log("get withdrawal history ---- ", response.data);
        dispatch({
            type: GET_WITHDRAWAL_HISTORY_SUCCESS,
            payload: response.data
        })
    } catch (error) {
      dispatch({ type: GET_WITHDRAWAL_HISTORY_FAILURE, payload: error.message });
    }
  };

  export const getAllWithdrawalRequest = jwt => async (dispatch) => {
    dispatch({ type: GET_WITHDRAWAL_REQUEST_REQUEST });
  
    try {
      const response = await api.get('/api/admin/withdrawal', {
          headers: {
              Authorization: `Bearer ${jwt}`,
          },
      })
      
        console.log("get withdrawal requests ---- ", response.data);
      
        dispatch({
            type: GET_WITHDRAWAL_REQUEST_SUCCESS,
            payload: response.data
        })
    
  
    //   dispatch({ type: types.DEPOSIT_MONEY_SUCCESS, payload: response.data });
    } catch (error) {
        console.log("error", error);
      dispatch({ type: GET_WITHDRAWAL_HISTORY_FAILURE, error: error.message });
    }
  };




  export const addPaymentDetails = ({paymentDetails, jwt}) => async (dispatch) => {
    dispatch({ type: ADD_PAYMENT_DETAILS_REQUEST });
  
    try {
      const response = await api.post(`/api/payment-details`, paymentDetails, {
          headers: {
              Authorization: `Bearer ${jwt}`,
          },
        })
  
        console.log("withdrawal ---- ", response.data);
        

      dispatch({ type: ADD_PAYMENT_DETAILS_SUCCESS, payload: response.data });
    } catch (error) {
        console.log(error);
      dispatch({ type: ADD_PAYMENT_DETAILS_FAILURE, error: error.message });
    }
  };

  export const getPaymentDetails = ({ jwt}) => async (dispatch) => {
    dispatch({ type: GET_PAYMENT_DETAILS_REQUEST });
  
    try {
      const response = await api.get(`/api/payment-details`, paymentDetails, {
          headers: {
              Authorization: `Bearer ${jwt}`,
          },
        })
  
        console.log("get payment details ---- ", response.data);
        

      dispatch({ type: GET_PAYMENT_DETAILS_SUCCESS, payload: response.data });
    } catch (error) {
        console.log(error);
      dispatch({ type: GET_PAYMENT_DETAILS_FAILURE, error: error.message });
    }
  };