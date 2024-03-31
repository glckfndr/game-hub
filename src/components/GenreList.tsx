import React from "react";
import useGenres from "../hooks/useGenres";
import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { genres } = useGenres();
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
