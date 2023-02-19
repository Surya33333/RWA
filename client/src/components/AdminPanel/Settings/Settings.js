import React from 'react'
import "./Settings.scss";
import Login from "../../Website/Login/Login.js";
import SideBar from "../SideBar/SideBar.js";
import NavBar from "../NavBar/NavBar.js";
import * as Icon from 'react-bootstrap-icons';

const usertoken = sessionStorage.getItem('token');
const upi = "spnreddy2002@ybl";
const walletbalance = "290.00"
const Settings = () => {
    return (
        <>
          {!usertoken ? (<Login />) : (
            <div className="settings">
              <SideBar />
              <div className="settingsContainer">
                <NavBar />
                <div className="settings">
                    Settings
                </div>
                <div className="wallet">
                    <div className="text-left pl-3 pt-2 font-bold text-slate-700">Wallet</div>
                    <div className="flex justify-between align-middle">
                      <div className="flex pl-2 pt-4 h-3/6"> 
                      <div className="flex p-3 gap-4 m-1 shadow-md bg-slate-200 align-middle rounded-lg">
                        <div className="font-bold">UPI</div>
                        <div className="font-semibold">{upi}</div>
                        <div className="pt-1 cursor-pointer"><Icon.CaretDownFill/></div>
                      </div>
                      <div className="p-3 gap-4 m-1 bg-slate-300 hover:translate-x-1 hover:scale-105 shadow-md hover:shadow-lg cursor-pointer font-bold rounded-lg">+</div>
                      </div>
                      <div className="right text-center mr-7">
                        <div className="text-slate-400 text-sm">Total Balance</div>
                        <div className="font-bold text-2xl mt-1">${walletbalance}</div>
                        <div className="bg-green-500 mt-1 shadow-md hover:translate-x-1 hover:scale-105 cursor-pointer rounded-3xl font-bold p-2">+ Add</div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          )}
        </>
      )
    }
export default Settings