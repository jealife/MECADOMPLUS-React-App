import React from 'react'
import { Link } from 'react-router-dom';

export default function Card({ num }) {
    let src = 'https://unsplash.it/' + num;
    let src2 = "https://i.pravatar.cc/40?Image=" + num;
    return (
        <div>
            <div className="card-container bg-white  pt-0 pb-3 rounded-2xl m-2 flex flex-col items-center gap-3 shadow-xl w-80 md:w-full ease-in duration-300 hover:translate-y-2" >
                <div className="card-cover">
                    <img src={src} alt="card__image" className="card__image  rounded-t-xl w-96 object-cover h-52" width="600" />
                </div>
                <div className="title-service w-full text-center flex text-xl px-4">
                    <h2 className="text-slate-950 font-extrabold">Dépanneur</h2>
                </div>
                <div className="service px-4">
                    <span className="call text-slate-900 text-sm">Vidange - </span>
                    <span className="call text-slate-900 text-sm">Vidange - </span>
                    <span className="call text-slate-900 text-sm"> Lavage - </span>
                    <span className="call text-slate-900 text-sm"> Lavage - </span>
                    <span className="call text-slate-900 text-sm"> Déppannage -</span>
                </div>
                <div className="card-profile-wrapper w-full flex justify-between items-center px-4 self-center my-2">
                    <Link href='/' className="user flex gap-2">
                        <div className="profile-pic">
                            <img src={src2} alt="user__image" className="user__image rounded-full " />
                        </div>
                        <div className="name">
                            <h3 className="text-slate-950 font-bold">Jhon Doe</h3>
                            <span className="text-slate-600 text-sm"> Mécanicienne </span>
                        </div>
                    </Link>
                    <Link href='/' className="call text-slate-600 text-sm pr-2">
                        <box-icon type='solid' name='phone'></box-icon>
                    </Link>

                </div>
            </div>
        </div>
    )
}