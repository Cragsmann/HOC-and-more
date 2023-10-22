//import { useFetchCurrentUser } from "./hooks/fetchCurrentUser";
import axios from "axios";
import { useFetchResource } from "./hooks/fetchResource";
import { useFetchUser } from "./hooks/fetchUser";
import { useFetchData } from "./hooks/fetchData";

export type UserType = {
  name: string;
  age: number;
  country: string;
  books: string[];
};

type UserInfoProps = {
  userId: number;
};

const fetchFromServer = (resourceUrl: string) => async () => {
  const response = await axios.get<UserType>(resourceUrl);
  return response.data;
};

const getFromLocalStorage = (key: string) => () => {
  return localStorage.getItem(key);
};

export const UserInfo: React.FC<UserInfoProps> = ({ userId }): JSX.Element => {
  const user = useFetchData(
    fetchFromServer(`http://localhost:9090/users/${userId}`)
  );
  const message = useFetchData(getFromLocalStorage("test"));
  const { name, age, country, books } = user || {};
  return user ? (
    <>
      <h2>{name}</h2>
      <p>Age: {age} years</p>
      <p>Country: {country}</p>
      <h2>Books</h2>
      <ul>
        {books && books.map((book: string) => <li key={book}> {book} </li>)}
      </ul>
      <p>{message}</p>
    </>
  ) : (
    <h1>Loading...</h1>
  );
};
