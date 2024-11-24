export default function Main(props) {
  const { data } = props;

  const isYouTubeLink = (url) => {
    return /youtube\.com|youtu\.be/.test(url); // Check for YouTube URL
  };

  const isVideo = (url) => {
    return /\.(mp4|webm|ogg)$/i.test(url);
  };

  return (
    <div className="img-container">
      {isYouTubeLink(data.url) ? (
        <iframe
          width="100%"
          height="315"
          src={`https://www.youtube.com/embed/${data.url.split("v=")[1]}`}
          title={data.title}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="bg-video"
        ></iframe>
      ) : isVideo(data.url) ? (
        <video controls>
          <source src={data.url} type="video/mp4" />
        </video>
      ) : (
        <img className="bg-image" src={data.hdurl} alt={data.title} />
      )}
    </div>
  );
}
