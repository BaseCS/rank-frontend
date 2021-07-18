import React, { useState, useEffect, useRef } from "react";
import Disclosure from "./disclosure";
import RangeFilter from "./rangeFilter";
import TagBank from "./tagBank";
import { tagList } from "./extras/tagList";
import CountryFilter from "./countryFilter";
import { countryList } from "./extras/countryList";
import { IoMdRefresh } from "react-icons/io";

export default function ControlPanel() {
    const rangeBounds = {start: 1970, stop: 2021};
    const [rangeSelected, setRange] = useState({start: 2000, stop: 2021});
    const [tagsSelected, setTags] = useState(new Array(tagList.length).fill(true));
    const [countriesSelected, setCountries] = useState(new Array(countryList.length).fill(true));

    function rangeUpdate(result) {
        console.log(result.start + " -> " + result.stop);
        setRange(result);
    }

    function tagsUpdate(result) {
        let count = 0;
        for (const value of result) {
            if (value) {count++}
        }
        console.log(count + " tags selected");
        setTags(result);
    }

    function countriesUpdate(result) {
        let count = 0;
        for (const value of result) {
            if (value) {count++}
        }
        console.log(count + " countries selected");
        setCountries(result);
    }

    const panelClasses = `
        pt-16
        md:pt-20
        md:space-y-4
        md:divide-y-0
        md:px-4
        md:pb-8
        divide-gray-300 
        divide-y
    `;
    const headerClasses = `
        panelHeader
        fixed
        h-16
        w-full
        z-50
        backdrop-filter
        backdrop-blur
        bg-white
        bg-opacity-70
        px-4
        md:pl-7
        flex
        items-center
        border-t
        border-b
        border-gray-200
        font-semibold
    `;
    const buttonClasses = `
        h-8
        px-3
        bg-green-500
        rounded
        text-white
        hover:shadow-md
        filter
        active:brightness-90
        font-semibold
        flex
        flex-row
        items-center
    `;
    return(
        <>
            <div id="controlSubmit" className={headerClasses}>
                <p className="flex-grow">
                    Filter options
                </p>
                <button id="submitButton" className={buttonClasses} title="apply selected filter options">
                    Apply
                    <div id="submitIcon" className="ml-2">
                        <IoMdRefresh className="h-6 w-6"/>
                    </div>
                </button>
            </div>
            <div id="controlPanel" className={panelClasses}>
                <Disclosure 
                title="Show institutions by location"
                subtitle="Filter world institutions by geography"
                show={true}>
                    <CountryFilter tags={countryList} selected={countriesSelected} onUpdate={countriesUpdate}/>
                </Disclosure>

                <Disclosure 
                title="Publication year range"
                subtitle="Only consider research publications within this time period (inclusive)"
                show={true}>
                    <RangeFilter bounds={rangeBounds} selected={rangeSelected} onUpdate={rangeUpdate}></RangeFilter>
                </Disclosure>

                <Disclosure 
                title="Include by categories"
                subtitle="Only consider publications that have been tagged with the following categories"
                show={true}>
                    <TagBank collapsible={false} show={true} title="Available tags" type="tag" tags={tagList} selected={tagsSelected} onUpdate={tagsUpdate}></TagBank>
                </Disclosure>

                <Disclosure 
                title="Include by conferences"
                subtitle="Only consider publications that were included in the following conferences"
                show={true}>
                    <p>Hello world</p>
                </Disclosure>
            </div>
            <style jsx>{`
                @-moz-document url-prefix() { 
                    .panelHeader {
                        background-color: white;
                    }
                }

                @media (min-width: 768px) {
                    #controlSubmit {
                        width: calc(380px - 0.75rem);
                    }
                }

                @media (min-width: 1024px) {
                    #controlSubmit {
                        width: calc(480px - 0.75rem);
                    }
                }

                #submitButton:hover #submitIcon {
                    animation: 1s infinite linear spin;
                }

                @keyframes spin {
                    from {
                        transform: rotate(0deg)
                    }
                    to {
                        transform: rotate(360deg)
                    }
                }
            `}</style>
        </>
    );
}