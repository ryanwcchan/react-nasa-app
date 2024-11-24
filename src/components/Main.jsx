export default function Main(props) {
  const { data } = props;

  const isYouTubeLink = (url) => {
    return /youtube\.com|youtu\.be/.test(url); // Check for YouTube URL
  };

  const isVideo = (url) => {
    return /\.(mp4|webm|ogg)$/i.test(url);
  };

  const isYouTubeEmbed = (url) => {
    return /youtube\.com\/embed\//.test(url);
  };

  const getYouTubeVideoId = (url) => {
    const regExp =
      /(?:https?:\/\/(?:www\.)?youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regExp);
    return match ? match[1] : null;
  };

  return (
    <div className="img-container">
      {isYouTubeEmbed(data.url) ? (
        // Handle YouTube Embed URL
        <div className="youtube-video-container">
          <iframe
            width="100%"
            height="315"
            src={data.url}
            title={data.title}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="bg-video"
          ></iframe>
        </div>
      ) : isYouTubeLink(data.url) ? (
        // Handle regular YouTube Link (Watch URL)
        <div className="youtube-video-container">
          {getYouTubeVideoId(data.url) ? (
            <iframe
              width="100%"
              height="315"
              src={`https://www.youtube.com/embed/${getYouTubeVideoId(
                data.url
              )}?rel=0&autoplay=0&modestbranding=1`}
              title={data.title}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="bg-video"
            ></iframe>
          ) : (
            <p>YouTube Video Link could not be loaded.</p> // Provide feedback if invalid YouTube link
          )}
        </div>
      ) : isVideo(data.url) ? (
        // Handle video file (mp4, webm, etc.)
        <video controls className="bg-video">
          <source src={data.url} type="video/mp4" />
          {/* You can add more <source> tags for other formats */}
          Your browser does not support the video tag.
        </video>
      ) : (
        // Default to an image
        <img className="bg-image" src={data.url} alt={data.title} />
      )}
    </div>
  );
}
