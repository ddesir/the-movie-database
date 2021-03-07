import React from 'react';

const Pagination = (props) => {
    const pageLinks = [];

    for (let i = 1; i <= props.pages + 1; i++) {
        let active = props.currentPage === i && 'active';

        pageLinks.push(
            <li
                key={i}
                className={`${active}`}
                onClick={() => props.nextPage(i)}
            >
                    {i}
            </li>);
    }

    return (
        <ul className={'pagination'}>
            <li className={props.currentPage > 1 ||'mute'}
                onClick={
                    () => props.currentPage == 1 || props.nextPage(props.currentPage - 1)
                }
            >
                {'\u3008'}
            </li>

            {pageLinks}

            <li className={props.currentPage < props.pages + 1 ||'mute'}
                onClick={
                    () => props.currentPage == props.pages + 1 || props.nextPage(props.currentPage + 1)
                }
            >
                {'\u3009'}
            </li>
        </ul>
    )
}

export default Pagination;