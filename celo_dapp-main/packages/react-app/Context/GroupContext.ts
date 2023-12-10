import { createContext } from "react";
import { Group } from "../Screens/GroupListScreen";

type GroupContextType = {
    groups: Group[]
    setGroups: (groups: Group[]) => void
}
export const GroupContext = createContext<GroupContextType>({ groups: [], setGroups: (args) => { } })