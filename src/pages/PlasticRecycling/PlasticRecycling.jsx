import React, { useEffect, useMemo, useState } from 'react';

const PlasticRecycling = ({ initialCategory = 'woven-packaging' }) => {
    const [scrollY, setScrollY] = useState(0);
    
    // Memoize the sections data
    const allSections = useMemo(() => ({
        "woven-packaging": [
            {
                id: "woven12",
                title: "Woven Packaging",
                sections: [
                    {
                        subtitle: "Tape Extrusion",
                        image: require("../PlasticRecycling/Assets/recycling-3.jpg"),
                        link: "TapeExtrusion",
                        description: "Industrial grade woven sacks"
                    },
                    {
                        subtitle: "Tape Winding",
                        image: require("../PlasticRecycling/Assets/recycling-2.jpg"),
                        link: "WindingMachine",
                        description: "Advanced PET bottle washing systems"
                    },
                    {
                        subtitle: "Circular Looms",
                        image: require("../PlasticRecycling/Assets/recycling-1.jpg"),
                        link: "CircularLoom",
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
                        image: require("../PlasticRecycling/Assets/recycling0.jpg"),
                        link: "ExtrusionCoating",
                        description: "Industrial shredding machines"
                    },
                    {
                        subtitle: "Printing Machines",
                        image: require("../PlasticRecycling/Assets/recycling-4.jpg"),
                        link: "PrintingMachine",
                        description: "Industrial shredding machines"
                    },
                    {
                        subtitle: "Bag Conversion Machines",
                        image: require("../PlasticRecycling/Assets/recycling-5.jpg"),
                        link: "bottle-shredding",
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
                        image: require("../PlasticRecycling/Assets/recycling1.jpg"),
                        link: "WovenSack",
                        description: "Industrial grade woven sacks"
                    },
                    {
                        subtitle: "PET Washing Line",
                        image: require("../PlasticRecycling/Assets/recycling2.jpg"),
                        link: "PET",
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
                        image: require("../PlasticRecycling/Assets/recycling3.jpg"),
                        link: "BatteryBox",
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
                        image: require("../PlasticRecycling/Assets/recycling5.jpg"),
                        link: "Monofilament",
                        description: "Industrial grade woven sacks"
                    },
                    {
                        subtitle: "Box-Strapping Line",
                        image: require("../PlasticRecycling/Assets/recycling6.jpg"),
                        link: "BoxStrapping",
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
                        image: require("../PlasticRecycling/Assets/recycling7.jpg"),
                        link: "SheetExtrusion",
                        description: "Industrial grade woven sacks"
                    },
                    {
                        subtitle: "Cast Film Line",
                        image: require("../PlasticRecycling/Assets/recycling8.jpg"),
                        link: "CastLine",
                        description: "Advanced PET bottle washing systems"
                    }
                ]
            }
        ]
    }), []);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (allSections[initialCategory]) {
            const firstSectionId = allSections[initialCategory][0].id;
            const element = document.getElementById(firstSectionId);
            
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }, [initialCategory, allSections]);

    const ParallaxSection = ({ section, index }) => {
        const translateY = (scrollY * 0.1 * (index % 2 ? 1 : -1)) + 'px';
        const opacity = Math.min(1, 1 - (Math.abs(scrollY - (index * 500)) / 1000));
        
        return (
            <div 
                id={section.id}
                className="relative min-h-screen p-8 overflow-hidden"
            >
                <div 
                    className="max-w-6xl mx-auto"
                    style={{
                        transform: `translateY(${translateY})`,
                        opacity: opacity,
                        transition: 'transform 0.2s ease-out'
                    }}
                >
                    <h2 className="text-4xl font-bold mb-12 text-center">{section.title}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {section.sections.map((subsection, idx) => (
                            <div 
                                key={idx}
                                className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300"
                                style={{
                                    transform: `translateY(${scrollY * 0.05 * ((idx + 1) % 2 ? 1 : -1)}px)`
                                }}
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img 
                                        src={subsection.image} 
                                        alt={subsection.subtitle}
                                        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2">{subsection.subtitle}</h3>
                                    <p className="text-gray-600">{subsection.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            {Object.entries(allSections).map(([sectionCategory, sectionGroup]) => (
                sectionGroup.map((section, index) => (
                    <ParallaxSection 
                        key={`${sectionCategory}-${index}`}
                        section={section}
                        index={index}
                    />
                ))
            ))}
        </div>
    );
};

export default PlasticRecycling;