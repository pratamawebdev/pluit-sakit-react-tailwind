import { genres } from "../../utils/data";
import Genre from "../Elements/Button/Genre";

const GenreLayouts = () => {
  return (
    <section className="w-full bg-[#000000]">
      <div className="container mx-auto py-[70px]">
        <div className="flex justify-between items-center mb-[50px]">
          <h1 className="text-white text-[32px] font-bold">Genre Tersedia</h1>
        </div>
        <div className="grid grid-cols-9 gap-[15px]">
          {genres.map((genre, index) => (
            <Genre key={index}>{genre}</Genre>
          ))}
          {genres.map((genre, index) => (
            <Genre key={index}>{genre}</Genre>
          ))}
          {genres.map((genre, index) => (
            <Genre key={index}>{genre}</Genre>
          ))}
          {genres.map((genre, index) => (
            <Genre key={index}>{genre}</Genre>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GenreLayouts;
