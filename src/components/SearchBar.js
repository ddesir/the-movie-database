import React from 'react';

const SearchBar = (props) => {
    return (
        <form
            action={''}
            onSubmit={props.handleSubmit}
        >
            <input
                type={'text'}
                placeholder={'Search Movie'}
                onChange={props.handleChange}
            />
        </form>
    );
}

export default SearchBar;