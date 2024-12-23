import { Wrapper } from "./Wrapper"
export function Content({emoji}){
    return <>
    <div className="content">
       <Wrapper emoji={emoji}/> 
    </div>
    </>
}