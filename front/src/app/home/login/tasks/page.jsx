'use client'
import Form from '../../../../Components/Form/Form';
import SubNavBar from '../../../../Components/SubNavBar/SubNavBar';
import ProtectedRoute from '../../../../ProtectedRoute'


function TaskPage() {
    return (
        <div>

            <ProtectedRoute >
            <SubNavBar />
                <Form />
            </ProtectedRoute>
        </div>
    )
}

export default TaskPage;