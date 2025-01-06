import React from "react";
import SectionTitle from "../../../components/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    console.log(data);
    // image upload to imgbb and get the url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      //now send the data to database
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      const menuRes = await axiosSecure.post("/menu", menuItem);
      console.log(menuRes.data);
      if (menuRes.data.insertedId) {
        toast.success("menu added successfully");
        reset();
      }
    }
    console.log(res.data);
  };
  return (
    <div>
      <SectionTitle
        heading={"Add Item"}
        subHeading={"Whats New"}
      ></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full my-6">
            <div className="label">
              <span className="label-text">Recipe name</span>
            </div>
            <input
              type="text"
              placeholder="recipe name"
              {...register("name", { required: true })}
              className="input input-bordered w-full "
            />
          </label>
          <div className=" w-full flex justify-center items-center gap-5">
            {/* category */}
            <div className="w-full">
              <div className="label">
                <span className="label-text">Category</span>
              </div>
              <select
                defaultValue={"default"}
                {...register("category", { required: true })}
                className="select select-bordered w-full"
              >
                <option disabled value={"default"}>
                  Select Category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>

            {/* price */}
            <div className="w-full">
              <label className="form-control w-full my-6">
                <div className="label">
                  <span className="label-text">Recipe price</span>
                </div>
                <input
                  type="number"
                  placeholder="recipe price"
                  {...register("price", { required: true })}
                  className="input input-bordered w-full "
                />
              </label>
            </div>
          </div>

          <label className="form-control">
            <div className="label">
              <span className="label-text">Recipe details</span>
            </div>
            <textarea
              {...register("recipe", { required: true })}
              className="textarea textarea-bordered h-24"
              placeholder="Bio"
            ></textarea>
          </label>

          <div className="form-control w-full my-6">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input file-input-bordered w-full max-w-xs"
            />
          </div>

          <button className="btn "> Add item</button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
