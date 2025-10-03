import React, { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "./PlasticRecycling.css";
import ScrollTransition from "../../Components/ScrollTransion/ScrollTransition";

const PlasticRecycling = () => {
    const location = useLocation();
    const navigate = useNavigate();
    
    // State to track if we're showing categories or products
    const [showCategories, setShowCategories] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState(null);
    
    // Memoize the sections data to prevent recreation on every render
    const allSections = useMemo(() => ({
        "woven-packaging": [
            {
                id: "woven12",
                title: "Woven Packaging",
                sections: [
                    {
                        subtitle: "Tape Extrusion",
                        link: "/TapeExtrusion",
                        description: "High-strength tapes for woven sacks, tarpaulins, and ropes."
                    },
                    {
                        subtitle: "Winding Machines",
                        link: "/WindingMachine",
                        description: "Uniformly winding stretched tapes for woven fabric production"
                    },
                    {
                        subtitle: "Circular Looms",
                        link: "/CircularLoom",
                        description: "Efficiently weaving fabric for bags and geotextiles."
                    }
                ]
            },
            {
                id: "woven13",
                title: "Woven Packaging",
                sections: [
                    {
                        subtitle: "Extrusion Coating",
                        link: "/ExtrusionCoating",
                        description: "Laminating substrates for enhanced durability and protection."
                    },
                    {
                        subtitle: "Printing Machines",
                        link: "/PrintingMachine",
                        description: "High-quality printing on woven fabrics and sacks."
                    },
                    {
                        subtitle: "Bag Conversion Machines",
                        link: "/Bag-Conversion",
                        description: "Transforming fabric into finished bags for various applications."
                    },
                    {
                        subtitle: "Block Bottom Sack Conversion Line",
                        link: "/BBB",
                        description: "JP Group x Gachn Group (A Strategic Collaboration for Innovation)"
                    }
                ]
            }
        ],
        "plastic-recycling": [
            {
                id: "Plastic21",
                title: "Plastic Recycling",
                sections: [
                    {
                        subtitle: "Woven Sacks",
                        link: "/WovenSack",
                        description: "Processing waste materials into reusable plastic products."
                    },
                    {
                        subtitle: "PET Washing Line",
                        link: "/PET",
                        description: "To produce high-quality PET flakes"
                    }
                ]
            },
            {
                id: "Plastic22",
                title: "Plastic Recycling",
                sections: [
                    {
                        subtitle: "Battery Box Recycling",
                        link: "/BatteryBox",
                        description:"Converting plastic waste into reusable plastic chips"
                    }
                ]
            }
        ],
        "profile-extrusion": [
            {
                id: "Profile34",
                title: "Profile Extrusion",
                sections: [
                    {
                        subtitle: "Monofilament Line/Danline",
                        link: "/Monofilament",
                        description: "Manufacturing monofilaments for ropes, nets, and brushes."
                    },
                    {
                        subtitle: "Box-Strapping Line",
                        link: "/BoxStrapping",
                        description: "Producing durable strapping for packaging and bundling."
                    }
                ]
            }
        ],
        "sheet-film-extrusion": [
            {
                id: "SheetFilm43",
                title: "Sheet/Film Extrusion",
                sections: [
                    {
                        subtitle: "Sheet Extrusion Line",
                        link: "/SheetExtrusion",
                        description: "Creating multi-layer sheets for thermoforming applications."
                    },
                    {
                        subtitle: "Cast Film Line",
                        link: "/CastLine",
                        description: "Producing multi-layer cast films for flexible packaging."
                    },
                    {
                        subtitle: "Flexible Packaging",
                        link: "/Flexible",
                        description: "Producing multi-layer laminates with film, foil, and paper for advanced packaging solutions."
                    }
                ]
            }
        ]
    }), []); // Empty dependency array since this data is static

    // Directly check URL to determine view
    useEffect(() => {
        // Get current URL path
        const path = location.pathname;
        
        // Check for main PlasticRecycling path - should show categories
        if (path === "/PlasticRecycling" || path === "/PlasticRecycling/") {
            setShowCategories(true);
            setSelectedCategory(null);
            return;
        }
        
        // For any other URL pattern, show products view without categories sections
        setShowCategories(false);
        
        // If URL contains product-line, don't filter products (show all)
        if (path.includes("product-line")) {
            setSelectedCategory(null); // No category filter for product line
            return;
        }
        
        // Check if URL contains any known category
        const pathParts = path.split('/');
        const lastPart = pathParts[pathParts.length - 1];
        
        if (Object.keys(allSections).includes(lastPart)) {
            // URL contains a category name, filter by this category
            setSelectedCategory(lastPart);
        } else {
            // Check for specific product URLs
            let foundCategory = null;
            Object.entries(allSections).forEach(([categoryKey, categoryGroups]) => {
                categoryGroups.forEach(group => {
                    group.sections.forEach(section => {
                        const productPath = section.link.substring(1); // Remove leading slash
                        if (productPath === lastPart) {
                            foundCategory = categoryKey;
                        }
                    });
                });
            });
            
            if (foundCategory) {
                setSelectedCategory(foundCategory);
            } else {
                // If no category or product match found, don't filter
                setSelectedCategory(null);
            }
        }
    }, [location.pathname, allSections]);
    
    // Handle explore button clicks
    const handleExploreClick = (categoryKey) => {
        // Navigate to the category view
        navigate(`/PlasticRecycling/${categoryKey}`);
    };
    
    // Category sections for home page
    const renderCategorySections = () => (
        <div className="category-sections-container">
            <section className="category-section woven-packaging-section">
                <div className="category-overlay"></div>
                <div className="category-title">WOVEN PACKAGING</div>
                <button 
                    className="explore-button" 
                    onClick={() => handleExploreClick('woven-packaging')}
                >
                    EXPLORE
                </button>
            </section>
            
            <section className="category-section plastic-recycling-section">
                <div className="category-overlay"></div>
                <div className="category-title">PLASTIC RECYCLING</div>
                <button 
                    className="explore-button" 
                    onClick={() => handleExploreClick('plastic-recycling')}
                >
                    EXPLORE
                </button>
            </section>
            
            <section className="category-section profile-extrusion-section">
                <div className="category-overlay"></div>
                <div className="category-title">PROFILE EXTRUSION</div>
                <button 
                    className="explore-button" 
                    onClick={() => handleExploreClick('profile-extrusion')}
                >
                    EXPLORE
                </button>
            </section>
            
            <section className="category-section sheet-film-section">
                <div className="category-overlay"></div>
                <div className="category-title">SHEET/FILM EXTRUSION</div>
                <button 
                    className="explore-button" 
                    onClick={() => handleExploreClick('sheet-film-extrusion')}
                >
                    EXPLORE
                </button>
            </section>
        </div>
    );

    return (
        <div className="plastic-recycling-container">
            {showCategories ? (
                // Show category sections on home page
                renderCategorySections()
            ) : (
                // Show products scroller
                <ScrollTransition 
                    recyclingData={allSections}
                    initialCategory={selectedCategory}
                    onlyShowCategory={selectedCategory !== null}
                />
            )}
        </div>
    );
};

export default PlasticRecycling;