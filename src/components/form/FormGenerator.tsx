import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';
import { useForm, Control, FieldErrors, FieldValues } from 'react-hook-form';
import { ZodSchema } from 'zod';

interface FormGeneratorProps<T extends FieldValues> {
    validationSchema: ZodSchema<T>;
    renderForm: (props: {
        control: Control<T>;
        errors: FieldErrors<T>;
    }) => React.ReactNode;
}

interface PostResponse {
    id: number;
    title: string;
    body: string;
    userId: number;
}

export const FormGenerator = <T extends FieldValues>({
    validationSchema,
    renderForm,
}: FormGeneratorProps<T>) => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<T>({
        resolver: zodResolver(validationSchema),
    });

    const mutation: UseMutationResult<
        AxiosResponse<PostResponse>,
        Error,
        T,
        unknown
    > = useMutation({
        mutationFn: (data: T) =>
            axios.post<PostResponse>(
                'https://jsonplaceholder.typicode.com/posts',
                data
            ),
    });

    const onSubmit = (data: T) => {
        mutation.mutate(data);
    };

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(onSubmit)().catch((err: Error) => {
                    // Handle error, alert user
                    const errorMessage =
                        err instanceof Error
                            ? err.message
                            : 'Unknown error occurred';
                    alert('Form submission failed: ' + errorMessage);
                });
            }}
        >
            {renderForm({ control, errors })}
            <button
                type="submit"
                disabled={mutation.isPending}
                className={`w-full bg-primary hover:bg-blue-400 text-white py-2 px-4 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${
                    mutation.isPending ? 'opacity-50 cursor-not-allowed' : ''
                }`}
            >
                {mutation.isPending ? 'Submitting...' : 'Submit'}
            </button>

            {mutation.isError && <p>Submission failed. Please try again.</p>}
            {mutation.isSuccess && <p>Form submitted successfully!</p>}
        </form>
    );
};
