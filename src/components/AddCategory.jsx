import { useState } from "react"

export const AddCategory = ( { onNewCategory } ) => {

    const [inputValue, setInputValue] = useState('');

    const onSubmit = ( event ) => {
        event.preventDefault();
        const newInput = inputValue.trim();
        
        if( newInput.length <= 1) return;

        onNewCategory(newInput);
        setInputValue('');
    }

    return (
        <form className="d-flex justify-content-center" onSubmit={ (event) => onSubmit(event) }>
            <input
                className="form-control formInput mt-2"
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
            />
        </form>
    )
}
