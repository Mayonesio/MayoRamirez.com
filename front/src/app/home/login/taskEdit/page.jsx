'use client'
import FormEdit from '../../../../Components/FormEdit/FormEdit';
import SubNavBar from '../../../../Components/SubNavBar/SubNavBar';
import ProtectedRoute from '../../../../ProtectedRoute'


function TaskPage() {
    return (
        <div>

            <ProtectedRoute >
            <SubNavBar />
                <FormEdit />
            </ProtectedRoute>
        </div>
    )
}

export default TaskPage;

