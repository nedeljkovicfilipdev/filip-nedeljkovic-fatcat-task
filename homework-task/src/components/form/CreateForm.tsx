import { Controller, Control, FieldErrors } from 'react-hook-form';
import { z } from 'zod';
import { FormGenerator } from './FormGenerator';

const validationSchema = z.object({
    title: z
        .string()
        .min(1, { message: 'Title is required' })
        .max(20, 'Title must be at most 20 characters'),
    body: z
        .string()
        .min(1, { message: 'Body is required' })
        .max(200, 'Body must be at most 200 characters'),
});

interface FormData {
    title: string;
    body: string;
}

export const CreateForm = () => {
    const renderForm = ({
        control,
        errors,
    }: {
        control: Control<FormData>;
        errors: FieldErrors<FormData>;
    }) => (
        <>
            <div className="mb-4">
                <label className="block text-gray-700">Title</label>
                <Controller
                    name="title"
                    control={control}
                    defaultValue=''
                    render={({ field }) => (
                        <input
                            {...field}
                            className="mt-1 p-2 border rounded w-full"
                        />
                    )}
                />
                {errors.title && (
                    <p className="text-red-500">{errors.title.message}</p>
                )}
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Body</label>
                <Controller
                    name="body"
                    control={control}
                    defaultValue=''
                    render={({ field }) => (
                        <textarea
                            {...field}
                            className="mt-1 p-2 border rounded w-full"
                        />
                    )}
                />
                {errors.body && (
                    <p className="text-red-500">{errors.body.message}</p>
                )}
            </div>
        </>
    );

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Form Example</h1>
            <FormGenerator
                validationSchema={validationSchema}
                renderForm={renderForm}
            />
        </div>
    );
};
