
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const useUser = () => {
   const {user} = useContext(AuthContext);
   const email = user?.email;
   return email ;
};

export default useUser;