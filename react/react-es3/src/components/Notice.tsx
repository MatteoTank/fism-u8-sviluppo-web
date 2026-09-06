import React from "react";

interface iNotice extends React.ComponentProps<'div'> {
    vote: number
}

function Notice({vote, ...rest}: iNotice) {

    let label = ''

    if (vote == 0)
        label = 'Nessun voto'
    else if (vote == 1)
        label = 'Pessimo'
    else if (vote == 5)
        label = 'Ottimo'
    else 
        label = ''

    return (
        <div {...rest} className={`notice ${vote == 5 ? 'success' : (vote == 1 ? 'wrong' : '')}`}>
            <p>{label}</p>
        </div>
    )
}

export default Notice