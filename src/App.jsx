import "./globals.css";
import {Header} from "./components/Header";
import {InputBar} from "./components/InputBar";
import { ContentContainer } from "./components/ContentContainer";
import emojis from "../node_modules/emojibase-data/en/compact.json";
export default function App(){
    let emoji = emojis
    return <div className="container">
        <Header />
        <InputBar />
        <ContentContainer emoji={emoji}/>
</div>
}
































// not_verified | verified | account disabled
    // // const USER_STATUS = "";
    // // if(USER_STATUS === "NOT_VERIFIED"){
    // //     return <div>
    // //         <span>You are not verified. Please verify your email or mobile number</span>
    // //     </div>
    // // } else if(USER_STATUS === "VERIFIED"){
    // //     return <div>
    // //     <span>You are verified. Click here to accesss your dashboard</span>
    // // </div>
    // // }else if(USER_STATUS === "ACCOUNT_DISABLED"){
    // //     return <div>
    // //     <span>Your account is disabled</span>
    // // </div>
    // // }else{
    // //     return <div>
    // //         <span>Please contact the system admin</span>
    // //     </div>
    // // }
    // const isAuthenticated = true;
    // return isAuthenticated ? <div>Welcome back User</div> : <div>You are not logged in</div>


// import { UserDetails } from "./components/UserDetails"
// export default function App(){
//     const students = [
//         {
//             name:"Ahmad Ibrahim",age:18,id:2002
//         },
//         {
//             name:"Abdulsalam Minkail",age:19,id:2502
//         },
//         {
//             name:"Mustapha Abdullahi",age:20,id:2212
//         },
//         {
//             name:"Idris Alyasa",age:17,
//         },
//     ]
//     return(
//         <div>{students.map((stn)=>{
//             return < UserDetails key={stn.id} user={stn}/>
//         })}</div>
//     )
// }
