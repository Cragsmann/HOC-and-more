export type UserType = {
  name: string;
  age: number;
  country: string;
  books: string[];
};

type UserInfoProps = {
  user?: UserType;
};

export const UserInfo: React.FC<UserInfoProps> = ({ user }): JSX.Element => {
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
    </>
  ) : (
    <h1>Loading...</h1>
  );
};
