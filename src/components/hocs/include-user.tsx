import { useEffect, useState } from "react";
import { UserType } from "../user-info";
import axios from "axios";

export const includeUser = <P extends object>(
  Component: React.ComponentType<P & { user?: UserType | null }>,
  userId: number
) => {
  const WrappedComponent: React.FC<P> = (props) => {
    const [user, setUser] = useState<UserType | null>(null);

    useEffect(() => {
      const fetchData = async () => {
        const response = await axios.get(
          `http://localhost:9090/users/${userId}`
        );
        setUser(response.data);
      };
      fetchData();
    }, []);

    return <Component {...(props as P)} user={user} />;
  };

  return WrappedComponent;
};
