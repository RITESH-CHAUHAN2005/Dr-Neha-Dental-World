import { useState } from "react";
import { X, Play, Image as ImageIcon } from "lucide-react";
import receptionArea from "@/assets/reception-area.jpg";

const videos = [
  {
    id: 1,
    title: "Clinic Tour",
    thumbnail: "/videos/clinic-tour.mp4",
    url: "/videos/clinic-tour.mp4",
  },
  {
    id: 2,
    title: "Dental Care",
    thumbnail: "/videos/dental-care.mp4",
    url: "/videos/dental-care.mp4",
  },
  {
    id: 3,
    title: "Our Team",
    thumbnail: "/videos/team.mp4",
    url: "/videos/team.mp4",
  },
  {
    id: 4,
    title: "Dental Implant Treatment",
    thumbnail: "https://drive.google.com/thumbnail?id=142BFNA7shp3cnA52kaQW2C6TK0gsK1Xa&sz=w800",
    url: "https://drive.google.com/file/d/142BFNA7shp3cnA52kaQW2C6TK0gsK1Xa/preview",
  },
];

const images = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&auto=format",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&auto=format",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&auto=format",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&auto=format",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&auto=format",
  },
  {
    id: 6,
    url: receptionArea,
  },
];

const Media = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[300px] sm:h-[350px] md:h-[400px] flex items-center justify-center overflow-hidden bg-gradient-to-r from-primary to-primary/80">
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 animate-fade-in">Media Gallery</h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl animate-slide-up">Explore Our Clinic & Services</p>
        </div>
      </section>

      {/* Video Gallery */}
      <section className="py-12 sm:py-16 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4 flex items-center justify-center flex-wrap gap-2">
              <Play className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              Video Gallery
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground px-2">
              Watch our videos to learn more about our clinic and services
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {videos.map((video) => (
              <div
                key={video.id}
                className="group relative cursor-pointer animate-scale-in overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all"
                onClick={() => setSelectedVideo(video.url)}
              >
                {video.id === 4 ? (
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-64 object-cover"
                  />
                ) : (
                  <video
                    src={video.thumbnail}
                    className="w-full h-64 object-cover"
                    muted
                    loop
                    playsInline
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => {
                      e.currentTarget.pause();
                      e.currentTarget.currentTime = 0;
                    }}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform mb-3">
                    <Play className="w-8 h-8 text-accent ml-1" />
                  </div>
                  <h3 className="text-white text-lg font-semibold drop-shadow-lg">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-12 sm:py-16 px-4 bg-gradient-to-b from-white to-secondary/20">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4 flex items-center justify-center flex-wrap gap-2">
              <ImageIcon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              Photo Gallery
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground px-2">
              Take a virtual tour of our state-of-the-art facility
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {images.map((image) => (
              <div
                key={image.id}
                className="group relative cursor-pointer animate-scale-in overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all"
                onClick={() => setSelectedImage(image.url)}
              >
                <img
                  src={image.url}
                  alt="Dr Neha Dental World Gallery"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Lightbox */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedVideo(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
            onClick={() => setSelectedVideo(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            {selectedVideo?.includes('drive.google.com') ? (
              <iframe
                src={selectedVideo}
                className="w-full aspect-video rounded-lg"
                allow="autoplay"
                allowFullScreen
              />
            ) : (
              <video
                src={selectedVideo}
                className="w-full rounded-lg"
                controls
                autoPlay
              />
            )}
          </div>
        </div>
      )}

      {/* Image Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage}
            alt="Gallery"
            className="max-w-full max-h-full rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Media;
