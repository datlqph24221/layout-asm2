import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
    return <>
        {/* Header */}
        <header>
            Header
        </header>
        {/* Content */}
        <Outlet />
        <footer>
            Footer
        </footer>
    </>
}

export default AdminLayout