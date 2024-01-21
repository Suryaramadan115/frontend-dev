"use client"

import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"
import { CiSearch } from "react-icons/ci";
import { FaCartArrowDown } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { FaCartShopping } from "react-icons/fa6";
import { addid,addvalue } from "@/redux/sliceredux";


export default function  Category({params:{category}}) {
  const dispatch = useDispatch()


    const [data,setData] = useState([])

    const getdata = async()=>{
        const res = await axios.get(`https://apistore3000.vercel.app/category/${category}?limit=10`,{cache: "no-store"})
        setData(res.data.data)

    }
    useEffect(()=>{
            getdata()
    },[data,getdata])
  return (
    <div className="min-h-screen container mx-auto flex flex-row gap-x-28">
       <div className="space-y-5 mt-8 lg:w-[200px] border-r  border-slate-300 lg:block hidden">
       <h1 className="text-blue-800 lg:tracking-[2px] font-rubik text-xs lg:text-2xl font-semibold pl-1">
          kategory 
          </h1>
        <ul className=" px-4  lg:px-0 uppercase font-semibold text-slate-700 text-md font-mono  space-y-4 ">
          <li className="hover:text-blue-600 lg:pl-3 lg:text-lg text-xs"><Link href='/category/baju'> baju</Link></li>
          <li className="hover:text-blue-600 lg:pl-3 lg:text-lg text-xs"><Link href='/category/celana'> celana</Link></li>
          <li className="hover:text-blue-600 lg:pl-3 lg:text-lg text-xs"><Link href='/category/tas'> tas</Link></li>
          <li className="hover:text-blue-600 lg:pl-3 lg:text-lg text-xs"><Link href='/category/sepatu'> sepatu</Link></li>
          <li className="hover:text-blue-600 lg:pl-3 lg:text-lg text-xs"><Link href='/category/topi'> topi</Link></li>
          <li className="hover:text-blue-600 lg:pl-3 lg:text-lg text-xs"><Link href='/category/jaket'> jaket</Link></li>

        </ul>
      </div>
      <div className="  pl-2 pt-3 lg:pl-0 lg:pt-3  w-[400px] lg:w-full flex flex-wrap gap-2  justify-center lg:gap-5 mt-8">
      {data.map((data)=>{
        return (
          <div className="  card lg:w-[250px] w-[100px] bg-base-100 shadow-xl h-[350px] lg:h-[500px]"  key={data.id}>
          <figure className="">
            <img src={data.url} alt="Shoes" className=" lg:object-contain rounded-xl h-[150px] lg:h-[250px] w-full" />
          </figure>
          <div className="card-body items-center ">
            <h2 className="card-title text-xs lg:text-sm">Rp.{data.hargatotal}</h2>
            <p className="font-rubik font-semibold lg:text-lg text-xs capitalize text-center">{data.namaproduct}</p>
            <p className="lg:text-lg text-xs font-nunito text-blue-700 text-center capitalize">{data.category}</p>
            <div className=" w-[80px] flex flex-row justify-between lg:w-full ">
            <p className="  lg:text-lg text-xs font-mono text-slate-600 font-extrabold ">Stok:{data.stok}</p>
            <FaCartShopping
            onClick={()=>{ dispatch(addid(data)) ; dispatch(addvalue(1)) }}
            className=' inline-block scale-125 hover:text-blue-700 hover:cursor-pointer text-yellow-500'/>

            </div>

            <div className="card-actions">
            <Link href={`/product/${data.id}`} className=" w-[80px] lg:w-full capitalize btn btn-primary text-white hover:text-yellow-700 hover:text-bold cursor-pointer">checkout </Link>
              </div>
          </div>
      </div>   
        )
    })}
      
      </div>
    </div>
  )
}
