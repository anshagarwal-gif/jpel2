import React, { useEffect, useMemo } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import "./PlasticRecycling.css";
import ScrollTransition from "../../Components/ScrollTransion/ScrollTransition";

const PlasticRecycling = () => {
    const location = useLocation();
    const { category } = useParams();
    
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
                        description: "Industrial grade woven sacks"
                    },
                    {
                        subtitle: "Winding Machines",
                        link: "/WindingMachine",
                        description: "Advanced PET bottle washing systems"
                    },
                    {
                        subtitle: "Circular Looms",
                        link: "/CircularLoom",
                        description: "Complete HDPE recycling solutions"
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
                        description: "Industrial shredding machines"
                    },
                    {
                        subtitle: "Printing Machines",
                        link: "/PrintingMachine",
                        description: "Industrial shredding machines"
                    },
                    {
                        subtitle: "Bag Conversion Machines",
                        link: "/Bag-Conversion",
                        description: "Industrial shredding machines"
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
                        description: "Industrial grade woven sacks"
                    },
                    {
                        subtitle: "PET Washing Line",
                        link: "/PET",
                        description: "Advanced PET bottle washing systems"
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
                        description: "Complete HDPE recycling solutions"
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
                        description: "Industrial grade woven sacks"
                    },
                    {
                        subtitle: "Box-Strapping Line",
                        link: "/BoxStrapping",
                        description: "Advanced PET bottle washing systems"
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
                        description: "Industrial grade woven sacks"
                    },
                    {
                        subtitle: "Cast Film Line",
                        link: "/CastLine",
                        description: "Advanced PET bottle washing systems"
                    },
                    {
                        subtitle: "Flexible Packaging",
                        link: "/Flexible",
                        description: "Advanced PET bottle washing systems"
                    }
                ]
            }
        ]
    }), []); // Empty dependency array since this data is static

    useEffect(() => {
        // Get the target category from either params or pathname
        const targetCategory = category || location.pathname.split('/').pop();
        
        // Add a small delay to ensure DOM elements are ready
        const scrollTimer = setTimeout(() => {
            if (allSections[targetCategory]) {
                const firstSectionId = allSections[targetCategory][0].id;
                const element = document.getElementById(firstSectionId);
                
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        }, 500);

        // Cleanup function to clear the timeout
        return () => clearTimeout(scrollTimer);
    }, [category, location.pathname, allSections]);
    

    return (
        <div>
            {Object.entries(allSections).map(([sectionCategory, sectionGroup]) => (
                sectionGroup.map((section, index) => (
                    <ScrollTransition
                        key={`${sectionCategory}-${index}`}
                        id={section.id}
                        title={section.title}
                        sections={section.sections}
                        className="custom-class"
                        titleClassName="custom-title-class"
                    />
                ))
            ))}
        </div>
    );
};

export default PlasticRecycling;