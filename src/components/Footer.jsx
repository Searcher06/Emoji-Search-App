export function Footer({emoji,setWrapperContent,copyToClipboard}){
    


    let faces = emoji.filter((currentEmoji)=>{
        return currentEmoji.tags.some((element)=>element.includes("face"))
    }).map((element)=>element.unicode).map((element,index)=><div key={index} className="emojis" onClick={()=>{copyToClipboard(element)}}>{element}</div>)

    let foods = emoji.filter((currentEmoji)=>{
        return currentEmoji.tags.some((element)=>element.includes("food"))
    }).map((element)=>element.unicode).map((element,index)=><div key={index} className="emojis" onClick={()=>{copyToClipboard(element)}}>{element}</div>)

    let vehicle = emoji.filter((currentEmoji)=>{
        return currentEmoji.tags.some((element)=>element.includes("vehicle"))
    }).map((element)=>element.unicode).map((element,index)=><div key={index} className="emojis" onClick={()=>{copyToClipboard(element)}}>{element}</div>)

    let person = emoji.filter((currentEmoji)=>{
        return currentEmoji.tags.some((element)=>element.includes("person"))
    }).map((element)=>element.unicode).map((element,index)=><div key={index} className="emojis" onClick={()=>{copyToClipboard(element)}}>{element}</div>)

    let heart = emoji.filter((currentEmoji)=>{
        return currentEmoji.tags.some((element)=>element.includes("heart"))
    }).map((element)=>element.unicode).map((element,index)=><div key={index} className="emojis" onClick={()=>{copyToClipboard(element)}}>{element}</div>)

    let religion = emoji.filter((currentEmoji)=>{
        return currentEmoji.tags.some((element)=>element.includes("religion"))
    }).map((element)=>element.unicode).map((element,index)=><div key={index} className="emojis" onClick={()=>{copyToClipboard(element)}}>{element}</div>)

    return <>
    <div className="footer">
        <div  tabIndex={0} className="categories" onClick={()=>{setWrapperContent(faces)}}>😀</div>
        <div  tabIndex={0} className="categories" onClick={()=>{setWrapperContent(foods)}} >🍕</div>
        <div  tabIndex={0} className="categories" onClick={()=>{setWrapperContent(vehicle)}}>🚗</div>
        <div  tabIndex={0} className="categories" onClick={()=>{setWrapperContent(person)}}>👩</div>
        <div  tabIndex={0} className="categories" onClick={()=>{setWrapperContent(religion)}}>☪️</div>
        <div  tabIndex={0} className="categories" onClick={()=>{setWrapperContent(heart)}}>❤</div>
    </div>
    </>
}