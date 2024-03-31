import useGenres, { Genre } from "../hooks/useGenres";
import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  selectGenre: (genre: Genre) => void;
}

const GenreList = ({ selectGenre }: Props) => {
  const { genres, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <div>
      <List>
        {genres.map((gen) => (
          <ListItem key={gen.id} paddingY="5px">
            <HStack>
              <Image
                src={getCroppedImageUrl(gen.image_background)}
                boxSize="32px"
                borderRadius={8}
              ></Image>
              <Button
                variant="link"
                fontSize="lg"
                onClick={() => selectGenre(gen)}
              >
                {gen.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default GenreList;
