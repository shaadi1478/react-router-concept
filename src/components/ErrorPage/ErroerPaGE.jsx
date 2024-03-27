import { useRouteError } from "react-router-dom";

const ErroerPaGE = () => {

    const error = useRouteError();
    console.log(error)
    return (
        <div>
            <h1>This page also Error pages</h1>
            <p>{error.statusText || error.message}</p>
        </div>
    );
};

export default ErroerPaGE;