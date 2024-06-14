import { useEffect, useState } from "react"
import { Navigate } from "react-router-dom"
import { useAuth } from "../Store/AuthClient"
import { toast } from "react-toastify";
const Logout = () => {
    const { logoutUser } = useAuth();
    const [loggedOut, setLoggedOut] = useState(false);
    const [isMounted, setIsMouted] = useState(true);

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
                    return;
                }
            } catch (error) {
                if (isMounted) {
                    toast.error("Logout failed", {
                        position: "bottom-right"
                    });
                }
            } finally {
                setIsMouted(false);
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