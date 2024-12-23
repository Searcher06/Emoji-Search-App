
export function Wrapper({emoji}){
    return <>
    <div className="wrapper">
            {
                emoji.map((current,index)=>{
                    return <div key={index}  className="emojis">{current.unicode}</div>
                })
            }
        </div>
    </>
}