import React from 'react';
import Sectiontitle from '../../../Component/Sectiontitle/Sectiontitle';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../Hooks/useAxiossecure';
import Swal from 'sweetalert2';

const imgkey=import.meta.env.VITE_img_key
const Additem = () => {
    const[axiosSecure] =useAxiosSecure()
    const { register,reset, handleSubmit } = useForm();
    const imge_hosting_url=`https://api.imgbb.com/1/upload?key=${imgkey}`
    const onsubmit=(data)=>{
       const formdata=new FormData();
       formdata.append('image',data.image[0])
       fetch(imge_hosting_url,{
        method:'POST',
        body:formdata
       })
       .then(res=>res.json())
       .then(imgresponse=>{
        if(imgresponse.success){
            const imgURL=imgresponse.data.display_url;
            const {name,price,category,recipe}=data;
            const newItem={name,price:parseFloat(price),category,recipe,image:imgURL}
            axiosSecure.post('/menu',newItem)
            .then(data=>{
                console.log('after posting new menu item',data.data)
                if(data.data.insertedId){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
            reset()
        }
       })
    }
    console.log(imgkey)
    return (
        <div className='w-full'>
            <Sectiontitle subheading={"what's new"} heading={'Add an item'}></Sectiontitle>
            <form onSubmit={handleSubmit(onsubmit)} className='px-10'>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Recipe Name*</span>

                    </label>
                    <input type="text" {...register("name", { required: true })} placeholder="Type here" className="input input-bordered w-full " />

                </div>
                <div className='flex space-x-1'>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Category*</span>

                    </label>
                    <select {...register("category", { required: true })} className="select select-bordered">
                        <option  disabled defaultValue="pick one">Pick one</option>
                        <option>Pizza</option>
                        <option>Soup</option>
                        <option>Salad</option>
                        <option>Drinks</option>
                        <option>Dessert</option>

                    </select>
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Price*</span>

                    </label>
                    <input type="Number" {...register("price", { required: true })} placeholder="Price" className="input input-bordered w-full " />

                </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Details*</span>

                    </label>
                    <textarea className="textarea textarea-bordered h-24" {...register("recipe", { required: true })} placeholder="recipe"></textarea>

                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Item image*</span>

                    </label>
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />

                </div>
                <input type="submit"  className='btn-neutral btn-sm mt-4 mx-auto' value="Add item" />
              
            </form>
        </div>
    );
};

export default Additem;