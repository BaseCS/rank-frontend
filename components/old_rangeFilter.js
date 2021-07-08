import React, { useState, useEffect, useRef } from "react";
import Draggable from "react-draggable";
import { HiMenu, HiArrowRight } from "react-icons/hi";

export default function RangeFilter(props) {
    const callback = props.onUpdate;
    const track = useRef();
    const bounds = {
        start: props.bounds.start, 
        stop: props.bounds.stop, 
        range: props.bounds.stop - props.bounds.start
    };
    const [selected] = useState(props.selected);
    const [trackLength, setLength] = useState(0);
    const [left_limit, setLeft_limit] = useState(0);
    const [left_drag, setLeft_drag] = useState({x: 0, y: 0});
    const [left_calculated, setLeft_calculated] = useState({
        full: 0,
        corrected: 0,
        increment: 0,
        year: 0
    });
    const [right_limit, setRight_limit] = useState(0);
    const [right_drag, setRight_drag] = useState({x: 0, y: 0});
    const [right_calculated, setRight_calculated] = useState({
        full: 0,
        corrected: 0,
        increment: 0,
        year: 0
    });

    function onUpdate() {
        let result = {
            start: left_calculated.year, 
            stop: right_calculated.year
        };
        callback(result);
    }

    function setLeft(x, length, init) {
        let full = x / length;
        let corrected = x / (length - (length / (bounds.range + 1)));
        let increment = Math.round(corrected * bounds.range);
        let year = bounds.start + increment;
        let minGap = length / (bounds.range + 1);
        if(x < left_limit || init) {
            setLeft_drag({x: x, y: 0});
            setLeft_calculated({
                full: full,
                corrected: corrected,
                increment: increment < 0 ? 0 : increment > bounds.range ? bounds.range : increment,
                year: year < bounds.start ? bounds.start : year > bounds.stop ? bounds.stop : year
            });
            if(x > right_drag.x - minGap) {
                let offset = x + minGap;
                setRight(offset, length);
            }
        }
    }

    function snapLeft() {
        let snapped = (left_calculated.increment / (bounds.range + 1)) * trackLength;
        setLeft(snapped, trackLength);
    }

    function left_onDrag(e, position) {
        e.preventDefault();
        setLeft(position.x, trackLength);
    }

    function left_onStop(e, position) {
        e.preventDefault();
        snapLeft();
        snapRight();
        onUpdate();
    }

    function setRight(x, length, init) {
        let relativeFull = x / length;
        let relativeCorrected = ((x - (length / (bounds.range + 1))) / (length - (length / (bounds.range + 1))));
        let increment = Math.round(relativeCorrected * bounds.range);
        let year = bounds.start + increment;
        let minGap = length / (bounds.range + 1);
        if(x > right_limit || init) {
            setRight_drag({x: x, y: 0});
            setRight_calculated({
                full: relativeFull,
                corrected: relativeCorrected,
                increment: increment < 0 ? 0 : increment > bounds.range ? bounds.range : increment,
                year: year < bounds.start ? bounds.start : year > bounds.stop ? bounds.stop : year
            });
            if(x < left_drag.x + minGap) {
                let offset = x - minGap;
                setLeft(offset, length);
            }   
        }
    }

    function snapRight() {
        let snapped = ((right_calculated.increment + 1) / (bounds.range + 1)) * trackLength;
        setRight(snapped, trackLength);
    }

    function right_onDrag(e, position) {
        e.preventDefault();
        setRight(position.x, trackLength);
    }

    function right_onStop(e, position) {
        e.preventDefault();
        snapRight();
        snapLeft();
        onUpdate();
    }

    function handleResize() {
        let length = track.current.offsetWidth;
        let left_x = left_calculated.full * length;
        let left_limit = length - length / (bounds.range + 1);
        let right_x = right_calculated.full * length;
        let right_limit = length / (bounds.range + 1);
        setLength(length);
        setLeft_limit(left_limit);
        setLeft_drag({x: left_x, y: 0});
        setRight_limit(right_limit);
        setRight_drag({x: right_x, y: 0});
    }

    function init() {
        let length = track.current.offsetWidth;
        let left_x = ((selected.start - bounds.start) / (bounds.range + 1)) * length;
        let left_limit = length - length / (bounds.range + 1);
        let right_x = (((selected.stop + 1) - bounds.start) / (bounds.range + 1)) * length;
        let right_limit = length / (bounds.range + 1);
        setLength(length);
        setLeft_limit(left_limit);
        setLeft(left_x, length, true);
        setRight_limit(right_limit);
        setRight(right_x, length, true);
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, [trackLength]);

    useEffect(() => {
        init();
    }, [])

    let scaleUI = [];
    for(let i = 0; i < bounds.range + 2; i++) {
        let tickEnd = <div key={i} className="h-2 w-px bg-gray-400"></div>;
        let tick = <div key={i} className="h-full w-px bg-gray-300"></div>;
        if(i == 0 || i == bounds.range + 1) {
            scaleUI.push(tickEnd);
        } else {
            scaleUI.push(tick);
        }
    }
    
    const displayClasses = `
        flex 
        flex-row 
        w-full 
        justify-center 
        items-center 
        mb-2
        text-gray-400
    `;
    const bracketsClasses = `
        text-xl  
        font-medium
    `;
    const readoutClasses = `
        text-2xl 
        text-green-500 
        font-medium 
        mx-2
    `;
    const trackWrapperClasses = `
        px-4 
        bg-gray-100 
        rounded
    `;
    const trackMainClasses = `
        track 
        relative 
        w-full 
        h-4 
        bg-gray-200 
        mb-1 
        mt-4
    `;
    const trackFillClasses = `
        h-full 
        -mb-4 
        bg-green-400 
        opacity-50
    `;
    const handleWrapperClasses = `
        handle 
        h-full 
        w-0
        cursor-pointer
        filter
        active:brightness-90
    `;
    const handleNeedleClasses = `
        shadow-md
        h-6 
        w-1 
        bg-green-500 
        -translate-x-0.5 
        -translate-y-5 
        rounded
    `;
    const handleKnobClasses = `
        shadow-md
        h-4 
        w-4 
        bg-green-500 
        rounded-tr 
        rounded-br 
        flex 
        justify-center 
        items-center
    `;
    const scaleClasses = `
        flex 
        flex-row 
        justify-between 
        items-center 
        w-full 
        h-1
    `;

    return(
        <div>
            <div className={displayClasses}>
                <p className={bracketsClasses}>[</p>
                {left_calculated.year == right_calculated.year ? 
                    <p className={readoutClasses}>
                        {left_calculated.year}
                    </p>
                    :
                    <>
                        <p className={readoutClasses}>
                            {left_calculated.year}
                        </p>
                        <HiArrowRight className="h-4"/>
                        <p className={readoutClasses}>
                            {right_calculated.year}
                        </p>
                    </>
                }   
                <p className={bracketsClasses}>]</p>
            </div>
            <div className={trackWrapperClasses}>
                <div ref={track} className={trackMainClasses}>
                    <div style={{marginLeft: left_drag.x + "px", width: (right_drag.x - left_drag.x) + "px"}} className={trackFillClasses}></div>
                    <Draggable position={left_drag} axis="x" bounds=".track" onDrag={left_onDrag} onStop={left_onStop}>
                        <div className={handleWrapperClasses}>
                            <div className={handleKnobClasses + "rotate-180 -translate-x-4"}>
                                <HiMenu className="h-3 w-3 text-green-400 rotate-90"/>
                            </div>
                            <div className={handleNeedleClasses}/>
                        </div>
                    </Draggable>
                    <Draggable position={right_drag} axis="x" bounds=".track" onDrag={right_onDrag} onStop={right_onStop}>
                        <div className={handleWrapperClasses + "-mt-4"}>
                            <div className={handleKnobClasses}>
                                <HiMenu className="h-3 w-3 text-green-400 rotate-90"/>
                            </div>
                            <div className={handleNeedleClasses}/>
                        </div>
                    </Draggable>
                </div>
            </div>
            <div className="px-4">
                <div className={scaleClasses}>
                    {scaleUI}
                </div>
            </div>
            <div className="flex flex-row text-sm text-gray-400">
                <p className="flex-grow text-left">
                    {bounds.start}
                </p>
                <p className="flex-grow text-right">
                    {bounds.stop}
                </p>
            </div>
        </div>
    );
}