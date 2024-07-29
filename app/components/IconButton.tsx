'use client';

import { IconType } from "react-icons";
import useSettings from "../hooks/useSettings";

interface IconButtonProps {
    icon: IconType;
    onClick: () => void;
}

export const IconButton = ({ icon: Icon, onClick }: IconButtonProps) => {
    const darkMode = useSettings((state) => state.darkMode);

    return ( 
        <button onClick={onClick}>
            {Icon && (
                <Icon
                    size={34}
                    color={darkMode ? 'white' : 'black'}
                    className="relatvie"
                />
            )}
        </button>
    );
}