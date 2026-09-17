interface shape {
    type:'rect' | 'circle' | string,
    fill?:string,
}

interface IconProps {
    size:number,
    fill?:string,
    stroke?:string,
    stroke_width?:number,
    outline?:shape;
}

export default function Logo({size,fill,stroke,stroke_width,outline}:IconProps){
    size = size ?? "24"
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
        {/* <circle cx="50%" cy="50%" r="50%" fill="#aaa"/> */}
        {outline && outline.type=="rect" && (
            <rect width="100%" height="100%" fill={outline.fill ?? "#222"}/>
        )}
        {outline && outline.type=="circle" && (
            <circle cx="50%" cy="50%" r="50%" fill={outline.fill ?? "#222"}/>
        )}
            <path d="M 17.6 2.4 C 15.6 4, 13.6 4, 9.6 2.4 S 3.6 0.8, 1.6 2.4 L 8 9.97 L 8 15.2 L 11.2 16.8 L 11.2 9.97 Z" 
                fill={ fill ?? "#ffffff00" }
                stroke={stroke ?? "#0B6E4F" }
                strokeWidth={stroke_width ?? "2"} 
                transform="translate(2.6, 3.8)"
            />
        </svg>
    )
}