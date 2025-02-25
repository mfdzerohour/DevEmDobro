import { useEffect, useState } from "react";

export default function StatusBar(){

    const [ isOnLine, setIsOnLine ] = useState(true);

    useEffect(()=>{
            function handleOnline(){
                setIsOnLine(true);
            }
    
            function handleOffline() {
                setIsOnLine(false);
            }
    
            window.addEventListener('online', handleOnline);
            window.addEventListener('offline', handleOffline);
    
            //Esta instrução é para limpar o componente e não ficar
            //rodando indenifidamente.
            return () => {
                window.removeEventListener("online", handleOnline);
                window.removeEventListener("offline", handleOffline);
            }
    
        }, []);

    return (
        
        <>
            <h1>{ isOnLine ? "✅ Online" : "❌ Offline" }</h1>
        </>
    )
}