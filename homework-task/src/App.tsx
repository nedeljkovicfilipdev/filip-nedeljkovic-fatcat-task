import './styles.css';

import { CreateForm } from '@homework-task/components/form/CreateForm';
import { Landing } from '@homework-task/components/landing/Landing';
import { UserList } from '@homework-task/components/user/UserList';

export const App = () => {
    return (
        <main>
            <Landing />
            <UserList />
            <CreateForm />
        </main>
    );
};
