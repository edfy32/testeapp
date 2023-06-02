"use client";

import React, { useState } from "react";
import { FaAngleDown, FaAngleUp, FaMapMarkerAlt } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward, IoMdClose } from "react-icons/io";
import { LuMapPin } from "react-icons/lu";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./styled.css";

interface Building {
  id: number;
  name: string;
  thumbImage: string;
  images: string[];
  description: string;
  location: string;
  price: string;
  details?: string[];
}

interface CarouselProps {
  buildings: Building[];
}

const Opportunitie: React.FC<CarouselProps> = ({ buildings }) => {
  const [showAll, setShowAll] = useState(false);
  //   const [nextButtonExists, setNextButtonExists] = useState(true);
  const [hoveredBuilding, setHoveredBuilding] = useState<Building | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedBuilding, setSelectedBuilding] = useState<Building | null>(
    null
  );

  const visibleBuildings = showAll ? buildings : buildings.slice(0, 4);

  const handleShowMore = () => {
    setShowAll(true);
  };

  const handleShowLess = () => {
    setShowAll(false);
  };

  const handleMouseEnter = (building: Building) => {
    setHoveredBuilding(building);
  };

  const handleMouseLeave = () => {
    setHoveredBuilding(null);
  };

  const handleViewDetails = (building: Building) => {
    setSelectedBuilding(building);
    setShowModal(true);
  };

  const DetailsComponent = ({ details }: any) => {
    const splitPoint = 5;
    const detailsColumn1 = details.slice(0, splitPoint);
    const detailsColumn2 = details.slice(splitPoint);

    return (
      <div className="details-container">
        <ul className="details-column">
          {detailsColumn1.map((detail: string, index: number) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
        <ul className="details-column">
          {detailsColumn2.map((detail: string, index: number) => (
            <li key={index + splitPoint}>{detail}</li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="carousel">
      <div className="cards carousel-container">
        {visibleBuildings.map((building) => (
          <div
            className="card"
            key={building.id}
            onMouseEnter={() => handleMouseEnter(building)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={building.thumbImage}
              alt={building.name}
              className="cardimg"
            />
            {hoveredBuilding === building && (
              <button
                className="details-button"
                onClick={() => handleViewDetails(building)}
              >
                VER DETALHES
              </button>
            )}
            <div
              className="card-details"
              onClick={() => handleViewDetails(building)}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h2 className="text-name">{building.name}</h2>
                <div className="green-circle-border">
                  <span className="green-circle"></span>
                </div>
              </div>
              <p className="text-location">{building.description}</p>
              <p className="text-price">{building.price}</p>
              <div className="text-location">
                <span className="location-icon">
                  <FaMapMarkerAlt />
                </span>{" "}
                {building.location}
              </div>
            </div>
          </div>
        ))}
      </div>
      {!showAll && (
        <div className="show-more-button-container">
          <button className="show-more-button" onClick={handleShowMore}>
            VER MAIS
            <span className="location-icon">
              <FaAngleDown />
            </span>
          </button>
          <div className="line"></div>
        </div>
      )}
      {showAll && (
        <div className="show-less-button-container">
          <button className="show-less-button" onClick={handleShowLess}>
            VER MENOS
            <span className="location-icon">
              <FaAngleUp />
            </span>
          </button>
          <div className="line"></div>
        </div>
      )}
      {showModal && selectedBuilding && (
        <div className="modal">
          <div className="modal-content">
            <button
              className="close-button"
              onClick={() => setShowModal(false)}
            >
              <span>
                <IoMdClose />
              </span>
            </button>
            <Carousel
              autoPlay
              showStatus={false}
              showThumbs={false}
              showIndicators={false}
              infiniteLoop={true}
              renderArrowPrev={(onClickHandler, hasPrev) =>
                hasPrev && (
                  <button
                    className="custom-carousel-button custom-carousel-prev-button"
                    onClick={onClickHandler}
                  >
                    <span>
                      <IoIosArrowBack />
                    </span>
                  </button>
                )
              }
              renderArrowNext={(onClickHandler, hasNext) =>
                hasNext && (
                  <button
                    className="custom-carousel-button custom-carousel-next-button"
                    onClick={onClickHandler}
                  >
                    <span>
                      <IoIosArrowForward />
                    </span>
                  </button>
                )
              }
            >
              {selectedBuilding.images.map((image, index) => (
                <div key={index}>
                  <img src={image} alt={selectedBuilding.name} />
                </div>
              ))}
            </Carousel>
            <div className="modal-text">
              <div className="container-mt-title-and-price">
                <div className="container-mt-title">
                  <h2 className="text-name">{selectedBuilding.name}</h2>
                  <p className="text-location">
                    {selectedBuilding.description}
                  </p>
                </div>
                <p className="text-price">{selectedBuilding.price}</p>
              </div>
              <div className="modal-text-locale">
                <span className="location-icon">
                  <LuMapPin />
                </span>
                <p>{selectedBuilding.location}</p>
              </div>

              {selectedBuilding.details &&
                selectedBuilding.details.length > 0 && (
                  <div className="container-details">
                    <h3 className="text-apartamento">APARTAMENTO</h3>
                    <DetailsComponent details={selectedBuilding.details} />
                  </div>
                )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Opportunitie;
