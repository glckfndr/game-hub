import { ImageProps, Image } from "@chakra-ui/react";
import bullsEye from "../assets/bulls-eye.webp";
import meh from "../assets/meh.webp";
import thumbUp from "../assets/thumbs-up.webp";

const emojiMap: { [key: number]: ImageProps } = {
  3: { src: meh, alt: "mesh", boxSize: "2rem" },
  4: { src: thumbUp, alt: "recommended", boxSize: "2rem" },
  5: { src: bullsEye, alt: "exceptional", boxSize: "2.6rem" },
};

interface Props {
  rating: number;
}
const Emoji = ({ rating }: Props) => {
  return <Image {...emojiMap[rating]} marginTop={1} />;
};

export default Emoji;
