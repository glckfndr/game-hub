import platforms from "../data/platforms";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => {
  // const {
  //   data: platforms,
  //   error,
  //   isLoading,
  // } = useData<Platform>("platforms/lists/parents");

  return { platforms, error: null };
};

export default usePlatforms;
