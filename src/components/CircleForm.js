import React from 'react';

const CircleForm = ({ handleChangeFunc, height, width, radius }) => {
    return (
        <form onChange={(e) => handleChangeFunc(e)}>
            <fieldset>
                <legend>Change the Circle Size</legend>
                <label htmlFor="height">
                    Height:
                    <input type="number" name="height" id="height" value={height} />
                </label>
                <label htmlFor="width">
                    Width:
                    <input type="number" name="width" id="width" value={width} />
                </label>
                <label htmlFor="radius">
                    Radius:
                    <input type="number" name="radius" id="radius" value={radius} />
                </label>
            </fieldset>
        </form>
    );
};

CircleForm.defaultProps = {
    handleChangeFunc: (e) => {
        console.log(e);
    },
    height: 50,
    width: 50,
    radius: 50
};
export default CircleForm;
