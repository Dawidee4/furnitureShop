import {Link} from'react-router-dom'

export default function Breadcrumbs(props){
    return(
        <div className='breadcrumbs'>
                <div className="wrapper">
                <Link to='/'>
                    <div className="breadcrumbs-link">
                        Home
                    </div>
                </Link>
                    / {props.page}
                 </div>
            </div>
    )
}