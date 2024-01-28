export interface EntryProps {
  id: string;
  user: string;
  title: string;
  content: string;
  createdAt: string;
}

const Entry: React.FC<EntryProps> = ({
  id,
  user,
  title,
  content,
  createdAt,
}) => {
  return (
    <div className="py-2  my-2 w-full flex flex-row bg-slate-200">
      <div className="w-1/4">
        <p>Title : {title}</p>
        <p>User: {user}</p>
        <p>{createdAt}</p>
      </div>
      <div className="w-3/4">
        <p>text:</p>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Entry;
