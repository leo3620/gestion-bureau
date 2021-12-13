import React from 'react'
import { useDrag } from 'react-dnd'

function User({user}) {
    const [{isDragging}, drag] = useDrag(() => ({
        type: 'USER',
        item: {user: user},
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    }))

    return (
        <div
            ref={drag}
            style={{
                opacity: isDragging ? 0.5 : 1,
                fontSize: 25,
                fontWeight: 'bold',
                cursor: 'move',
            }}
        >
            {user.value}
        </div>
    )
}

export default User