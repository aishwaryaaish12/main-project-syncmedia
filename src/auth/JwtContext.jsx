import PropTypes from 'prop-types';
// import { useNavigate } from 'react-router';
import {useMemo, useReducer,useCallback,createContext } from 'react';

// import { PATH_DASHBOARD } from 'src/routes/paths';

import axios from '../utils/axios';
import { setSession,  } from './utils';
// import localStorageAvailable from '../utils/localStorageAvailable';
//

// ----------------------------------------------------------------------

// NOTE:
// We only build demo at basic level.
// Customer will need to do some extra handling yourself if you want to extend the logic and other features...

// ----------------------------------------------------------------------

const initialState = {
  isInitialized: true,
  isAuthenticated: true,
  user: null,
};

const reducer = (state, action) => {
  if (action.type === 'INITIAL') {
    return {
      isInitialized: true,
      isAuthenticated: action.payload.isAuthenticated,
      user: action.payload.user,
    };
  }
  if (action.type === 'LOGIN') {
    return {
      ...state,
      isAuthenticated: true,
      user: action.payload.user,
    };
  }
  if (action.type === 'REGISTER') {
    return {
      ...state,
      isAuthenticated: true,
      user: action.payload.user,
    };
  }
  if (action.type === 'LOGOUT') {
    return {
      ...state,
      isAuthenticated: false,
      user: null,
    };
  }

  return state;
};

// ----------------------------------------------------------------------

export const AuthContext = createContext(null);

// ----------------------------------------------------------------------

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // const storageAvailable = localStorageAvailable();
  // const navigate=useNavigate()

  // const initialize = useCallback(async () => {
  //   try {
  //     const accessToken = storageAvailable ? localStorage.getItem('accessToken') : '';

  //     if (accessToken && isValidToken(accessToken)) {
  //       setSession(accessToken);

  //       const response = await axios.get('/api/account/my-account');
  //       console.log(response)

      
  //       const user = {
          
  //         email: 'aishwaryamanikandan035@gmail.com',
  //         password:'1234567'
          
  //       };

  //       dispatch({
  //         type: 'INITIAL',
  //         payload: {
  //           isAuthenticated: true,
  //           user,
  //         },
  //       });
  //     } else {
  //       dispatch({
  //         type: 'INITIAL',
  //         payload: {
  //           isAuthenticated: false,
  //           user: null,
  //         },
  //       });
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     dispatch({
  //       type: 'INITIAL',
  //       payload: {
  //         isAuthenticated: false,
  //         user: null,
  //       },
  //     });
  //   }
  // }, [storageAvailable]);

  // useEffect(() => {
  //   initialize();
  // }, []);

  // LOGIN
  const login = useCallback(async (email, password) => {
    const response = await axios.post('/api/account/login', {
      email,
      password,
    });
    console.log(response)
    // const { accessToken, user } = response.data;
    
    // const user = {
          
    //   email: 'aishwaryamanikandan035@gmail.com',
    //   password:'1234567'
      
    // };

    // setSession(accessToken);

    dispatch({
      type: 'LOGIN',
      payload: {
        user: {
          email: 'aishwaryamanikandan035@gmail.com',
          password: '1234567'
        },
      },
    });
  }, []);

  // REGISTER
  const register = useCallback(async (email, password, firstName, lastName) => {
    const response = await axios.post('/api/account/register', {
      email,
      password,
      firstName,
      lastName,
    });
    const { accessToken, user } = response.data;

    localStorage.setItem('accessToken', accessToken);

    dispatch({
      type: 'REGISTER',
      payload: {
        user,
      },
    });
  }, []);

  // LOGOUT
  const logout = useCallback(() => {
    setSession(null);
    dispatch({
      type: 'LOGOUT',
    });
  }, []);

  const memoizedValue = useMemo(
    () => ({
      isInitialized: state.isInitialized,
      isAuthenticated: state.isAuthenticated,
      user: state.user,
      method: 'jwt',
      login,
      register,
      logout,
    }),
    [state.isAuthenticated, state.isInitialized, state.user, login, logout, register]
  );

  return <AuthContext.Provider value={memoizedValue}>{children}</AuthContext.Provider>;
}
