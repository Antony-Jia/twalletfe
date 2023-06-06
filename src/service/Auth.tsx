import { Navigate, useLocation } from 'react-router-dom';
import useIsAuthenticatedStore from '../state/isAuthenticated';
import useIsLoadingStore from '../state/isLoading';

/**
 * Renders a protected route if the user is authenticated, otherwise redirects to the signin page.
 * base on https://blog.logrocket.com/complete-guide-authentication-with-react-router-v6/
 * base on https://adarshaacharya.com.np/blog/role-based-auth-with-react-router-v6
 * @param {Object} component - The component to render.
 * @param {...Object} restOfProps - The remaining props to pass to the Route component.
 * @return {JSX.Element} - The rendered component or a Redirect component if the user is not authenticated.
 */

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  let location = useLocation();

  const isAuthenticated = useIsAuthenticatedStore((state) => state.isAuthenticated)
  const loading = useIsLoadingStore((state) => state.isLoading)

  if (loading) {
    return <p>Checking authenticaton..</p>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/index" state={{ from: location }} />;
  }

  return children;
};

export default PrivateRoute;