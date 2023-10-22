import { useState, useEffect } from "react";
import { UserType } from "../user-info";
import axios from "axios";

export const useFetchCurrentUser = () => {
  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get<UserType>(
        "http://localhost:9090/current-user"
      );
      setUser(response.data);
    })();
  }, []);

  return user;
};
