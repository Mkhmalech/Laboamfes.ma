import styled from 'styled-components'

// Admin page has three column boxes : header, pane and footer 
/* 
--------------------------------------------------------------
    AdminWrapper
    */
    export const AdminWrapper = styled.div`

        display : flex;
        flex-direction : column

    `
    /*
    -------------------------------------------------------------------------------------------------------------------------------
            header wrapper 
        */ 
       export const AdminWrapperHeader = styled.header` 
            background-color: #44433e;
            position: inherit;
            width : 100%;  
            display : flex; 
            flex-direction : row;
            border-bottom : .1em solid #000000;
        `
       /*
        --------------------------------    --------------------------------    --------------------------------
                logo wrapper                     header menu                            header account
        --------------------------------    --------------------------------     --------------------------------
    -------------------------------------------------------------------------------------------------------------------------------
    
    -----------------------------------------------------------------

            body wrapper
    */
    export const AdminWrapperBody = styled.div`
        min-height : 250px;
        display : flex;
        flex-direction : row;
    `

    export const AdminWrapperBodyPane = styled.div`
        display : flex;
        flex-direction : row;
        
        flex: 0 1 0;
        min-height: 685px;
        
    `
    export const AdminWrapperBodyPaneNav = styled.div`
        display : flex;
        flex-direction : column;
        border-right: .1em solid #000000;
        background-color: #44433e;
    `
    export const AdminWrapperBodyPaneContent = styled.div`
        display : flex;
        flex-direction : column;
        width: 200px;
        background: #5c5b58;
    `

    export const AdminWrapperBodyCanvas = styled.div`
        display : flex;
        flex-direction : column;
        padding: 20px 0 0 20px;
        width: 100%;
    `
    export const AdminWrapperBodyCanvasTitle = styled.div`
        display : flex;
        flex-direction : row;
        padding: 25px;
        border: 1px solid;
        margin: 15px;
    `
    export const AdminWrapperBodyCanvasBody = styled.div`
        display : flex;
        flex-direction : column;
    `
    /*
    -----------------------------------------------------------------
    -----------------------------------------------------------------
            footer wrapper
    -----------------------------------------------------------------
    */
    export const AdminWrapperFooter = styled.div`
        font-weight: bolder;
        color: #5c5b58;
        background: #241a0e;
        width: 100%;
    `
    /*
-------------------------------------------------------------- 
*/
