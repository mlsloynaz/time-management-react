import { Outlet } from "react-router-dom";

export function LayoutWithMenu(){
    return (
        <div style={{background: "yellow"}}>
            <header style={{background: "orange"}}>
                {/* <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul> 
                </nav>*/}
            </header>
            <main style={{background: "purple"}}>
                <Outlet />
            </main>
        </div>
    )
}