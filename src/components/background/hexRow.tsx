import Hex from "./hex";
import classes from '@/styles/hexRow.module.css';

const HexRow = (props:any) => {

    return(
        <div className={classes["hex-row"]}>
            {Array(Math.ceil(props.hexX)).fill(<Hex></Hex>)}
        </div>
    );
}

export default HexRow;