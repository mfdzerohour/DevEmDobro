import React, {useContext} from "react";
import { Input } from "../buttons/button";
import { ThemeContext,themes } from "../../context/theme-contexts";






export const ThemeTogglerButton = () => {
    const {theme, setTheme} = useContext(ThemeContext)
    return (
        <div>
            <Input              
             type="checkbox"
             onClick={() => {setTheme(theme === themes.light ? themes.dark : themes.light)}}
             />
        </div>
    )
}

