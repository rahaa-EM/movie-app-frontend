import { useKeenSlider, KeenSliderPlugin } from "keen-slider/react";
import { Movie } from "../types/types";
import { Image, Box } from "@chakra-ui/react";
import "keen-slider/keen-slider.min.css";
import "./MovieCarousel3D.css";

type Props = {
  movies: Movie[];
};

const carousel: KeenSliderPlugin = (slider) => {
  const z = 300;
  function rotate() {
    const deg = 360 * slider.track.details.progress;
    slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`;
  }
  slider.on("created", () => {
    const deg = 360 / slider.slides.length;
    slider.slides.forEach((element, idx) => {
      element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`;
    });
    rotate();
  });
  slider.on("detailsChanged", rotate);
};

export const MovieCarousel3D = (props: Props) => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      selector: ".carousel__cell",
      renderMode: "custom",
      mode: "free-snap",
    },
    [carousel]
  );

  return (
    <Box className="wrapper">
      <Box className="scene">
        <Box className="carousel keen-slider" ref={sliderRef}>
          {props.movies.map((movie) => (
            <Box className="carousel__cell" key={movie.id}>
              <Image
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
                borderRadius="md"
                boxShadow="lg"
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
