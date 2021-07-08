import React, { useState, useEffect, useRef } from "react";
import Draggable from "react-draggable";
import { HiArrowRight, HiChevronLeft } from "react-icons/hi";
import { BiDotsVerticalRounded } from "react-icons/bi";

export default function RangeFilter(props) {
    const range = props.bounds.stop - props.bounds.start;
    const track = useRef();
    const [selected, setSelected] = useState({start: props.selected.start, stop: props.selected.stop});
    const [leftPosition, setLeftPosition] = useState({x: 0, y: 0});
    const [rightPosition, setRightPosition] = useState({x: 0, y: 0});

    function measureTrack() {
        let length = track.current.offsetWidth;
        let step = length / (range + 1);
        return {length: length, step: step};
    }

    function yearToPx(side, year) {
        let offset = year - props.bounds.start;
        let x = 0;
        let position = {x: 0, y: 0};
        if (side == "left") {
            x = offset * measureTrack().step;
            position = {x: x, y: 0};
        } else {
            x = (offset + 1) * measureTrack().step;
            position = {x: x, y: 0};
        }
        return position;
    }

    function pxToYear(side, position) {
        let offset = Math.round(position.x / measureTrack().step);
        let year = props.bounds.start;
        if (side == "left") {
            year += offset;
        } else {
            offset = offset - 1 < 0 ? 0 : offset - 1;
            year += offset;
        }
        if (year < props.bounds.start) {
            year = props.bounds.start;
        } else if (year > props.bounds.stop) {
            year = props.bounds.stop;
        }
        return year;
    }
    
    function leftOnDrag(e, position) {
        e.preventDefault();
        let newSelected = {
            start: pxToYear("left", position), 
            stop: pxToYear("right", rightPosition)
        }
        if (position.x < measureTrack().length - measureTrack().step) {
            if (position.x > rightPosition.x - measureTrack().step) {
                newSelected.stop = pxToYear("left", position);
                setRightPosition({x: position.x + measureTrack().step, y: 0});
            }
            setSelected(newSelected);
            setLeftPosition({x: position.x, y: 0});
        }
    }

    function rightOnDrag(e, position) {
        e.preventDefault();
        let newSelected = {
            start: pxToYear("left", leftPosition), 
            stop: pxToYear("right", position)
        }
        if (position.x > measureTrack().step) {
            if (position.x < leftPosition.x + measureTrack().step) {
                newSelected.start = pxToYear("right", position);
                setLeftPosition({x: position.x - measureTrack().step, y: 0});
            }
            setSelected(newSelected);
            setRightPosition({x: position.x, y: 0});
        }
    }

    function onStop(e) {
        e.preventDefault();
        setLeftPosition(yearToPx("left", selected.start));
        setRightPosition(yearToPx("right", selected.stop));
        props.onUpdate(selected);
    }

    function nudge(side, direction) {
        let newSelected = {start: selected.start, stop: selected.stop};
        if (side == "left") {
            if (direction == "-") {
                newSelected.start -= 1;
            } else {
                newSelected.start += 1;
            }
            if (newSelected.start > newSelected.stop) {
                newSelected.stop = newSelected.start;
            }
        } else {
            if (direction == "-") {
                newSelected.stop -= 1;
            } else {
                newSelected.stop += 1;
            }
            if (newSelected.start > newSelected.stop) {
                newSelected.start = newSelected.stop;
            }
        }
        if (newSelected.start < props.bounds.start) {
            newSelected.start = props.bounds.start
        } else if (newSelected.start > props.bounds.stop) {
            newSelected.start = props.bounds.stop
        }
        if (newSelected.stop < props.bounds.start) {
            newSelected.stop = props.bounds.start
        } else if (newSelected.stop > props.bounds.stop) {
            newSelected.stop = props.bounds.stop
        }
        setSelected(newSelected);
        setLeftPosition(yearToPx("left", newSelected.start));
        setRightPosition(yearToPx("right", newSelected.stop));
        props.onUpdate(newSelected);
    }

    function reposition() {
        setLeftPosition(yearToPx("left", selected.start));
        setRightPosition(yearToPx("right", selected.stop));
    }

    useEffect(() => {
        // Executes on every window resize, updating when current selection has changed
        window.addEventListener("resize", reposition);
        return () => {
            window.removeEventListener("resize", reposition);
        }
    }, [selected]);

    useEffect(() => {
        // Executes once when slide component has successfully mounted
        reposition();
    }, []);

    let scaleUI = [];
    for(let i = 0; i < range + 2; i++) {
        let tickEnd = <div key={i} className="h-2 w-px bg-gray-400"></div>;
        let tick = <div key={i} className="h-full w-px bg-gray-300"></div>;
        if(i == 0 || i == range + 1) {
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
        text-gray-400
        mb-3
        h-6
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
    `;
    const handleClasses = `
        h-6 
        w-4 
        bg-green-500 
        hover:bg-green-400
        filter
        active:brightness-90
        shadow-md 
        cursor-pointer
        transform
        -translate-y-1
        rounded
        flex
        items-center
        justify-center
        text-green-300
    `;
    const trackFillClasses = `
        h-full 
        -mb-4 
        bg-green-400 
        opacity-50
        absolute
        shadow-md
    `;
    const scaleClasses = `
        flex 
        flex-row 
        justify-between 
        items-center 
        w-full 
        h-1
    `;
    const buttonClasses = `
        bg-gray-500
        text-white
        filter
        hover:bg-green-400
        hover:text-white
        active:brightness-90
        hover:shadow-md
        h-6 
        w-6 
        rounded 
        text-center
        shadow-md
    `;

    return(
        <div>
            <div className={displayClasses}>
                <div className="h-full space-x-2">
                    <button title="decrease left bound" className={buttonClasses} onClick={() => {nudge("left", "-")}}>
                        <HiChevronLeft className="w-6 h-6"/>
                    </button>
                    <button title="increase left bound" className={buttonClasses} onClick={() => {nudge("left", "+")}}>
                        <HiChevronLeft className="w-6 h-6 transform rotate-180"/>
                    </button>
                </div>
                <div className="flex-grow flex flex-row justify-center items-center h-6">
                    <p className={bracketsClasses}>[</p>
                    {selected.start == selected.stop ? 
                        <p className={readoutClasses}>
                            {selected.start}
                        </p>
                        :
                        <>
                            <p className={readoutClasses}>
                                {selected.start}
                            </p>
                            <HiArrowRight className="h-4"/>
                            <p className={readoutClasses}>
                                {selected.stop}
                            </p>
                        </>
                    }   
                    <p className={bracketsClasses}>]</p>
                </div>
                <div className="h-full space-x-2">
                    <button title="decrease right bound" className={buttonClasses} onClick={() => {nudge("right", "-")}}>
                        <HiChevronLeft className="w-6 h-6"/>
                    </button>
                    <button title="increase right bound" className={buttonClasses} onClick={() => {nudge("right", "+")}}>
                        <HiChevronLeft className="w-6 h-6 transform rotate-180"/>
                    </button>
                </div>
            </div>
            <div className={trackWrapperClasses}>
                <div ref={track} className={trackMainClasses}>
                    <div style={{marginLeft: leftPosition.x + "px", width: (rightPosition.x - leftPosition.x >= 0 ? rightPosition.x - leftPosition.x : 0) + "px"}} className={trackFillClasses}></div>
                    <Draggable position={leftPosition} axis="x" bounds=".track" onDrag={leftOnDrag} onStop={onStop}>
                        <div className="h-full w-0 -mb-4">
                            <div className={handleClasses + "-translate-x-4"} title="drag to set left bound">
                                <BiDotsVerticalRounded/>
                            </div>
                        </div>
                    </Draggable>
                    <Draggable position={rightPosition} axis="x" bounds=".track" onDrag={rightOnDrag} onStop={onStop}>
                        <div className="h-full w-0">
                            <div className={handleClasses} title="drag to set right bound">
                                <BiDotsVerticalRounded/>
                            </div>
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
                    {props.bounds.start}
                </p>
                <p className="flex-grow text-right">
                    {props.bounds.stop}
                </p>
            </div>
        </div>
    );
}