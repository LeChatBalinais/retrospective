import React from 'react';
import SeekBarCurrentTimeSlider from '../containers/SeekBarCurrentTimeSlider';



const SeekBar = (): JSX.Element => (

    <div className="box seek-bar-box">
        <div className="ribbon"></div>
        <div id="seek-bounds" className="slider-ribbon">
            <SeekBarCurrentTimeSlider />
        </div>
    </div>



);
export default SeekBar;
