import {useEffect,useState} from 'react';
export function useMedia(query:string){
 const [matches,setMatches]=useState(()=>matchMedia(query).matches);
 useEffect(()=>{const m=matchMedia(query);const update=()=>setMatches(m.matches);update();m.addEventListener('change',update);return()=>m.removeEventListener('change',update);},[query]);return matches;
}
