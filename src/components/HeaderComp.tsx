import './comCSS.css'
import raccoon from './raccoon.jpg' 


export interface Header
{
    name: string;
    content: string;
}

export function HeaderFunc(props: Header)
{
    return(
        <>
        
        <div className='clearfix'>

            <div className='float-start'>
            <h1 >{props.name}</h1>
            <p> {props.content} </p>

            </div>
        
        <img className='float-end portrait' src={raccoon} alt="" />


        </div>
       
        
       
        </>
    )
}