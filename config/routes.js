export default [
  {
    path: '/',
    component: '../layouts/BlankLayout',
    routes: [
      {
        path: '/user',
        component: '../layouts/UserLayout',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './User/login',
          },
        ],
      },
      {
        path: '/',
        component: '../layouts/SecurityLayout',
        routes: [
          {
            path: '/',
            component: '../layouts/BasicLayout',
            authority: ['admin', 'user'],
            routes: [
              {
                path: '/',
                redirect: '/welcome',
              },
              {
                path: '/welcome',
                name: 'welcome',
                icon: 'smile',
                component: './Welcome',
              },
              {
                name: 'list.table-list',
                icon: 'table',
                path: '/list',
                component: './TableList',
              },
              {
                name: 'clearing',
                icon: 'clearing',
                routes: [
                  {
                    name: 'flow',
                    icon: 'flow',
                    path: '/clearing/flow/',
                    component: './Clearing/Views/clearingFlow/clearingFlowOne',
                  },
                  // {
                  //   name: 'flow2',
                  //   icon: 'flow',
                  //   path: '/clearing/flow/',
                  //   component: './Clearing/Views/clearingFlow/clearingFlowTwo',
                  // },
                ]
              },
              {
                component: './404',
              },
            ],
          },
          {
            component: './404',
          },
        ],
      },
    ],
  },
  {
    component: './404',
  },
];
