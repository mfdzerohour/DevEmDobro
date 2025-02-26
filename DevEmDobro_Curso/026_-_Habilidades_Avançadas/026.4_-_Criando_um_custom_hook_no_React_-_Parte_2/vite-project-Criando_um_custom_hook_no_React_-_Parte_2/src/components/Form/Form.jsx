import { useFormInput } from "../Hooks/useFormInput"

export default function Form() {
    const firtNameProps = useFormInput("Marcelo");
    const lastNameProps = useFormInput("Duarte");

    return (
        <>
            <label>
                First name:
                <input {...firtNameProps}/>
            </label>
            <label>
                Last name:
                <input {...lastNameProps}/>
            </label>
            <p>
                <strong>
                    Bom dia, {firtNameProps.value} {lastNameProps.value}
                </strong>
            </p>
        </>
    )
}