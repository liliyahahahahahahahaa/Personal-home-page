const getComponent = dir => {
    return () => import(`@/view/${dir}`)
}

export const configRouter = [
    {
      path: '/',
      name: 'Home',
      component: getComponent('home'),
    },
    {
      path: '/doc/',
      name: 'Document induction',
      redirect:'doc', 
      component: getComponent('doc'),
      children: [
        {
          path: 'pageRuls',
          name: 'ga360 pageRuls',
          component: getComponent('doc/pageRuls'),
        },
        {
          path: 'regExp',
          name: 'regular expression',
          component: getComponent('doc/regExp'),
        },
        {
          path: 'googleSearch',
          name: 'google search',
          component: getComponent('doc/googleSearch'),
        }
        
      ]
    },
    {
      path: '/demo/',
      name: 'Demo instance',
      redirect:'demo', 
      component: getComponent('demo'),
      children: [
        {
          path: 'getStyleAttr',
          name: 'getStyleAttr',
          component: getComponent('demo/getStyleAttr'),
        }
        
      ]
    },
    {
      path: '/others/',
      name: 'Others',
      redirect:'others', 
      component: getComponent('others'),
      children: [
        {
          path: 'workHoursComputed',
          name: 'workHoursComputed',
          component: getComponent('others/workHoursComputed'),
        },
        {
          path: 'imgMask',
          name: 'imgMask',
          component: getComponent('others/imgMask'),
        },
        {
          path: 'svg&canvas',
          name: 'svg&canvas',
          component: getComponent('others/svg&canvas'),
        },
        {
          path: 'threejs',
          name: 'threejs',
          component: getComponent('others/threejs'),
        },
        {
          path: 'websocket',
          name: 'websocket',
          component: getComponent('others/websocket'),
        }
      ]
    },
]


export default configRouter
