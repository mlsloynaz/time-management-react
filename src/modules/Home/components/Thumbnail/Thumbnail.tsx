type ThumbnailProps={
   title: string;
   description: string;
}

// TODO: #1 style home page thumbnail, add image props

export function Thumbnail({title, description}: ThumbnailProps){
   return ( 
   <div>
        <a href="https://google.com">
             <h5>{title}</h5>
             <p>{description}</p>
        </a>
    </div>
    );
}