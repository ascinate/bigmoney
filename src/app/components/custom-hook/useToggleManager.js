import { useReducer } from 'react';

const initialState = {
  chatWithCustomers: false,
  agentView: false,
  agentDelete: false,
  agentCreate: true,
  agentEdit: true,
  servicesView: false,
  servicesDelete: false,
  servicesCreate: false,
  servicesEdit: false,
  locationView: false,
  locationDelete: false,
  locationCreate: false,
  locationEdit: false,
  bookingView: false,
  bookingDelete: false,
  bookingCreate: false,
  bookingEdit: false,
  customersView: false,
  customersDelete: false,
  customersCreate: false,
  customersEdit: false,
  paymentView: false,
  paymentDelete: false,
  paymentCreate: false,
  paymentEdit: false,

  activityView: false,
  activityDelete: false,
  activityCreate: false,
  activityEdit: false,

  chatEdit: false,

  resourceSchedulesEdit: false,

    settingsEdit: false,
  connectionsEdit: false,

    couponsView: false,
  couponsDelete: false,
  couponsCreate: false,
  couponsEdit: false,

};

function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_FEATURE':
      return {
        ...state,
        [action.payload]: !state[action.payload],
      };
    default:
      throw new Error('Unknown action type');
  }
}

export function useToggleManager() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggle = (featureName) => {
    dispatch({ type: 'TOGGLE_FEATURE', payload: featureName });
  };

  return { state, toggle };
}
