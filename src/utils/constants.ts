import { Option } from "./types";

export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const USER_AVATAR: string =
  "https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e";

export const API_CONSTANT = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Yjg0ZTZlZTU2ZmM0YzE5ZDkyMjFhZTk5YThmMDBmMiIsInN1YiI6IjYyMGZmM2Q1ZjkwYjE5MDA0NGU4YTMwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iG_1BhQq4HGoHODptJhjiwbhHuitIiLY7UEW_raeddc",
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";

export const SUPPORTED_LANGUAGE:Option[] = [
  { value: "en", label: "English" },
  { value: "hindi", label: "Hindi" },
  { value: "bengali", label: "Bengali" },
  { value: "spanish", label: "Spanish" },
];
