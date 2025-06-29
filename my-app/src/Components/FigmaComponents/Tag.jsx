import { Checktag, Plustag } from "../Icons";

export default function TagsLA({size,state}){
    return <div className={`maintag ${size} ${state}`}>
        
            <Plustag className={`ptag ${size} ${state}`}/>
            <span className={`spantag ${size} ${state}`}>Label</span>
            <div className={`sectag ${size} ${state}`}>
            <Checktag className={`ctag ${size} ${state}`}/>
            </div>
    </div>
}