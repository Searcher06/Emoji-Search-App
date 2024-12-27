import {UpperMessage} from "./UpperMessage";
import {Content} from "./Content";
import { Footer } from "./Footer";
export function ContentContainer({emoji,searchText,wrapperContent,setWrapperContent,copyToClipboard}){
    return <>
    <div className="content-container">
        <UpperMessage />
        <Content emoji={emoji} searchText={searchText} wrapperContent={wrapperContent} 
        setWrapperContent={setWrapperContent}/>
        <Footer emoji={emoji} setWrapperContent={setWrapperContent} copyToClipboard={copyToClipboard}/>
    </div>
    </>
}

