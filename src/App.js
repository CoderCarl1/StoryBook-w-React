import React, { useState } from 'react';
import ResizableCircle from './components/ResizableCircle';
import CircleForm from './components/CircleForm';
const AppStyles = {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
};
const App = () => {
    const [circle, setCircle] = useState({
        height: 100,
        width: 100,
        radius: 50
    });

    const handleCircle = (event) => {
        setCircle({ ...circle, [event.target.name]: event.target.value });
    };

    return (
        <div className="App" style={AppStyles}>
            <ResizableCircle height={circle.height} width={circle.width} radius={circle.radius} />
            <div>
                <CircleForm height={circle.height} width={circle.width} radius={circle.radius} handleChangeFunc={handleCircle} />
            </div>
        </div>
    );
};

export default App;
