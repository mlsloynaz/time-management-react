import { Route, Routes } from "react-router-dom";
import { SettingsGeneral } from "../modules/Settings/SettingsGeneral";
import { Reports } from "../modules/Reports";
import { Dashboard } from "../modules/Dashboard";
import { LayoutWithMenu } from "./LayoutWithMenu";

export function AppRoutes(){
    return (
        <Routes>
           <Route   element={<LayoutWithMenu />}>
            <Route  path='/dashboard' element={<Dashboard />} />
            <Route  path='/reports'element={<Reports />} />
            <Route  path='/settings' element={<SettingsGeneral />} />
           </Route>
        </Routes>
    )
}
