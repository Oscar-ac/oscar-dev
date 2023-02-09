import classes from '@/styles/hex.module.css';

const Hex = () => {

    const mouseEnterHandler = (event:any) => {
        console.log(event.target);
    }

    return(
        <div className={classes.hex} onMouseEnter={mouseEnterHandler}>

        </div>
    );
}

export default Hex;