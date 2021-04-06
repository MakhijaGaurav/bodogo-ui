import React,{lazy,Suspense}from 'react'
import {Switch,Route} from 'react-router-dom';

const routes = [
    {
        path:'/',
        exact:true,
        key:'about',
        Component:lazy(()=>import('pages/home')),
    },
    {
        path:'/about',
        exact:true,
        key:'about',
        Component:lazy(()=>import('pages/about')),
    },
    {
        path:'/account',
        exact:true,
        key:'account',
        Component:lazy(()=>import('pages/account')),
    },
    {
        path:'/cart',
        exact:true,
        key:'cart',
        Component:lazy(()=>import('pages/cart')),
    },
    {
        path:'/contact',
        exact:true,
        key:'contact',
        Component:lazy(()=>import('pages/contact')),
    },
    {
        path:'/faq',
        exact:true,
        key:'faq',
        Component:lazy(()=>import('pages/faq')),
    },
    {
        path:'/warranty',
        exact:true,
        key:'warranty',
        Component:lazy(()=>import('pages/warranty')),
    },
]

class Routes extends React.Component{
    render() {
        return(
            <Switch>
                <Suspense fallback={null}>
                {routes.map(({path,exact,key,Component})=>
                        <Route
                            key={key}
                            path={path}
                            exact={exact}
                            component={Component}
                        />
                    )
                }
                </Suspense>
            </Switch>
        )
    }
}

export default Routes