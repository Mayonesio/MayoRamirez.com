import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../src/context/AuthContext';
import Loading from '../src/Components/Loading/Loading'  // Asegúrate de que la ruta sea correcta

const ProtectedRoute = ({ children }) => {
  const router = useRouter(); // Usar useRouter en lugar de redirect
  const { loading, isAuthenticated, user } = useAuth();
  // console.log("Muestranos usuarios:", loading, isAuthenticated, user);


  if(loading) return <Loading></Loading>
 

  const redirectToLogin = () => {
    router.push('/home/login');
  };
  
  if (!loading && !isAuthenticated) return redirectToLogin();


return children;
}
export default ProtectedRoute;