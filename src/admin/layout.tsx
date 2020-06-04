import * as React from 'react';
import Dock from './Docks'
import * as Wrapper from '../common/adminWrappers'

export const AdminLayout = () => {

    return (
        <Wrapper.admin>


            <Wrapper.header>
                i<span style={{ color: 'red' }}>TT</span>yni
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
                <Wrapper.dock >  <Dock username='mohammed' closeOpenSide={() => false} /> </Wrapper.dock>

                <Wrapper.main closed={false}>
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
                    */
                    }
                    <Wrapper.content>
                        {/* <Wrapper.tabModule>ModuleTabs</Wrapper.tabModule> */}
                        <Wrapper.page>
                        </Wrapper.page>
                    </Wrapper.content>

                </Wrapper.main>

            </Wrapper.container>
        </Wrapper.admin>
    )
}