import { createContext, useContext, useState } from 'react';
import mapDefaults from './resources/mapDefaults';

export const AppContext = createContext({});

const AppProvider = ({ children }) => {
    const [mapData, setMapData] = useState(null);
    const [alert, setAlert] = useState(null);
    const [showAlert, setShowAlert] = useState(false);
    const [loading, setLoading] = useState(false);
    const [activeTile, setActiveTile] = useState(null);
    const [selectedTile, setSelectedTile] = useState(null);
    const [hoverTile, setHoverTile] = useState(null);
    const [selectedTrap, setSelectedTrap] = useState(null);
    const [selectedDecor, setSelectedDecor] = useState(null);
    const [selectedTerrain, setSelectedTerrain] = useState(null);

    const api = {
        alertAction: (action) => actionHandler(action),
    }

    const actionHandler = (action) => {
        if (action === 'cancel') {
            console.log("Cancel button was clicked");
            
        }else if (action === 'resetMap'){
            console.log("Load map defaults");
            setLoading(true);
            setMapData(null);
            // Loading screen is never shown unless we wait to let the app render
            setTimeout(() => {
                setMapData(mapDefaults);
                setLoading(false);
            }, 1000);
        }
        setAlert(null);
    }

    return (
        <AppContext.Provider value={{
            mapData,
            setMapData,
            alert,
            setAlert,
            showAlert,
            setShowAlert,
            loading,
            setLoading,
            activeTile,
            setActiveTile,
            selectedTile,
            setSelectedTile,
            hoverTile,
            setHoverTile,
            selectedTrap,
            setSelectedTrap,
            selectedDecor,
            setSelectedDecor,
            selectedTerrain,
            setSelectedTerrain,
            ...api
          }}>
        {children}
      </AppContext.Provider>
    );
};

export const useAppState = () => {
    const ctx = useContext(AppContext);

    if (!ctx) {
        throw new Error("useAppState must be used within the AppProvider");
    }

    return ctx;
};

export {AppProvider};