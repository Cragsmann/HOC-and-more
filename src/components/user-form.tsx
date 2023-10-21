import { includeUpdateUser } from "./include-update-user";
import { UserType } from "./user-info";

type Props = {
  user?: UserType | null;
  onChangeUser?: (updates: Partial<UserType>) => void;
  onPostUser?: () => void;
  onResetUser?: () => void;
};

export const UserInfoForm = includeUpdateUser(
  ({ user, onChangeUser, onPostUser, onResetUser }: Props) => {
    const { name, age } = user || {};

    return user ? (
      <>
        <label>
          Name:
          <input
            value={name || ""}
            onChange={(e) => onChangeUser({ name: e.target.value })}
          />
        </label>
        <label>
          Age:
          <input
            value={age || ""}
            onChange={(e) => onChangeUser({ age: Number(e.target.value) })}
          />
        </label>
        <button onClick={onResetUser}>Reset</button>
        <button onClick={onPostUser}>Save</button>
      </>
    ) : (
      <h3>...Loading</h3>
    );
  },
  3
);
