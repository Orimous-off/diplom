import React, { useState } from 'react';

const CustomSelect = ({selectedIcon, label, options, onSelect }) => {
    const firstOption = options[0];
    const [selectedOption, setSelectedOption] = useState(firstOption);
    const [showOptions, setShowOptions] = useState(false);

    const handleSelect = (option) => {
        setSelectedOption(option);
        setShowOptions(false);
        onSelect(option.value);
    };

    const iconAnimate = (showOptions) => {
        if (!showOptions) {
            return (
                <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 17L15 12L10 7V17Z" fill="#3F4946"/>
                </svg>
            )
        } else {
            return (
                <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 10L12 15L17 10H7Z" fill="#3F4946"/>
                </svg>
            )
        }
    }

    return (
        <div className="custom-select">
            <div className="select-box">
                <img src={selectedIcon} alt={label}/>
                <div className="column">
                    <span>{label}</span>
                    {selectedOption ? selectedOption.label : null}
                </div>
                <div className="options-toggle" onClick={() => setShowOptions(!showOptions)}>
                    {iconAnimate(showOptions)}
                </div>
            </div>
            {showOptions && (
                <div className="options">
                    {options.map((option) => (
                        <div key={option.value} className="option" onClick={() => handleSelect(option)}>
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CustomSelect;
