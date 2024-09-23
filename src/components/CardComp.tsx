import 'bootstrap/dist/css/bootstrap.min.css';

export interface CardInterface{

    cardTitle: string;
    cardContent: string;
    cardFooter: string;


}


export function Card(props:CardInterface)
{
    return(

        <>
        <div className="card mt-5">

            <div className='card-body'>
            <header className='card-title text-nowrap' >
                <h2>{props.cardTitle}</h2>
            </header>

            <div className='card-text'>
                <p> {props.cardContent} </p>
            </div>

            <div className='card-footer'>
                <p> {props.cardFooter} </p>
            </div>
            </div>
            


        </div>
        
        </>

    )
}