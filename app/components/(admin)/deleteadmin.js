"use client"
import axios from "axios"
import { useState,useEffect } from "react"

export default function Deleteadmin({data}){

    const [open,setopen] = useState("")

    const openmodal =()=>{
        setopen(!open)
    }
    const deletedata = async()=>{
        const res = await axios.delete(`https://apistore3000.vercel.app/product/${data.id}`)
        alert(res.data.msg)
        window.location.reload()
    }

    return (
        <div>
            <div>
                <button onClick={openmodal} className="btn btn-ghost text-red-700 font-rubik uppercase" >delete</button>
            </div>

            <div className={open ? "modal modal-open modal-middle":"modal"}>
                <div className="modal-box">
               
                <h1 className="font-nunito text-lg capitalize font-bold">
                    apakah anda yakin untuk menghapus {data.namaproduct}
                </h1>
                <div className="modal-action justify-end">
                    <button onClick={openmodal} className="btn btn-ghost capitalize"> cancel</button>
                    <button onClick={deletedata} className="btn btn-ghost capitalize">yes</button>
                </div>
                </div>
            </div>
        </div>
    )

}