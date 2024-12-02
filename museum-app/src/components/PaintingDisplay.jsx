import style from './PaintingDisplay.module.css'

function PaintingDisplay() {
    return (<>
        <div className={style.imageContainer}>
            <img src="https://lh3.googleusercontent.com/wsOiP3dkzCLPxvJrI22iBU6o0pTx924PhmColiZIS0U-9gxyuAEe0R_zXqBomPXyP5aQerx3BKhyiKxVMf1Z0Y8NjsU=s0"></img>
            <p>Baby crying</p>
            <p>Francisco de Goya</p>
        </div>
    </>)
}

export default PaintingDisplay;