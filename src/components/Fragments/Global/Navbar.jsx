import { navItems } from "../../../utils/data";
import Search from "./Search";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#000000] z-50">
      <div className="flex container max-w-[1296px] bg-[#000000] mx-auto justify-between py-[32px]">
        <div className="flex gap-[107px] items-center">
          <div>
            <img
              src="https://s3-alpha-sig.figma.com/img/8f80/c9c1/8b0b2470a07543243ce6b2348eea2067?Expires=1698624000&Signature=Y7fVmeyGMofJ2Vd0rnK-Zw9pVDJrAGtm9vbaixSBP9H9NOlOrhqLYQY2jIyB8u7GhoD0n0-zYJJdJsGIwYzBHf~oyYzKMWSdVEsF~mNV0gBsJ2w4lLxRA~lI-~UuIvndVcKK8Q~fkbYhZU3JAuw0TUq3xQD5VBZLLhRU4P88HGM98LYlfMfJt61ZZ~0ElqJzaf7WqC7TBn4grljIsCv8DjX9lnzFs04pGueCPH5kLH~iL4hb8NOoqUrx1mcF~EgNFsoKHzUZwC0PcuKVNmwH2cqKiIO954SSA3FMtktYNy59erCswSUMv3WntbvQACq2Sl8cL~eg~GahChny9QKKlA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
              className="max-w-[162.511px] h-[46px]"
            />
          </div>
          <div className="hidden md:flex">
            <ul className="flex gap-[36px]">
              {navItems.map(({ title, url }) => (
                <li className="text-[#E0E3E8] text-[16px]" key={url}>
                  {title}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="md:hidden">
          <button className="text-[#E0E3E8]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:block">
          <Search />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
