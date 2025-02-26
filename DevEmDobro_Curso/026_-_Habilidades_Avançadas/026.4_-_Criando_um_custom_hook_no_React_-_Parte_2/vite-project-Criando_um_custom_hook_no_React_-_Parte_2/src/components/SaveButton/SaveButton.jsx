import { useOnlineStatus } from "../Hooks/useOnlineStatus.jsx";

function SaveButton(){
    const isOnLine = useOnlineStatus();
    function handleSaveClick(){
        console.log("Save Clicked!");
    }

    return(
        <>
            <button disabled={!isOnLine} onClick={handleSaveClick}>
                { isOnLine ? "Save progress" : "Reconnecting..." }
            </button>
        </>
    )
}

export default SaveButton;