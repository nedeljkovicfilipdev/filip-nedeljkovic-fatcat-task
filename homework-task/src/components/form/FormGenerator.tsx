import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import {
    useForm,
    SubmitHandler,
    FieldValues,
    Control,
    FieldErrors,
    DefaultValues,
} from 'react-hook-form';
import { useMutation } from 'react-query';
import { ZodSchema } from 'zod';

interface FormData {
    title: string;
    body: string;
}

interface FormGeneratorProps<T extends FieldValues> {
    validationSchema: ZodSchema<T>;
    renderForm: (methods: {
        control: Control<T>;
        errors: FieldErrors<T>;
    }) => React.ReactNode;
    onSubmitSuccess?: (data: T) => void;
}

export const FormGenerator = <T extends FieldValues>({
    validationSchema,
    renderForm,
    onSubmitSuccess,
}: FormGeneratorProps<T>) => {
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<T>({
        resolver: zodResolver(validationSchema),
        defaultValues: {} as DefaultValues<T>, // Use an empty object as defaultValues for type safety
    });

    const mutation = useMutation(
        (data: FormData) =>
            axios.post('https://jsonplaceholder.typicode.com/posts', data),
        {
            onSuccess: (response) => {
                if (onSubmitSuccess) {
                    onSubmitSuccess(response.data as T);
                }
            },
        }
    );

    const onSubmit: SubmitHandler<T> = (data) => {
        const postData: FormData = {
            title: data.title as string,
            body: data.body as string,
        };
        mutation.mutate(postData);
    };

    return (
        <form
            onSubmit={() => {
                handleSubmit(onSubmit);
            }}
        >
            {renderForm({ control, errors })}
            <button
                type="submit"
                disabled={mutation.isLoading}
                className="bg-blue-500 text-white p-2 rounded mt-4"
                style={{
                    backgroundColor: 'blue',
                    color: 'white',
                    padding: '8px 16px',
                    borderRadius: '4px',
                    marginTop: '16px',
                }}
            >
                {mutation.isLoading ? 'Submitting...' : 'Submit'}
            </button>
            {mutation.isError && (
                <p className="text-red-500">Error submitting form</p>
            )}
        </form>
    );
};
