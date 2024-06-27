import './styles.css';

import { CreateForm } from '@homework-task/components/form/CreateForm';
import { Landing } from '@homework-task/components/landing/Landing';
import { data } from '@homework-task/components/layout/LayoutData';
import { PageGenerator } from '@homework-task/components/PageGenerator';
import { UserList } from '@homework-task/components/user/UserList';

export const App = () => {
    return (
        <main>
            <Landing />
            <UserList />
            <CreateForm />
            <PageGenerator data={data} />
        </main>
    );
};
