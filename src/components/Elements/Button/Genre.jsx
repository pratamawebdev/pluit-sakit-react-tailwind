import { Children } from "react";

const Genre = (props) => {
  const { children, key } = props;
  return (
    <button
      key={key}
      className="genre-button text-[16px] inline-block text-white font-medium bg-transparent"
    >
      {children}
    </button>
  );
};

export default Genre;
