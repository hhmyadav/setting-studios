export type Region = {id:string;name:string;subtitle:string;label:string;description:string;cities:string[];color:string};
export const regions:Region[]=[
 {id:'india',name:'All India',subtitle:'ONE BOARD. A BILLION POSSIBILITIES.',label:'The national stage',description:'A country-sized ambition. A planned board that brings distinct city identities together into one high-stakes contest of ownership and influence.',cities:['Delhi','Mumbai','Bengaluru','Kolkata'],color:'#c9ac75'},
 {id:'mp',name:'Madhya Pradesh',subtitle:'MAKE YOUR MOVE AT THE CENTRE.',label:'The heartland',description:'Start at the heart of the board. A regional concept inspired by central India, its layered cityscapes and connections that could become your next advantage.',cities:['Indore','Bhopal','Gwalior','Jabalpur'],color:'#6cbba0'},
 {id:'maharashtra',name:'Maharashtra',subtitle:'THINK BIG. BUILD HIGHER.',label:'The ambitious coast',description:'From metropolitan skylines to the Deccan. A planned region where an appetite for expansion meets a city-driven vision of the board.',cities:['Mumbai','Pune','Nagpur','Nashik'],color:'#b6a0d7'},
 {id:'gujarat',name:'Gujarat',subtitle:'EVERY CONNECTION HAS VALUE.',label:'The trading ground',description:'An entrepreneurial spirit, reimagined as a board-game setting. A planned region inspired by trading cities and the art of spotting an opportunity.',cities:['Ahmedabad','Surat','Vadodara','Rajkot'],color:'#81b9b3'},
 {id:'rajasthan',name:'Rajasthan',subtitle:'BUILD SOMETHING THAT LASTS.',label:'The royal frontier',description:'Fort silhouettes. Warm stone. A different kind of empire. A planned region shaped by Rajasthan’s architectural character and expansive landscapes.',cities:['Jaipur','Jodhpur','Udaipur','Jaisalmer'],color:'#d8aa7d'}
];
export const features=[
 {number:'01',icon:'city',title:'City empires',text:'Acquire city properties and develop a presence across the board. Make expansion a strategy, not an impulse.'},
 {number:'02',icon:'road',title:'Every road has a price',text:'Planned toll systems turn movement into a decision. The route you take could strengthen someone else’s empire.'},
 {number:'03',icon:'bank',title:'Money makes moves',text:'A planned bank and economy system puts cash flow, calculated risk and long-term thinking at the centre.'},
 {number:'04',icon:'market',title:'The other side of the deal',text:'A black-market concept introduces in-game risk and reward. This concept does not involve real-money wagering.'},
 {number:'05',icon:'news',title:'Expect the unexpected',text:'News and event concepts could change the board’s conditions, creating opportunities for players who adapt.'},
 {number:'06',icon:'politics',title:'Influence is a currency',text:'Planned political mechanics explore negotiation, shifting leverage and alliances. Power is more than property.'}
] as const;
export type NewsItem={title:string;category:string;summary:string;href?:string;date?:string};
export type SocialLink={label:string;href:string};
// Add verified announcements and official channels only. No invented placeholders.
export const site={canonical:'https://settingstudios.com/',news:[] as NewsItem[],socials:[] as SocialLink[]};
export function safeLink(href?:string):string|undefined{
 if(!href)return undefined;if(/^#[a-z][a-z0-9-]*$/i.test(href))return href;
 try{const url=new URL(href);return url.protocol==='https:'?url.href:undefined;}catch{return undefined;}
}
