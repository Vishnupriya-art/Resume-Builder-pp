import { useForm, useFieldArray } from "react-hook-form";
import { useResume } from "../../Context/resumeContext";

const EducationForm = () => {
  const { setStep, updateData } = useResume();

  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm({
    defaultValues: {
      education: [
        {
          institution: "",
          degree: "",
          field: "",
          startYear: "",
          endYear: "",
          current: false
        }
      ]
    }
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "education"
  });

  const onSubmit = (data) => {
    updateData("education", data.education);
    setStep(4);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h2 className="text-xl font-bold">Education</h2>

      {fields.map((item, index) => {
        const currentStudy = watch(`education.${index}.current`);

        return (
          <div key={item.id} className="border p-4 rounded space-y-3">

            {/* Institution */}
            <div>
              <input
                className="w-full border p-2 rounded"
                placeholder="Institution Name"
                {...register(`education.${index}.institution`, {
                  required: "Institution required"
                })}
              />
              {errors.education?.[index]?.institution && (
                <p className="text-red-500 text-sm">
                  {errors.education[index].institution.message}
                </p>
              )}
            </div>

            {/* Degree */}
            <input
              className="w-full border p-2 rounded"
              placeholder="Degree"
              {...register(`education.${index}.degree`)}
            />

            {/* Field */}
            <input
              className="w-full border p-2 rounded"
              placeholder="Field of Study"
              {...register(`education.${index}.field`)}
            />

            {/* Years */}
            <div className="flex gap-2">
              <input
                className="w-full border p-2 rounded"
                placeholder="Start Year"
                {...register(`education.${index}.startYear`)}
              />

              <input
                className="w-full border p-2 rounded"
                placeholder="End Year"
                disabled={currentStudy}
                {...register(`education.${index}.endYear`)}
              />
            </div>

            {/* Checkbox */}
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                {...register(`education.${index}.current`)}
              />
              Currently Studying
            </label>

            {/* Remove Button */}
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

      {/* Add Button */}
      <button
        type="button"
        onClick={() =>
          append({
            institution: "",
            degree: "",
            field: "",
            startYear: "",
            endYear: "",
            current: false
          })
        }
        className="bg-green-500 text-white px-3 py-2 rounded"
      >
        Add Education
      </button>

      {/* Navigation */}
      <div className="flex justify-between">
        <button
          type="button"
          onClick={() => setStep(2)}
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

export default EducationForm;