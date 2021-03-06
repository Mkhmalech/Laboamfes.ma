import * as React from 'react';
import Dock from './Docks'
import * as Wrapper from '../common/adminWrappers'
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

// staff routes
import {staffRoutes} from '../ittyni-staff/index'
import { settingRoutes } from '../ittyni-labsetting/src/settingRoutes';

// catalog
import {Catalog} from '../labCatalog/src'

export const AdminLayout = () => {

    // states params 
    const {username} = useSelector(({auth} : LaboFesState)=>auth.login) || undefined

    // close/open sideMenu
    const [closeSideMenu, setcloseSideMenu] = React.useState(false)

    // check if user connected
    const {isAuth} = useSelector((state: LaboFesState) => state.auth.login);

    return (isAuth &&
        <Wrapper.admin>
            <Wrapper.header>
                Laboratoire d'analyse medicale <span style={{ color: 'red' }}>Fes</span>
            </Wrapper.header>

            <Wrapper.container>
                {/**
                 * @khmamed
                 * 
                 * docks layout 
                 * @TODO customize docks to be loadded from
                 * module and link to module pages
                 * module links pages and features 
                 * will be storage in a json file 
                 * 
                 */}
                <Wrapper.dock >  <Dock username={username || ''} closeOpenSide={() => setcloseSideMenu(!closeSideMenu)} /> </Wrapper.dock>

                <Wrapper.main closed={closeSideMenu}>
                    {/**
                     * 
                     * @khmamed
                     * 
                     * sidebar for docks menu 
                     *
                     * @TODO link docks menu item to 
                     * corresponding pages 
                     *
                     */}
                    <Wrapper.sidebar >
                        {/* <Route path={`/admin/${username}/profile`} component={()=><User.Sidebar username ={username}/>} /> 
                            <Route path={labRoutes.LabTests.admin.link} component={Sidebar} /> */}
                    </Wrapper.sidebar>


                    {/*** module content *******
                      *  
                      * @TODO
                      * 
                     */}
                    <Wrapper.content>
                        {/* <Wrapper.tabModule>ModuleTabs</Wrapper.tabModule> */}
                        <Wrapper.page>
                            {/* staff */}
                            <Route path={staffRoutes.StaffListAll.admin.path} component={staffRoutes.StaffListAll.admin.component} exact/>
                            <Route path={staffRoutes.StaffAddEmployer.admin.path} component={staffRoutes.StaffAddEmployer.admin.component} />
                            {/* catalog */}
                            {/* <Route path={`/admin/:user/catalog`} component={Catalog}/> */}
                            {/* setting */}
                            <Route path={settingRoutes.admin.laboSetting.path} component={settingRoutes.admin.laboSetting.component}/>
                        </Wrapper.page>
                    </Wrapper.content>

                </Wrapper.main>

            </Wrapper.container>
        </Wrapper.admin>
    )
    ||
    (<Redirect to='/auth' />)
}