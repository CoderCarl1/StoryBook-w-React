import React from 'react';

const ResizableCircle = ({ height = 100, width = 100, radius = 50 }) => {
    return (
        <div
            style={{
                borderRadius: `${radius}%`,
                background: 'coral',
                border: `2px solid black`,
                textAlign: 'center',
                height: `${height}px`,
                width: `${width}px`,
                maxHeight: '100vh',
                maxWidth: '100vw'
            }}
        ></div>
    );
};

export default ResizableCircle;
