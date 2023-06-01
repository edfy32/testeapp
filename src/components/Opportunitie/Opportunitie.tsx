"use client";

import React, { useState } from 'react';
import { FaMapMarkerAlt, FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { IoMdClose, IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import './styled.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


interface Building {
    id: number;
    name: string;
    thumbImage: string;
    images: string[];
    description: string;
    location: string;
    price: string;
}

interface CarouselProps {
    buildings: Building[];
}

const Opportunitie: React.FC<CarouselProps> = ({ buildings }) => {
    const [showAll, setShowAll] = useState(false);
    const [hoveredBuilding, setHoveredBuilding] = useState<Building | null>(null);
    const [showModal, setShowModal] = useState(false);
    const [selectedBuilding, setSelectedBuilding] = useState<Building | null>(null);

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
                        <img src={building.thumbImage} alt={building.name} className="cardimg" />
                        {hoveredBuilding === building && (
                            <button className="details-button" onClick={() => handleViewDetails(building)}>VER DETALHES</button>
                        )}
                        <div className="card-details">
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <h2 className="text-name">{building.name}</h2>
                                <div className="green-circle-border"><span className="green-circle"></span></div>
                            </div>
                            <p className="text-location">{building.description}</p>
                            <p className="text-price">{building.price}</p>
                            <div className="text-location">
                                <span className="location-icon"><FaMapMarkerAlt /></span> {building.location}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {!showAll && (
                <div className="show-more-button-container">
                    <button className="show-more-button" onClick={handleShowMore}>
                        VER MAIS
                        <span className="location-icon"><FaAngleDown /></span>
                    </button>
                    <div className="line"></div>
                </div>
            )}
            {showAll && (
                <div className="show-less-button-container">
                    <button className="show-less-button" onClick={handleShowLess}>
                        VER MENOS
                        <span className="location-icon"><FaAngleUp /></span>
                    </button>
                    <div className="line"></div>
                </div>
            )}
            {showModal && selectedBuilding && (
                <div className="modal">
                    <div className="modal-content">
                        <button className="close-button" onClick={() => setShowModal(false)}>
                            <span><IoMdClose /></span>
                        </button>
                        <Carousel
                            autoPlay
                            showStatus={false}
                            showThumbs={false}
                            showIndicators={false}
                            renderArrowPrev={(onClickHandler, hasPrev) =>
                                hasPrev && (
                                    <button className="custom-carousel-button custom-carousel-prev-button" onClick={onClickHandler}>
                                        <span><IoIosArrowBack /></span>
                                    </button>
                                )
                            }
                            renderArrowNext={(onClickHandler, hasNext) =>
                                hasNext && (
                                    <button className="custom-carousel-button custom-carousel-next-button" onClick={onClickHandler}>
                                        <span><IoIosArrowForward /></span>
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
                        <div className='modal-text'>
                            <h2 className="text-name">{selectedBuilding.name}</h2>
                            <p className="text-location">{selectedBuilding.description}</p>
                            <p className="text-price">{selectedBuilding.price}</p>
                            <p>
                                <span className="location-icon"><FaMapMarkerAlt /></span> {selectedBuilding.location}
                            </p>
                        </div>
                    </div>
                </div>
            )}


        </div>
    );
};

export default Opportunitie;