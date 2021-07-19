export default function ListGraph(props) {
    const data = props.data;
    const start = props.start;
    const max = Math.max(...data);

    const barClasses = `
        text-xs 
        text-center
        text-green-500
        font-semibold
        pt-1
        bg-green-500
        bg-opacity-20 
        rounded
        border-t-4
        border-green-500
        truncate
        mx-1
        md:mx-2
        lg:mx-3
    `;
    let barGroup = [];
    for (let i = 0; i < data.length; i++) {
        let height = data[i] / max * 100;
        let width = 100 / data.length;
        let bar = 
            <div key={i} className={barClasses} 
            style={{
                height: height + "%", 
                width: width + "%",
                opacity: (data[i] == 0 ? "0%" : "100%")
            }}>
                {data[i]}
            </div>
        barGroup.push(bar);
    }

    const legendClasses = `
        text-xs
        text-gray-400
        truncate
        text-center
    `;
    let legendGroup = [];
    for (let i = 0; i < data.length; i++) {
        let width = 100 / data.length;
        let legend = <div key={i} className={legendClasses} style={{width: width + "%"}}>{start + i}</div>;
        legendGroup.push(legend);
    }

    const graphClasses = `
        flex 
        flex-row 
        justify-around
        items-end
        h-32
    `;
    const axisClasses =  `
        pt-1
        flex
        flex-row
    `;

    return(
        <div>
            <div className={graphClasses}>
                {barGroup}
            </div>
            <div className={axisClasses}>
                {legendGroup}
            </div>
        </div>
    );
}