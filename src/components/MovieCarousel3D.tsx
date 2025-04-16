import { useKeenSlider, KeenSliderPlugin } from "keen-slider/react";
import { Movie } from "../types/types";
import { Image, Box } from "@chakra-ui/react";
import "keen-slider/keen-slider.min.css";
import "./MovieCarousel3D.css";
import { useState, useEffect } from "react";
import { Spinner } from "@chakra-ui/react";

type Props = {
  movies: Movie[];
};

const carousel: KeenSliderPlugin = (slider) => {
  const z = 300; // distance from the center of the carousel to the slides
  const rotate = () => {
    //slider.track.details.progress is a value from 0 to 1 (0% to 100% of scroll progress)
    //It rotates the entire container while pushing it back z units to create a 3D effect.
    const deg = 360 * slider.track.details.progress;
    slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`;
  }
  slider.on("created", () => {
    const deg = 360 / slider.slides.length; // spaces slides evenly around a circle.
    slider.slides.forEach((element, idx) => {
      element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`;
    });
    rotate(); //calls to position the initial state.
  });
  slider.on("detailsChanged", rotate); //This updates the rotation whenever the slide details change like dragging
};

export const MovieCarousel3D = (props: Props) => {
  const [loading, setLoading] = useState<Boolean>(true);
  useEffect(() => {
    if (props.movies.length > 0) {
      setLoading(false);
    }
  });
  const [sliderRef] = useKeenSlider(
    {
      loop: true, //makes the carousel infinite
      selector: ".carousel__cell", //which elements to treat as slides
      renderMode: "custom", //allows some free scrolling but snaps to slides
      mode: "free-snap",
    },
    [carousel]
  );

  return loading ? (
    <Spinner size="md" />
  ) : (
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
