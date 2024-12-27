import { useState } from "react";
import "./globals.css";
import { Header } from "./components/Header";
import { InputBar } from "./components/InputBar";
import { ContentContainer } from "./components/ContentContainer";
import emojis from "../node_modules/emojibase-data/en/compact.json";
let emoji = emojis.slice(26);
export default function App() {

    function copyToClipboard(input){
        navigator.clipboard.writeText(input).then(()=>{
            alert("copied successfully")
        }).catch((err)=>{
            alert("failed to copy",err)
        })
    }
    let [searchText, setSearchText] = useState("");
    let [wrapperContent,setWrapperContent] = useState(emoji.map((current,index)=>{
            return <div key={index}  className="emojis" onClick={()=>copyToClipboard(current.unicode)}>{current.unicode}</div>
        }))
    
        let filtered = emoji.filter((emoji)=>{
            return emoji.tags.some((element)=>element.includes(searchText)) || emoji.label.includes(searchText)
          }).map((element)=>element.unicode).map((element,index)=>{
            return <div className="emojis" key={index} onClick={()=>copyToClipboard(element)}>{element}</div>
          })


    function handleSearch(event) {
        setSearchText(event.target.value);
        setSearchText(event.target.value.toLowerCase());
        setWrapperContent(filtered)
    }
    return <div className="container">
        <Header />
        <InputBar handleSearch={handleSearch} searchText={searchText} setWrapperContent={setWrapperContent} />
        <ContentContainer emoji={emoji} handleSearch={handleSearch} searchText={searchText}
        wrapperContent={wrapperContent} setWrapperContent={setWrapperContent} copyToClipboard={copyToClipboard}/>
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
