import React, { useState, useEffect, useRef } from "react";
import TagBank from "./tagBank";

export default function TagFilter(props) {
    // const tagList = props.tags;
    // const selectedTags = props.selected;
    // const callback = props.onUpdate;

    return(
        <div>
            <TagBank title="Hover to see full category" type="tag" tags={props.tags} selected={props.selected} onUpdate={props.onUpdate}></TagBank>
        </div>
    );
}