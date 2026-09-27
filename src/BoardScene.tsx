import {useEffect,useRef,useState} from 'react';
import type {CSSProperties} from 'react';
import {useMedia} from './hooks';
export function BoardFallback(){return <div className="board-fallback" aria-hidden="true"><div className="board-plinth"><div className="board-grid">{Array.from({length:36},(_,i)=><div className={`land land-${i%5}`} key={i}>{i%3!==0&&<i style={{'--height':`${18+(i*13)%54}px`} as CSSProperties}/>}<span>{i%6===0?'₹':'•'}</span></div>)}</div><div className="fallback-center"><b>SETTING</b><span>POWER · PAISA · POLITICS</span></div><div className="fallback-pawn pawn-one"/><div className="fallback-pawn pawn-two"/><div className="fallback-die">⠿</div></div></div>;}
export default function BoardScene(){
 const host=useRef<HTMLDivElement>(null);const [loaded,setLoaded]=useState(false),[failed,setFailed]=useState(false),[retry,setRetry]=useState(0);const reduced=useMedia('(prefers-reduced-motion: reduce)');
 useEffect(()=>{let gone=false,dispose:(()=>void)|undefined;setLoaded(false);setFailed(false);
  const start=async()=>{try{if(new URLSearchParams(location.search).has('no3d'))throw new Error('Fallback preview');const {mountBoard}=await import('./threeBoard');if(gone||!host.current)return;dispose=mountBoard(host.current,{reducedMotion:reduced,onReady:()=>{if(!gone)setLoaded(true);},onError:()=>{if(!gone){setFailed(true);setLoaded(false);}}});}catch{if(!gone)setFailed(true);}};
  const observer=new IntersectionObserver(entries=>{if(entries.some(e=>e.isIntersecting)){observer.disconnect();void start();}},{rootMargin:'120px'});if(host.current)observer.observe(host.current);
  return()=>{gone=true;observer.disconnect();dispose?.();};
 },[reduced,retry]);
 return <div className="board-scene"><div className="board-visual" role="img" aria-label="Cinematic board concept: an isometric city with Indian-inspired domes, miniature towers, roads, gold property markers, player tokens and dice. Not actual gameplay.">{!loaded&&<BoardFallback/>}<div ref={host} className={`canvas-host ${loaded?'ready':''}`} aria-hidden="true"/></div><div className="scene-corner top-left"><span className="cross">+</span> THE BOARD IS YOURS</div><div className="scene-corner bottom-left">{loaded?'REAL-TIME 3D':'ISOMETRIC CONCEPT'} <span> / NOT GAMEPLAY</span></div>{failed&&<button className="scene-retry" onClick={()=>setRetry(n=>n+1)} aria-label="Try loading the interactive 3D board again">Try 3D ↻</button>}</div>;
}
