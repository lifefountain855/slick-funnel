import {Link} from 'react-router-dom'
import { Button } from "../components/ui/button"

export default function NotFound(){
    return(
        <div className="mx-auto my-auto p-5 px-5 md:px-15 md:py-30 lg:px-50 lg:pb-50">
            <div className='bg-secondary rounded-4xl px-10 md:p-20 py-30 flex flex-col items-center justify-center gap-5'>
                <span className='text-6xl text-accent font-bold'>404</span>
                <span className='text-navy-500 text-center text-lg font-bold'>We couldn't find the page you're looking for...</span>
                <Link to='/'><Button variant='default'>Go Home</Button></Link>
            </div>
        </div>
    )
}