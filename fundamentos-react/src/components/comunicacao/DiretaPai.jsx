import React from "react";
import DiretaFilho from "./DiretaFilho";

export default props => {
    return (
        <div>
            <DiretaFilho
                texto="Junior"
                numero={20}
                bool={true} />
            <DiretaFilho
                texto="Gabriel"
                numero={17}
                bool={false} />
        </div>
    )
}