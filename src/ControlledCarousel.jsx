import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
   faGalacticRepublic
} from "@fortawesome/free-brands-svg-icons";
import { 
  faBed,faCity,faForward,faBackward,  faIcons, faHome, faHeart, faComment, faCamera, faCog, faMusic, 
  faStreetView,
  faStore,
  faWater,
  faRankingStar,
  faHouse,
  faStar,
  faBox,
  faNewspaper,
  faEarthAfrica,
  faLandmark,
  faWheatAwn,
  faTree,
  faGamepad,
  faCropSimple,
  faPaintBrush,
  faGolfBallTee,
  faSnowflake,
  faCoffee,
  faPersonSkating,
  faCampground,
  faUmbrellaBeach,
  faHourglass,
  faTowerObservation,
  faBreadSlice
} from "@fortawesome/free-solid-svg-icons";
import "./ControlledCarousel.css";

function ControlledCarousel() {
  const iconData = [
    { icon: faIcons, label: "Icons" },
    { icon: faBed, label: "Rooms" },
    { icon: faCity, label: "Top cities" },
    { icon: faStreetView, label: "Views" },
    { icon: faStore, label: "Caves" },
    { icon: faWater, label: "Lake" },
    { icon: faBreadSlice, label: "Breakfast" },
    { icon: faRankingStar, label: "Mansions" },
    { icon: faHouse, label: "Castles" },
    { icon: faStar, label: "OMG!" },
    { icon: faHeart, label: "Trending" },
    { icon: faGalacticRepublic, label: "Arctic" },
    { icon: faBox, label: "Cabins" },
    { icon: faNewspaper, label: "New" },
    { icon: faEarthAfrica, label: "Countryside" },
    { icon: faHeart, label: "Luxe" },
    { icon: faWater, label: "Tropical" },
    { icon: faLandmark, label: "Islands" },
    { icon: faWheatAwn, label: "Farms" },
    { icon: faTree, label: "Treehouses" },
    { icon: faGamepad, label: "Play" },
    { icon: faCropSimple, label: "A-frames" },
    { icon: faPaintBrush, label: "Design" },
    { icon: faCamera, label: "Ski-in/out" },
    { icon: faWater, label: "Lakefront" },
    { icon: faGolfBallTee, label: "Golfing" },
    { icon: faTree, label: "Parks" },
    { icon: faSnowflake, label: "Skiing" },
    { icon: faCoffee, label: "Kitchens" },
    { icon: faPersonSkating, label: "Surfing" },
    { icon: faHome, label: "Homes" },
    { icon: faBox, label: "Containers" },
    { icon: faWater, label: "Pools" },
    { icon: faHeart, label: "Minsus" },
    { icon: faComment, label: "Barns" },
    { icon: faUmbrellaBeach, label: "Beach" },
    { icon: faCampground, label: "Camping" },
    { icon: faHourglass, label: "Deserts" },
    { icon: faTowerObservation, label: "Towers" },
    { icon: faStore, label: "Brands" },
    { icon: faCropSimple, label: "Vineyards" },
    { icon: faPaintBrush, label: "Design" },
    { icon: faCamera, label: "Ski-in/out" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 5; // Number of icons visible at one time

  // Handlers for next and previous buttons
  const nextSlide = () => {
    if (currentIndex < iconData.length - itemsPerView) {
      setCurrentIndex(currentIndex + 12);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 12);
    }
  };

  return (
    <>
      <div className="carousel-container">
        <button
          id="prevButtonC"
          onClick={prevSlide}
          disabled={currentIndex === 0}
          style={{ display: currentIndex === 0 ? 'none' : 'block' }} // Show only after moving forward
        >
           <FontAwesomeIcon icon={faBackward} size="1x" />
        </button>

        <div id="main_icons">
        <div className="icon-container" style={{ transform: `translateX(-${currentIndex * 110}px)` }}>

            {iconData.map((item, index) => (
              <div key={index} className="icon-item">
                <FontAwesomeIcon icon={item.icon} size="1x" />
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <button
          id="nextButtonC"
          onClick={nextSlide}
          disabled={currentIndex >= iconData.length - itemsPerView}
        >
          <FontAwesomeIcon icon={faForward} size="1x" />
        </button>
      </div>
    </>
  );
}

export default ControlledCarousel;