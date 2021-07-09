import React, { useState, useEffect, useRef } from "react";
import Disclosure from "./disclosure";
import RangeFilter from "./rangeFilter";
import TagBank from "./tagBank";
import { tagList } from "./extras/tagList";
import CountryFilter from "./countryFilter";
import { countryList } from "./extras/countryList";

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
        h-full
        overflow-scroll
        md:space-y-4
        md:divide-y-0
        md:p-4
        divide-gray-200 
        divide-y-2
    `

    return(
        <>
            <div id="control-panel" className={panelClasses}>
                <Disclosure 
                title="Show institutions by location"
                subtitle="Filter world institutions by geography."
                show={true}>
                    <CountryFilter tags={countryList} selected={countriesSelected} onUpdate={countriesUpdate}/>
                </Disclosure>

                <Disclosure 
                title="Publication year range"
                subtitle="Only consider research publications within this time period (inclusive)."
                show={true}>
                    <RangeFilter bounds={rangeBounds} selected={rangeSelected} onUpdate={rangeUpdate}></RangeFilter>
                </Disclosure>

                <Disclosure 
                title="Include by categories"
                subtitle="Only consider publications that have been tagged with the following categories."
                show={true}>
                    <TagBank collapsible={false} show={true} title="Hover to see full category" type="tag" tags={tagList} selected={tagsSelected} onUpdate={tagsUpdate}></TagBank>
                </Disclosure>

                <Disclosure 
                title="Include by conferences"
                subtitle="Only consider publications that were included in the following conferences."
                show={true}>
                    <p>Hello world</p>
                </Disclosure>
            </div>
            <style jsx>{`
                @media only screen and (min-width: 768px) {
                    #control-panel {
                        // height: calc(100% - 1rem);
                    }
                }
            `}</style>
        </>
    );
}