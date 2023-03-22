import React, {useRef, useEffect} from "react";

export default function Canvas(props:any){

    const canvasRef = useRef()
    let points:any = [];
    let mousePos = {x: 0, y: 0}
    let frameCount:number = 0

    const updatePos = (event:any) => {
        mousePos.x = event.pageX
        mousePos.y = event.pageY
    }

    

    const getRandomColor = () => {
        const randomColor = Math.floor(Math.random()*16777215).toString(16)
        // console.log(randomColor)
        return randomColor
    }

    function getRandomInt(num:number) {
        let ranNum = (Math.random() * num) * (Math.round(Math.random()) ? 1 : -1)
        return ranNum
    }
    
    const x = setInterval(() => {
        let pointData = {x: mousePos.x, y: mousePos.y, directionX: getRandomInt(1), directionY: getRandomInt(1)}
        points.push(pointData);
        // console.log(points)
        if (points.length > 25) {
            console.log("points limit reached");
            console.log(points)
            // clearInterval(x)
            frameCount = 0
            points = []
        }
    }, 1000);

    
    const draw = (ctx:any, frameCount:number) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        // ctx.fillStyle = `#${getRandomColor()}`
        ctx.fillStyle = '#fff'
        ctx.strokeStyle = '#fff'
        ctx.lineWidth = 5;
        ctx.beginPath()
        points.map( (point:any, index:number) => {
            let updatedX = point.x+(frameCount*point.directionX*0.05)
            let updatedY = point.y+(frameCount*point.directionY*0.05)
            ctx.arc(updatedX, updatedY, 1, 0, 2*Math.PI)
            ctx.moveTo(updatedX, updatedY)
            ctx.lineTo(updatedX, updatedY)
            // ctx.arc(point.x, point.y, 1, 0, 2*Math.PI)
            // ctx.moveTo(point.x, point.y)
            // ctx.lineTo(point.x, point.y)
        });
        ctx.stroke()
    }

    // const {draw, ...rest} = props.draw

    useEffect(() => {
        if (canvasRef.current){
            const canvas:any = canvasRef.current
            const context = canvas.getContext('2d')
            context.canvas.height = window.innerHeight
            context.canvas.width = window.innerWidth
            window.addEventListener("mousemove", updatePos, false);
        

            let animationFrameId:any

            const render = () => {
                frameCount++
                draw(context, frameCount)
                animationFrameId = window.requestAnimationFrame(render)
            }
            render()

            return () => {
                window.cancelAnimationFrame(animationFrameId)
            }
            // context.fillStyle = '#00ff00'
            // context.fillRect(0, 0, context.canvas.width, context.canvas.height)
        }
    }, [draw])



    return(
        <canvas className={`${props.className}`} ref={canvasRef} {...props}>

        </canvas>
    );
}