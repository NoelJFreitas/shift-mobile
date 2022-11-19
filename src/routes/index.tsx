import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";
import { useAppSelector } from "../infrastructure/store/hooks/useAppSelector";

const Routes: React.FC = () => {
  const { isLoggedIn } = useAppSelector((state) => state.Auth);
  return isLoggedIn ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
