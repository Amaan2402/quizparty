import Image from "next/image";

function PersonImage({
  width = 400,
  height = 400,
  src,
}: {
  width?: number;
  height?: number;
  src: string;
}) {
  return <Image src={src} alt="Person" width={width} height={height} />;
}

export default PersonImage;
