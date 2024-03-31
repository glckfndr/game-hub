import React from "react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { genres } = useGenres();
  return (
    <div>
      <ul>
        {genres.map((gen) => (
          <li>{gen.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GenreList;
