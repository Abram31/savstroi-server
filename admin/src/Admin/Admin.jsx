import React, { useEffect } from 'react'
import { Admin, Resource } from 'react-admin';
import restProvider from "ra-data-simple-rest";
import { JobList } from './JobList';
import { JobCreate } from './JobCreate';
import { JobEdite } from './JobEdite';
import { authProvider } from './authProvider';
import { createBrowserHistory } from 'history';

// const history = createBrowserHistory();


export const AdminComp = () => {
  // useEffect(()=>{
  //   (async ()=>{
  //     const resp = await fetch('http://localhost:5000/data')
  //     const data = await resp.json()
  //     console.log(data);
  //   })()
  // })
  return (
    <Admin 
    // history={history} 
    authProvider={authProvider} dataProvider={
      restProvider('https://server.savstroi.vh87.hosterby.com')

      // restProvider('http://localhost:5000')

      // restProvider('http://server.savstroi.vh87.hosterby.com/data')

    }
    >
      <Resource name='jobs' list={JobList}
        create={JobCreate} edit={JobEdite}
      />
    </Admin >
  )
}
