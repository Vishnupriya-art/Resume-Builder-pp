import { useForm, useFieldArray } from "react-hook-form";
import { useResume } from "../../Context/resumeContext";

const ExperienceForm = () => {
  const { setStep, updateData } = useResume();

  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm({
    defaultValues: {
      experience: [
        {
          company: "",
          jobTitle: "",
          startDate: "",
          endDate: "",
          current: false,
          description: ""
        }
      ]
    }
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "experience"
  });

  const onSubmit = (data) => {
    updateData("experience", data.experience);
    setStep(5);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h2 className="text-xl font-bold">Work Experience</h2>

      {fields.map((item, index) => {
        const currentWorking = watch(`experience.${index}.current`);

        return (
          <div key={item.id} className="border p-4 rounded space-y-3">

           
            <div>
              <input
                className="w-full border p-2 rounded"
                placeholder="Company Name"
                {...register(`experience.${index}.company`, {
                  required: "Company name required"
                })}
              />
              {errors.experience?.[index]?.company && (
                <p className="text-red-500 text-sm">
                  {errors.experience[index].company.message}
                </p>
              )}
            </div>

            
            <div>
              <input
                className="w-full border p-2 rounded"
                placeholder="Job Title" 
                {...register(`experience.${index}.jobTitle`, {
                  required: "Job title required"
                })}
              />
              {errors.experience?.[index]?.jobTitle && (
                <p className="text-red-500 text-sm">
                  {errors.experience[index].jobTitle.message}
                </p>
              )}
            </div>

            
            <div className="flex gap-2">
              <input
                type="date"
                className="w-full border p-2 rounded"
                {...register(`experience.${index}.startDate`)}
              />

              <input
                type="date"
                className="w-full border p-2 rounded"
                disabled={currentWorking}
                {...register(`experience.${index}.endDate`)}
              />
            </div>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                {...register(`experience.${index}.current`)}
              />
              Currently Working Here
            </label>

            <textarea
              className="w-full border p-2 rounded"
              rows="3"
              placeholder="Job Description"
              {...register(`experience.${index}.description`)}
            />

          
            {fields.length > 1 && (
              <button
                type="button"
                onClick={() => remove(index)}
                className="text-red-500"
              >
                Remove
              </button>
            )}
          </div>
        );
      })}

      
      <button
        type="button"
        onClick={() =>
          append({
            company: "",
            jobTitle: "",
            startDate: "",
            endDate: "",
            current: false,
            description: ""
          })
        }
        className="bg-green-500 text-white px-3 py-2 rounded"
      >
        Add Experience
      </button>

     
      <div className="flex justify-between">
        <button
          type="button"
          onClick={() => setStep(3)}
          className="bg-gray-400 text-white px-4 py-2 rounded"
        >
          Back
        </button>

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

export default ExperienceForm;