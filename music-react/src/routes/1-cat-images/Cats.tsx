export const Cats = () => {
  const catImages = Array.from({ length: 401 }, (_, i) => 400 + i);

  return (
    <div>
      {catImages.map((size) => (
        <div key={size} className="m-4">
          <h2 className="text-2xl">{size}</h2>
          <img
            loading="lazy"
            src={`https://placecats.com/${size}/${size}`}
            width={size}
            height={size}
            alt={`Cat ${size}`}
          />
        </div>
      ))}
    </div>
  );
};
