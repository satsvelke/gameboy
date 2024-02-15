import useGenre from "../hooks/useGenre";

const GenreList = () => {
  const { genreResults } = useGenre();
  return (
    <>
      {genreResults.map((g) => (
        <div key={g.id}>{g.name}</div>
      ))}
    </>
  );
};

export default GenreList;
