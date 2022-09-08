import React from "react";

import './home.css';
import Header from "../../components/Header/Header";
import Flags from '../../components/Flags/Flags';

import dataList from '../../data';

export default function Home () {
    return (
        <>
            <div className="home">
                <Header />
                <Flags data={dataList} />
            </div>
        </>
    );
}