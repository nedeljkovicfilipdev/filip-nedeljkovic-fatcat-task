import { Controller, Control, FieldErrors } from 'react-hook-form';
import { z } from 'zod';

import { FormGenerator } from '@homework-task/components/form/FormGenerator';

const validationSchema = z.object({
    title: z
        .string()
        .max(20, 'Title must be 20 characters or less')
        .min(1, 'Title is required'),
    body: z
        .string()
        .max(100, 'Body must be 100 characters or less')
        .min(1, 'Body is required'),
});

type FormData = z.infer<typeof validationSchema>;

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
                <label
                    htmlFor="title"
                    className="block text-sm font-medium text-gray-700 mb-1"
                >
                    Title
                </label>
                <Controller
                    name="title"
                    control={control}
                    render={({ field }) => (
                        <>
                            <input
                                id="title"
                                {...field}
                                type="text"
                                autoComplete="off"
                                className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-sm"
                            />
                            {errors.title && (
                                <p className="text-red-600 text-xs mt-1">
                                    {errors.title.message}
                                </p>
                            )}
                        </>
                    )}
                />
            </div>
            <div className="mb-4">
                <label
                    htmlFor="body"
                    className="block text-sm font-medium text-gray-700 mb-1"
                >
                    Body
                </label>
                <Controller
                    name="body"
                    control={control}
                    render={({ field }) => (
                        <>
                            <textarea
                                id="body"
                                {...field}
                                className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-sm"
                            />
                            {errors.body && (
                                <p className="text-red-600 text-xs mt-1">
                                    {errors.body.message}
                                </p>
                            )}
                        </>
                    )}
                />
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
