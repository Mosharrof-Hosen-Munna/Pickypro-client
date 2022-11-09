import React, { useState } from "react";
import axios from 'axios'

const AddService = () => {

    const [serviceData,setServiceData] = useState({})

    const handleChange = (e)=>{
        const field = e.target.name;
      const value = e.target.value;
      const newServiceData= { ...serviceData };
      newServiceData[field] = value;
      setServiceData(newServiceData);
    }

    const handleSubmit = (e)=>{
        e.preventDefault()

        if(serviceData.ratings <0 || serviceData.ratings >5){
        return  alert("Please Provide ratings between 0 to 5")
        }

        axios.post('http://localhost:5000/api/service/create',serviceData)
        .then(res=>{
         e.target.reset()
        })
        .catch(err=>console.log(err))

    }


  return (
    <section className="py-12 bg-slate-50">
      <div className="container mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-semibold">Add a New Service</h1>
          <div className="w-1/12 p-1 bg-purple-700 mt-3"></div>
        </div>
        <div className="w-full md:w-2/3 mx-auto">
          <div className="card shadow-lg rounded-md bg-white shadow-slate-200 p-4">
            <h1 className="text-4xl text-center text-purple-700 font-semibold my-6">
              New Service
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-lg">
                    Title
                  </span>
                </label>
                <input
                  name="title"
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter a title"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control my-2">
                <label className="label">
                  <span className="label-text font-semibold text-lg">
                    Image
                  </span>
                </label>
                <input
                  name="image"
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter a service image"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control my-2">
                <label className="label">
                  <span className="label-text font-semibold text-lg">
                    Service Price ($)
                  </span>
                </label>
                <input
                  name="price"
                  onChange={handleChange}
                  type="number"
                  placeholder="Enter price"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control my-2">
                <label className="label">
                  <span className="label-text font-semibold text-lg">
                    Ratings
                  </span>
                </label>
                <input
                  name="ratings"
                  onChange={handleChange}
                  type="number"
                  placeholder="Ratings must be 0 to 5"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control my-2">
                <label className="label">
                  <span className="label-text font-semibold text-lg">
                    Description
                  </span>
                </label>
                <textarea
                  name="description"
                  onChange={handleChange}
                  rows={6}
                  placeholder="Enter a long description"
                  className="textarea input-bordered"
                  required
                />
              </div>
              <div className="text-center my-6">
                <button type="submit" className="btn bg-purple-700 btn-lg ">
                  Submit Service
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddService;
