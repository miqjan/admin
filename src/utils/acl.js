import { find } from 'lodash';


export const roles = [
  {
    id: 1,
    name: 'superadmin',
    permissions: [
      'view_users',
    ],
  },
  {
    id: 2,
    name: 'user',
    permissions: [

    ],
  },
];

export const userRole = () => {
    return localStorage.getItem('role') || 'user';
};

const hasPerm = (perm) => {
    const data = find(roles, (item) => {
        return item.name === userRole();
    });
    return data.permissions.indexOf(perm) !== -1;
};



export const canViewUsers = () => {
    console.log(hasPerm('view_users'));
    return hasPerm('view_users');

};
