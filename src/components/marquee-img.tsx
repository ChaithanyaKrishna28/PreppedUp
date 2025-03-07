export const MarqueImg = ({ img }: { img: string }) => {
  return (
    <div className="flex justify-center items-center mx-12 xl:mx-16">
      <img
        src={img}
        alt="Marque"
        className="w-44 h-44 xl:w-52 xl:h-52 object-contain grayscale transition-transform duration-300 ease-in-out hover:scale-105"
      />
    </div>
  );
};
