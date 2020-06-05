import * as React from 'react';
import { Link } from 'react-router-dom';
import { Ico } from '../react-icons-sc/src/ico';
import { profile } from './icons/profile';
import { staff } from './icons/staff';
import { catalog } from './icons/catalog';

interface IDockProps {
  username: string
  closeOpenSide: () => void
}

const Dock: React.FunctionComponent<IDockProps> = ({ username, closeOpenSide }) => {

  const docksData = [
    {pageLink : `/admin/${username}/account`, icon : profile, isUser : 'all'},
    {pageLink : `/admin/${username}/staff`, icon : staff, isUser : 'admin'},
    {pageLink : `/admin/${username}/catalog`, icon : catalog, isUser : 'all'},
  ]

  return (
    <>
      {docksData.map(({pageLink, icon }:any)=>
        <DocButton onClick={closeOpenSide} pageLink={pageLink} icon={<Ico {...icon} width={30} height={30} color="rgb(0, 0, 0)"/>}/>
      )}
      
    </>
  );
};


const DocButton: React.FC<any> = ({ pageLink, icon, onClick }) => {

  // click button handler

  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: '#eaeaea',
        width: 50,
        backgroundSize: 50,
        fontSize: 50,
        border: 'none'
      }}>
      <Link to={pageLink} > {icon}  </Link>
    </button>
  )
}

export default Dock;
