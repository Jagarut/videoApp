import React from "react";

const listGroup = ({ genres, onItemSelect, selectedGenre }) => {
  //console.log(genres);

  return (
    <div>
      <ul className="list-group">
        {genres.map(genre => (
          <li
            style={{ cursor: "pointer" }}
            key={genre._id}
            className={
              selectedGenre === genre
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => onItemSelect(genre)}
          >
            {genre.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default listGroup;
