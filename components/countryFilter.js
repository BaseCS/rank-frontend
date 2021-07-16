import React, { useState, useEffect, useRef } from "react";
import TagBank from "./tagBank";

export default function CountryFilter(props) {
    const callback = props.onUpdate;
    const allCountries = props.tags;
    const countries_AF = [];
    let selected_AF = [];
    const countries_AN = [];
    let selected_AN = [];
    const countries_AS = [];
    let selected_AS = [];
    const countries_EU = [];
    let selected_EU = [];
    const countries_NA = [];
    let selected_NA = [];
    const countries_OC = [];
    let selected_OC = [];
    const countries_SA = [];
    let selected_SA = [];

    for (let i = 0; i < allCountries.length; i++) {
        if (allCountries[i].continent == "AF") {
            countries_AF.push(allCountries[i]);
            selected_AF.push(props.selected[i]);
        } else if (allCountries[i].continent == "AN") {
            countries_AN.push(allCountries[i]);
            selected_AN.push(props.selected[i]);
        } else if (allCountries[i].continent == "AS") {
            countries_AS.push(allCountries[i]);
            selected_AS.push(props.selected[i]);
        } else if (allCountries[i].continent == "EU") {
            countries_EU.push(allCountries[i]);
            selected_EU.push(props.selected[i]);
        } else if (allCountries[i].continent == "NA") {
            countries_NA.push(allCountries[i]);
            selected_NA.push(props.selected[i]);
        } else if (allCountries[i].continent == "OC") {
            countries_OC.push(allCountries[i]);
            selected_OC.push(props.selected[i]);
        } else if (allCountries[i].continent == "SA") {
            countries_SA.push(allCountries[i]);
            selected_SA.push(props.selected[i]);
        }
    }

    function update_AF(result) {
        selected_AF = result;
        updateAll();
    }

    function update_AN(result) {
        selected_AN = result;
        updateAll();
    }

    function update_AS(result) {
        selected_AS = result;
        updateAll();
    }

    function update_EU(result) {
        selected_EU = result;
        updateAll();
    }

    function update_NA(result) {
        selected_NA = result;
        updateAll();
    }

    function update_OC(result) {
        selected_OC = result;
        updateAll();
    }

    function update_SA(result) {
        selected_SA = result;
        updateAll();
    }

    function updateAll() {
        let all = selected_AF.concat(selected_AN, selected_AS, selected_EU, selected_NA, selected_OC, selected_SA);
        props.onUpdate(all);
    }

    return(
        <div className="space-y-3 divide-y divide-gray-300">
            <div className="pt-0">
                <TagBank 
                collapsible={true} 
                show={false} 
                title="North America" 
                type="country" 
                tags={countries_NA} 
                selected={selected_NA} 
                onUpdate={update_NA}/>
            </div>
            <div className="pt-3">
                <TagBank 
                collapsible={true} 
                show={false} 
                title="South America" 
                type="country" 
                tags={countries_SA} 
                selected={selected_SA} 
                onUpdate={update_SA}/>
            </div>
            <div className="pt-3">
                <TagBank 
                collapsible={true} 
                show={false} 
                title="Europe" 
                type="country" 
                tags={countries_EU} 
                selected={selected_EU} 
                onUpdate={update_EU}/>
            </div>
            <div className="pt-3">
                <TagBank 
                collapsible={true} 
                show={false} 
                title="Africa" 
                type="country" 
                tags={countries_AF} 
                selected={selected_AF} 
                onUpdate={update_AF}/>
            </div>
            <div className="pt-3">
                <TagBank 
                collapsible={true} 
                show={false} 
                title="Asia" 
                type="country" 
                tags={countries_AS} 
                selected={selected_AS} 
                onUpdate={update_AS}/>
            </div>
            <div className="pt-3">
                <TagBank 
                collapsible={true} 
                show={false} 
                title="Oceania" 
                type="country" 
                tags={countries_OC} 
                selected={selected_OC} 
                onUpdate={update_OC}/>
            </div>
            <div className="pt-3">
                <TagBank 
                collapsible={true} 
                show={false} 
                title="Antarctic" 
                type="country" 
                tags={countries_AN} 
                selected={selected_AN} 
                onUpdate={update_AN}/>
            </div>
        </div>
    );
}