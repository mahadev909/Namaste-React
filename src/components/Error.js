import {useRouteError} from 'react-router-dom';
const Error = () =>{
    const err = useRouteError();
    console.log(err);
    return(
        <div>
            <h2>Error page</h2>
            <h5>{err.status+" "+ err.statusText}</h5>
        </div>
    )
}
export default Error;