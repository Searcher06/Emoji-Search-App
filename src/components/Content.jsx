import { Wrapper } from "./Wrapper";
export function Content({emoji,searchText,wrapperContent,setWrapperContent}){
    

   return <>
    <div className="content">
       <Wrapper emoji={emoji} searchText={searchText} 
       wrapperContent={wrapperContent} setWrapperContent={setWrapperContent}/> 
    </div>
    </>
}