import Entry, { EntryProps } from "./Entry";

interface ShowAllEntriesProps {
  entries: EntryProps | any;
}
// interface ShowAllEntriesProps extends Array<EntryProps> {}

const ShowAllEntries: React.FC<ShowAllEntriesProps> = async ({ entries }) => {
  return (
    <div className="flex flex-col w-full p-3 border-">
      {entries.map((entry: any) => {
        const { id, user, content, title, createdAt } = entry;
        return (
          <Entry
            id={id}
            user={user}
            content={content}
            title={title}
            createdAt={createdAt}
            key={id}
          />
        );
      })}
    </div>
  );
};

export default ShowAllEntries;
