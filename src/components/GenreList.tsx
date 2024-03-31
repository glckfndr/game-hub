import React from "react";
import useGenres from "../hooks/useGenres";
import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
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
              <Text fontSize="lg">{gen.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default GenreList;
