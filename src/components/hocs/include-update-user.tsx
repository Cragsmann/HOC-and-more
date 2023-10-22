import { ComponentType, useState, useEffect } from "react";
import axios from "axios";
import { UserType } from "../user-info";

export const includeUpdateUser = <P extends object>(
  Component: ComponentType<P>,
  userId: number
) => {
  const WrappedComponent: React.FC<P> = (props) => {
    const [initialUser, setInitialUser] = useState<UserType | null>(null);
    const [user, setUser] = useState<UserType | null>(null);

    useEffect(() => {
      (async () => {
        const response = await axios.get(
          `http://localhost:9090/users/${userId}`
        );
        setInitialUser(response.data);
        setUser(response.data);
      })();
    }, []);

    const onChangeUser = (updates: Partial<UserType>) => {
      if (user) {
        setUser({ ...user, ...updates });
      }
    };

    const onPostUser = async () => {
      const response = await axios.post(
        `http://localhost:9090/users/${userId}`,
        { user }
      );
      setInitialUser(response.data);
      setUser(response.data);
    };

    const onResetUser = () => {
      setUser(initialUser);
    };

    return (
      <Component
        {...props}
        user={user}
        onChangeUser={onChangeUser}
        onPostUser={onPostUser}
        onResetUser={onResetUser}
      />
    );
  };
  return WrappedComponent;
};
