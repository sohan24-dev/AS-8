"use client"



const SortItem = ({ cowData }) => {
    const SortHandle = (price) => {
        let sortedData = [...cowData]
        if (price === "low") {
            sortedData.sort((a, b) => a.price - b.price)
        }
        else if (price === "high") {
            sortedData.sort((a, b) => b.price - a.price);
        }
        // console.log(price);
    }
    return (
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn m-1">Click  ⬇️</div>
            <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                <li><button onClick={() => SortHandle("low")}>Price: Low → High</button></li>
                <li><button onClick={() => SortHandle("high")}>Price: High → Low</button></li>
            </ul>
        </div>
    );
};

export default SortItem;