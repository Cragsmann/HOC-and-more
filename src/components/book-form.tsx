import { includeUpdateResource } from "./hocs/include-updatable-resource";

export type BookType = {
  id: string;
  name: string;
  pages: number;
  title: string;
  price: number;
};

type Props = {
  book?: BookType | null;
  onChangeBook?: (updates: Partial<BookType>) => void;
  onPostBook?: () => void;
  onResetBook?: () => void;
};

export const BookInfoForm = includeUpdateResource(
  ({ book, onChangeBook, onPostBook, onResetBook }: Props) => {
    const { name, title, pages } = book || {};

    return book ? (
      <>
        <label>
          Name:
          <input
            value={name || ""}
            //@ts-expect-error 123
            onChange={(e) => onChangeBook({ name: e.target.value })}
          />
        </label>
        <label>
          Title:
          <input
            value={title || ""}
            onChange={(e) => onChangeBook({ title: e.target.value })}
          />
        </label>
        <label>
          Age:
          <input
            value={pages || ""}
            onChange={(e) => onChangeBook({ pages: Number(e.target.value) })}
          />
        </label>
        <button onClick={onResetBook}>Reset</button>
        <button onClick={onPostBook}>Save</button>
      </>
    ) : (
      <h3>...Loading</h3>
    );
  },
  "http://localhost:9090/books/2",
  "book"
);
