import Layout from '../components/Protected/protectedUI/protectedUI';
import UnProtectedRoutes from '../components/unProtected/upProtectedRoutes/unProtectedRoutes';
import { useSelector } from 'react-redux';

const Router = () => {

    const currentUser = useSelector((state)=> state.set_up_user)

    const routeExchanger = (currentUser && Object.keys(currentUser).length !== 0) ? true : false

    return (
        <>
            {
                routeExchanger ? <Layout /> : <UnProtectedRoutes />
            }

        </>
    )
}

export default Router