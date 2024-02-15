import useGenre from "../hooks/useGenre";

const GenreList = () => {
  const { data } = useGenre();
  return (
    <>
      {data.map((g) => (
        <div key={g.id}>{g.name}</div>
      ))}
    </>
  );
};

export default GenreList;
