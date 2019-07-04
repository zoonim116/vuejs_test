import ChargesIndex from '@/components/charges/ChargesIndex';
import ChargesCreate from '@/components/charges/ChargesCreate';
import ChargesEdit from '@/components/charges/ChargesEdit';

export default [
    {
        path: '/',
        component: ChargesIndex
    },
    {
        path: '/charges/create',
        component: ChargesCreate,
        name: 'createCharge'
    },
    {
        path: '/charges/edit/:id',
        component: ChargesEdit,
        name: 'editCharge'
    }
];