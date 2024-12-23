import {UpperMessage} from "./UpperMessage";
import {Content} from "./Content";
import { Footer } from "./Footer";
export function ContentContainer({emoji}){
    return <>
    <div className="content-container">
        <UpperMessage />
        <Content emoji={emoji}/>
        <Footer />
    </div>
    </>
}

