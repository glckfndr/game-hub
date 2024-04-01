import genres from "../data/genres";
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => {
  //const { data: genres, error, isLoading } = useData<Genre>("genres");

  return { genres: genres, error: null, isLoading: false };
};

export default useGenres;
