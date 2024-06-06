import { useEffect, useState } from "react"
import { Navigate } from "react-router-dom"
import { useAuth } from "../Store/AuthClient"
import { toast } from "react-toastify";
const Logout = () => {
    const { logoutUser } = useAuth();
    const [loggedOut, setLoggedOut] = useState(false);

    useEffect(() => {
        let isMounted = true;

        const performLogout = async () => {
            try {
                await logoutUser();
                if (isMounted) {
                    setLoggedOut(true);
                    toast.success("Logout successful", {
                        position: "bottom-right"
                    });
                }
            } catch (error) {
                if (isMounted) {
                    toast.error("Logout failed", {
                        position: "bottom-right"
                    });
                }
            }
        };

        performLogout();

        return () => {
            isMounted = false;
        };
    }, [logoutUser]);

    if (loggedOut) {
        return <Navigate to="/" />;
    }

    return <div>Loading ...</div>;

}
export default Logout;