const FooterLayouts = () => {
  return (
    <footer className="w-full text-white bg-[#0F172A] pt-[62px]">
      <div className="container mx-auto flex flex-col gap-20 ">
        <div className="flex flex-row gap-[61px] justify-between">
          <ul className="gap-[30px] flex flex-col">
            <li>FAQ</li>
            <li>Relasi Investor</li>
            <li>Cara Menonton</li>
            <li>Informasi Perusahaan</li>
            <li>Hanya di Pluit Sakti</li>
          </ul>
          <ul className="gap-[30px] flex flex-col">
            <li>Pusat Bantuan</li>
            <li>Pekerjaan</li>
            <li>Aturan Penggunaan</li>
            <li>Kontak Kami</li>
          </ul>
          <ul className="gap-[30px] flex flex-col">
            <li>Akun</li>
            <li>Privasi</li>
            <li>Tes Kecepatan</li>
            <li>Pusat Media</li>
            <li>Pengaturan Kuki</li>
          </ul>
          <div>
            <span className="">Dapatkan Aplikasi</span>
            <div className="flex flex-col  gap-[8px] mt-[30px] mb-[48px]">
              <img
                src="public/Images/img2.svg"
                alt=""
                className="w-[119.664px] h-[40px]"
              />
              <img
                src="public/Images/img1.png"
                alt=""
                className="w-[135px] h-[40px] object-cover -ml-2"
              />
            </div>
            <div className="flex gap-[12px] flex-col">
              <span>Ikuti Kami</span>
              <div className="flex gap-[16px]">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M17.812 5.01699H6.145C3.855 5.01699 2 6.85199 2 9.11599V14.884C2 17.148 3.856 18.984 6.145 18.984H17.812C20.102 18.984 21.957 17.148 21.957 14.884V9.11599C21.957 6.85199 20.101 5.01599 17.812 5.01599V5.01699ZM15.009 12.28L9.552 14.855C9.51872 14.871 9.48192 14.8784 9.44503 14.8763C9.40815 14.8743 9.37237 14.863 9.34103 14.8434C9.3097 14.8239 9.28382 14.7967 9.2658 14.7645C9.24779 14.7322 9.23822 14.6959 9.238 14.659V9.34999C9.23867 9.31286 9.24872 9.27651 9.26722 9.24432C9.28573 9.21212 9.31208 9.18513 9.34382 9.16587C9.37556 9.1466 9.41167 9.13568 9.44877 9.13413C9.48587 9.13258 9.52276 9.14044 9.556 9.15699L15.014 11.892C15.0504 11.9101 15.0809 11.9381 15.102 11.9728C15.1232 12.0075 15.1341 12.0474 15.1336 12.0881C15.1331 12.1287 15.1211 12.1683 15.0991 12.2025C15.077 12.2366 15.0458 12.2638 15.009 12.281V12.28Z"
                    fill="#E2E8F0"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M9.04623 5.865V8.613H7.03223V11.973H9.04623V21.959H13.1802V11.974H15.9552C15.9552 11.974 16.2152 10.363 16.3412 8.601H13.1972V6.303C13.1972 5.96 13.6472 5.498 14.0932 5.498H16.3472V2H13.2832C8.94323 2 9.04623 5.363 9.04623 5.865Z"
                    fill="#E2E8F0"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M22 5.90704C21.2504 6.23442 20.4565 6.44908 19.644 6.54404C20.4968 6.04327 21.138 5.24915 21.448 4.31004C20.64 4.78037 19.7587 5.11164 18.841 5.29004C18.4545 4.88525 17.9897 4.56343 17.4748 4.34422C16.9598 4.12501 16.4056 4.01301 15.846 4.01504C13.58 4.01504 11.743 5.82504 11.743 8.05504C11.743 8.37104 11.779 8.68004 11.849 8.97504C10.2236 8.89774 8.63212 8.48245 7.17617 7.75568C5.72022 7.02891 4.43176 6.00662 3.393 4.75404C3.02883 5.36844 2.83742 6.06982 2.839 6.78404C2.8397 7.45201 3.00683 8.10927 3.32529 8.69644C3.64375 9.2836 4.1035 9.78215 4.663 10.147C4.01248 10.126 3.37602 9.95237 2.805 9.64004V9.69004C2.805 11.648 4.22 13.281 6.095 13.653C5.74261 13.7465 5.37958 13.7939 5.015 13.794C4.75 13.794 4.493 13.769 4.242 13.719C4.51008 14.527 5.02311 15.2314 5.70982 15.7344C6.39653 16.2374 7.22284 16.5141 8.074 16.526C6.61407 17.6506 4.82182 18.2581 2.979 18.253C2.647 18.253 2.321 18.233 2 18.197C3.88125 19.3877 6.06259 20.0183 8.289 20.015C15.836 20.015 19.962 13.858 19.962 8.51904L19.948 7.99604C20.7529 7.42971 21.4481 6.72189 22 5.90704Z"
                    fill="#E2E8F0"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M16.017 2H7.947C6.37015 2.00185 4.85844 2.62914 3.74353 3.74424C2.62862 4.85933 2.00159 6.37115 2 7.948L2 16.018C2.00185 17.5948 2.62914 19.1066 3.74424 20.2215C4.85933 21.3364 6.37115 21.9634 7.948 21.965H16.018C17.5948 21.9631 19.1066 21.3359 20.2215 20.2208C21.3364 19.1057 21.9634 17.5938 21.965 16.017V7.947C21.9631 6.37015 21.3359 4.85844 20.2208 3.74353C19.1057 2.62862 17.5938 2.00159 16.017 2V2ZM19.957 16.017C19.957 16.5344 19.8551 17.0468 19.6571 17.5248C19.4591 18.0028 19.1689 18.4371 18.803 18.803C18.4371 19.1689 18.0028 19.4591 17.5248 19.6571C17.0468 19.8551 16.5344 19.957 16.017 19.957H7.947C6.90222 19.9567 5.90032 19.5415 5.16165 18.8026C4.42297 18.0638 4.008 17.0618 4.008 16.017V7.947C4.00827 6.90222 4.42349 5.90032 5.16235 5.16165C5.90122 4.42297 6.90322 4.008 7.948 4.008H16.018C17.0628 4.00827 18.0647 4.42349 18.8034 5.16235C19.542 5.90122 19.957 6.90322 19.957 7.948V16.018V16.017Z"
                    fill="#E2E8F0"
                  />
                  <path
                    d="M11.9818 6.81897C10.6133 6.82109 9.30136 7.36576 8.33372 8.33358C7.36609 9.3014 6.82168 10.6134 6.81982 11.982C6.82141 13.3509 7.36585 14.6633 8.33372 15.6314C9.3016 16.5994 10.6139 17.1441 11.9828 17.146C13.3519 17.1444 14.6645 16.5998 15.6326 15.6317C16.6007 14.6636 17.1452 13.3511 17.1468 11.982C17.1447 10.6131 16.5998 9.30085 15.6315 8.33316C14.6633 7.36547 13.3507 6.82129 11.9818 6.81997V6.81897ZM11.9818 15.138C11.1451 15.138 10.3426 14.8056 9.7509 14.2139C9.15922 13.6222 8.82682 12.8197 8.82682 11.983C8.82682 11.1462 9.15922 10.3437 9.7509 9.75205C10.3426 9.16037 11.1451 8.82797 11.9818 8.82797C12.8186 8.82797 13.6211 9.16037 14.2127 9.75205C14.8044 10.3437 15.1368 11.1462 15.1368 11.983C15.1368 12.8197 14.8044 13.6222 14.2127 14.2139C13.6211 14.8056 12.8186 15.138 11.9818 15.138Z"
                    fill="#E2E8F0"
                  />
                  <path
                    d="M17.1559 8.09497C17.8391 8.09497 18.3929 7.54115 18.3929 6.85797C18.3929 6.1748 17.8391 5.62097 17.1559 5.62097C16.4728 5.62097 15.9189 6.1748 15.9189 6.85797C15.9189 7.54115 16.4728 8.09497 17.1559 8.09497Z"
                    fill="#E2E8F0"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M21.959 13.719V21.098H17.681V14.213C17.681 12.483 17.062 11.303 15.514 11.303C14.332 11.303 13.628 12.099 13.319 12.868C13.206 13.143 13.177 13.526 13.177 13.911V21.098H8.897C8.897 21.098 8.955 9.438 8.897 8.229H13.177V10.053L13.149 10.095H13.177V10.053C13.745 9.178 14.76 7.927 17.033 7.927C19.848 7.927 21.959 9.767 21.959 13.719ZM4.421 2.026C2.958 2.026 2 2.986 2 4.249C2 5.484 2.93 6.473 4.365 6.473H4.393C5.886 6.473 6.813 5.484 6.813 4.249C6.787 2.986 5.887 2.026 4.422 2.026H4.421ZM2.254 21.098H6.532V8.229H2.254V21.098Z"
                    fill="#E2E8F0"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between border-t border-t-[#545454] py-[34px] border-solid">
          <div className="flex gap-[12.82px] items-center">
            <img
              src="https://s3-alpha-sig.figma.com/img/8f80/c9c1/8b0b2470a07543243ce6b2348eea2067?Expires=1698624000&Signature=Y7fVmeyGMofJ2Vd0rnK-Zw9pVDJrAGtm9vbaixSBP9H9NOlOrhqLYQY2jIyB8u7GhoD0n0-zYJJdJsGIwYzBHf~oyYzKMWSdVEsF~mNV0gBsJ2w4lLxRA~lI-~UuIvndVcKK8Q~fkbYhZU3JAuw0TUq3xQD5VBZLLhRU4P88HGM98LYlfMfJt61ZZ~0ElqJzaf7WqC7TBn4grljIsCv8DjX9lnzFs04pGueCPH5kLH~iL4hb8NOoqUrx1mcF~EgNFsoKHzUZwC0PcuKVNmwH2cqKiIO954SSA3FMtktYNy59erCswSUMv3WntbvQACq2Sl8cL~eg~GahChny9QKKlA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
              className="max-w-[127.182px] w-full "
            />
            <span className="text-[16px] font-medium">
              @ 2023. All rights reserved.
            </span>
          </div>
          <div>
            <ul className="flex gap-[30px] text-[20px]">
              <li>Aturan</li>
              <li>Privasi</li>
              <li>Kontak</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterLayouts;
