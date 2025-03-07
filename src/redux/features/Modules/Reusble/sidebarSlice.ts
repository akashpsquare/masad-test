import { createSlice } from "@reduxjs/toolkit"
import { mainMenuItems } from "../../../../utills/Routes/menuItems";
import { SideBarState } from "../../../Interfaces/Modules/Reuseable/Reuseable";


const initialState:SideBarState={
    label:mainMenuItems[0].label,
    currentActiveSubRouteIndex:0,
    currentActiveRotueIndex:0,
    subRoutes:mainMenuItems[0].subRoute,
}
const sidebarslice = createSlice({  
    name: "label",
    initialState,
    reducers: {
        setLabel: (state, action) => {
            state.label = action.payload;
        },
        setSubRoutes:((state,action)=>{
            state.subRoutes=action.payload
        }),
        currentActiveSubRouteIndex:((state,action)=>{
            state.currentActiveSubRouteIndex=action.payload
        }),
         setcurrentActiveRotueIndex:((state,action)=>{
            state.currentActiveSubRouteIndex=action.payload
        }),
    }
})

export const { setLabel,setSubRoutes,currentActiveSubRouteIndex,setcurrentActiveRotueIndex } = sidebarslice.actions;
export default sidebarslice.reducer;