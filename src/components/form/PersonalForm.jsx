import { useResume } from "../../Context/resumeContext";
import { useForm } from "react-hook-form";

const PersonalForm = () => {
  const { setStep, updateData } = useResume();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    updateData("personalInfo", data);
    setStep(2);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h2 className="text-xl font-bold">Personal Information</h2>

    
      <div>
        <input
          className="w-full border p-2 rounded"
          placeholder="First Name"
          {...register("firstName", { required: "First name is required" })}
        />
        {errors.firstName && (
          <p className="text-red-500 text-sm">{errors.firstName.message}</p>
        )}
      </div>

      
      <div>
        <input
          className="w-full border p-2 rounded"
          placeholder="Last Name"
          {...register("lastName", { required: "Last name is required" })}
        />
        {errors.lastName && (
          <p className="text-red-500 text-sm">{errors.lastName.message}</p>
        )}
      </div>

      <div>
        <input
          className="w-full border p-2 rounded"
          placeholder="Email"
          {...register("email", {
            required: "Email required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email"
            }
          })}
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>

    
      <div>
        <input
          className="w-full border p-2 rounded"
          placeholder="Phone Number"
          {...register("phone", {
            required: "Phone required",
            minLength: {
              value: 10,
              message: "Min 10 digits"
            }
          })}
        />
        {errors.phone && (
          <p className="text-red-500 text-sm">{errors.phone.message}</p>
        )}
      </div>

      
      <input
        className="w-full border p-2 rounded"
        placeholder="Location (City, Country)"
        {...register("location")}
      />

      <input
        className="w-full border p-2 rounded"
        placeholder="LinkedIn URL"
        {...register("linkedin")}
      />

    
      <input
        className="w-full border p-2 rounded"
        placeholder="GitHub URL"
        {...register("github")}
      />

    
      <input
        className="w-full border p-2 rounded"
        placeholder="Portfolio Website"
        {...register("portfolio")}
      />

      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default PersonalForm;