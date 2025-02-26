import { useOnlineStatus } from "../Hooks/useOnlineStatus";

export default function StatusBar(){
    const isOnLine = useOnlineStatus();
    
    return (
        
        <>
            <h1>{ isOnLine ? "✅ Online" : "❌ Offline" }</h1>
        </>
    )
}