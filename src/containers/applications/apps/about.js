import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Icon, Image, ToolBar} from '../../../utils/general';

export const AboutWin = ()=>{
  const {abOpen} = useSelector(state=> state.desktop);
  const [open, setOpen] = useState(()=>{
    if(localStorage.getItem('closeAbout')=="true"){
      return false;
    }else{
      return true;
    }
  });
  const dispatch = useDispatch();

  const action = ()=>{
    setOpen(false);
    localStorage.setItem('closeAbout',true);
    dispatch({type: "DESKABOUT", payload: false});
  }

  return open || abOpen?(
    <div className="aboutApp floatTab dpShad">
      <div className="py-1 px-2 bg-gray-100 text-xss">
        <div className="">About Windows 11</div>
      </div>
      <div className="windowScreen flex flex-col" data-dock="true">
        <div className="restWindow h-full flex-grow flex flex-col items-center p-4">
          <Image src="windows11" free/>
          <div className="w-88 h-px bg-gray-400 my-4">
          </div>
          <div className="abCont">
            <div>Microsoft Windows (in React)</div>
            <div>Version 21H2 (OS Build 22000.51)</div>
            <div>&copy; Malik Idrees Hasan Khan. All rights reserved.</div>
            <br/>
            <div>
              The Windows 11 Pro Operating System and its user
              interface are protected by the trademark and other pending or
              existing intellectual property rights in the United States and other
              countries/regions and are exclusive Property of Microsoft.
            </div>
            <br/>
            <br/>
           
            <div className="mt-1">
              &nbsp;&nbsp;
              &nbsp;&nbsp;
              contact: <a target="_blank" href="mailto:pencilartassault@hotmail.com">pencilartassault@hotmail.com</a>
            </div>
            <br/>
            <br/>
            <div>
              <span> The current working apps are
                <mark> Calculator</mark>,
                <mark> Edge</mark>,
                <mark> Notepad</mark>,
                <mark> Store</mark>,
                <mark> Terminal</mark>,
                <mark> Vscode</mark>,
                <mark> Whiteboard.</mark>
              </span>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="okbtn">
              <div className="bg-gray-100" onClick={action}>Ok</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ):null;
}
