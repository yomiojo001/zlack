import React from 'react'
import {Button} from 'reactstrap'
import { useAuth0 } from '@auth0/auth0-react'






export const LogOut = () => {
    return (
        <div>
            <Button color="danger">
                Sign Out
            </Button>
        </div>
    )
}
