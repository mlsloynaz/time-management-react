import { Link } from "react-router-dom";

type ThumbnailProps = {
    title: string;
    description: string;
    pageId: string;
    src: string;
}

//TODO: #18 Add img assets to thumbnails
export function Thumbnail({ title, description, pageId, src }: ThumbnailProps) {
    return (
        <Link to={pageId} className="card flex flex-col w-56 min-w-56 h-60">
            <div className="flex  gap-4">
                <img className="h-16 w-16 object-cover"  src={src} alt={pageId} />
                <p className="flex-none content-center uppercase tracking-wide text-sm font-semibold">{title}</p>
            </div>
            <div className="p-4">
                <p className="mt-2 text-slate-500">{description}</p>
            </div>
        </Link>
    );
}