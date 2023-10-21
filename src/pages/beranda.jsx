import { useNavigate } from "react-router-dom";
import Card from "../components/Fragments/Global/Card";
import Navbar from "../components/Fragments/Global/Navbar";
import FilmLayouts from "../components/Layouts/FilmLayouts";
import FooterLayouts from "../components/Layouts/FooterLayouts";
import GenreLayouts from "../components/Layouts/GenreLayouts";
import HeroLayouts from "../components/Layouts/HeroLayouts";
import { sedangTayang } from "../utils/data";

const BerandaPage = () => {
  const navigate = useNavigate();
  const handleDetail = (id) => {
    console.log(id);
    navigate(`/detail/${id}`);
  };

  return (
    <>
      <Navbar />
      <HeroLayouts>
        <div className="">
          <ul className="text list-none flex items-center gap-[8px] ">
            <li className="text-white text-[14px] font-medium uppercase">
              Adventure
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4"
                height="5"
                viewBox="0 0 4 5"
                fill="none"
              >
                <circle cx="2" cy="2.5" r="2" fill="white" />
              </svg>
            </li>
            <li className="text-white text-[14px] font-medium uppercase">
              Action
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4"
                height="5"
                viewBox="0 0 4 5"
                fill="none"
              >
                <circle cx="2" cy="2.5" r="2" fill="white" />
              </svg>
            </li>
            <li className="text-white text-[14px] font-medium uppercase">
              History
            </li>
          </ul>
          <h1 className="text-[64px] text-white font-bold">
            Indiana Jones and The Dial Of Destiny
          </h1>
          <span className="ellipse text-white">16+</span>
          <div className="text-white flex mt-[24px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className="mr-[4px]"
            >
              <path
                d="M4.854 18.3333L6.20817 12.4792L1.6665 8.54167L7.6665 8.02083L9.99984 2.5L12.3332 8.02083L18.3332 8.54167L13.7915 12.4792L15.1457 18.3333L9.99984 15.2292L4.854 18.3333Z"
                fill="#FBBC09"
              />
            </svg>
            <span className="mr-[16px] text-[14px] font-medium">9.0</span>
            <span className="text-[14px] font-medium">2023 | 2j 35m</span>
          </div>
          <div className="max-w-[638.716px] mt-[38px]">
            <p className="text-white font-medium text-[16px]">
              Menemukan dirinya berada di era baru, dan mendekati masa pensiun,
              Indy bergulat dengan dunia yang tampaknya sudah melampaui
              batasnya. Namun saat tentakel kejahatan yang sangat familiar
              kembali dalam wujud rival lamanya, Indy harus mengenakan topinya
              dan mengambil cambuknya sekali lagi untuk memastikan artefak kuno
              dan kuat tidak jatuh ke tangan yang salah.
            </p>
          </div>
          <div className="text-author mt-[32px]">
            Dibintangi:{" "}
            <span className="text-white">
              Winona Ryder, David Harbour, Millie Bobby Brown
            </span>
          </div>
          <div className="mt-[56px]">
            <button className="bg-[#E50914] button flex text-white items-center py-[16px] px-[24px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                className="w-[24px] h-[24px]"
              >
                <path
                  d="M1 12.2882C1 12.2882 5 4.28821 12 4.28821C19 4.28821 23 12.2882 23 12.2882C23 12.2882 19 20.2882 12 20.2882C5 20.2882 1 12.2882 1 12.2882Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 15.2882C13.6569 15.2882 15 13.9451 15 12.2882C15 10.6314 13.6569 9.28821 12 9.28821C10.3431 9.28821 9 10.6314 9 12.2882C9 13.9451 10.3431 15.2882 12 15.2882Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-[14px] font-medium">Lihat Film</span>
            </button>
          </div>
        </div>
      </HeroLayouts>
      <FilmLayouts title="Sedang Tayang">
        {sedangTayang.map((v, i) => (
          <Card
            key={i}
            url={v.url}
            title={v.title}
            time={v.time}
            onClick={() => handleDetail(v.title)}
          />
        ))}
      </FilmLayouts>
      <FilmLayouts title="Terpopuler">
        {sedangTayang.map((v, i) => (
          <Card key={i} url={v.url} title={v.title} time={v.time} />
        ))}
      </FilmLayouts>
      <FilmLayouts title="Mendatang">
        {sedangTayang.map((v, i) => (
          <Card key={i} url={v.url} title={v.title} time={v.time} />
        ))}
      </FilmLayouts>
      <GenreLayouts />
      <FooterLayouts />
    </>
  );
};

export default BerandaPage;
