import React from "react";

interface iButtonProps extends React.ComponentProps<'button'> {
    label: string
}

function Button({ label, ...rest }) {
    return <button {...rest}>{label}</button>
}

export default Button