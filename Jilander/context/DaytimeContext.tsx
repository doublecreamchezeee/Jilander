import React, { createContext, FC, useState, useEffect } from 'react';
import { create } from 'react-test-renderer';

// Define the type for the context value
type DaytimeContextType = {
    type: string; // Assuming type is a string representing the image filename
};
const time = new Date();
var typeG = ''
if (time.getHours() >= 6 && time.getHours() < 15) {
    typeG = 'dawn-bg-homescreen.jpg'
} else if (time.getHours() >= 15 && time.getHours() < 18) {
    typeG = 'sunset-bg-homescreen.jpg'
} else {
    typeG = 'night-bg-homescreen.jpg'

}
// Create the context
export const DaytimeContext = createContext<DaytimeContextType>({
    type: typeG, // Default value
});

// Define the props interface for the provider
interface DaytimeProviderProps {
    children: React.ReactNode;
}


// Define the DaytimeProvider component
export const DaytimeProvider: FC<DaytimeProviderProps> = ({ children }) => {
    // Provide the default value for the context
    const [type, setType] = useState<string>(typeG);

    useEffect(() => {
        const updateTime = () => {
            const time = new Date();
            if (time.getHours() >= 6 && time.getHours() < 15) {
                setType('dawn-bg-homescreen.jpg');
            } else if (time.getHours() >= 15 && time.getHours() < 18) {
                setType('sunset-bg-homescreen.jpg');
            } else {
                setType('night-bg-homescreen.jpg');
            }
        };

        // Update the context every second
        const intervalId = setInterval(updateTime, 60000 * 60);

        // Clear the interval on component unmount
        return () => clearInterval(intervalId);
    }, []); // Add an empty dependency array to run this effect only once during component initialization

    const contextValue: DaytimeContextType = {
        type: type,
    };

    return (
        <DaytimeContext.Provider value={contextValue}>
            {children}
        </DaytimeContext.Provider>
    );
};
