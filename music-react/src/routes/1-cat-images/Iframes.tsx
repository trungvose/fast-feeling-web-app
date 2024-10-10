const VIDEO_IDS = [
  'YJGCZCaIZkQ',
  'jAkpE34TGaI',
  'EPU7C-88_Ic',
  't0XCZr9ixXE',
  '4f4hosVvHTY',
  '_v_MEm9iV-c',
  'w04CfqZI8Xo',
  'uPB0KHKlrU8',
  '9zJcb6ZhBaI',
  'dQw4w9WgXcQ',
  '3JZ_D3ELwOQ',
  'hHUbLv4ThOo',
  'kJQP7kiw5Fk',
  'JGwWNGJdvx8',
  '2Vv-BfVoq4g',
  'OpQFFLBMEPI',
  'YQHsXMglC9A',
  'PT2_F-1esPk',
  'LsoLEjrDogU'
];

export const LazyLoadIFrames = () => {
  return (
    <div>
      {VIDEO_IDS.map((videoId) => (
        <iframe
          key={videoId}
          className="m-4"
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      ))}
    </div>
  );
};
