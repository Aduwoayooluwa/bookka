import { useState, useEffect } from 'react';
import axios from 'axios';
import { baseUrl } from "@/api/apiHandler";
import { useToast } from "@/components/ui/use-toast";
import { getSStorage } from './sStorage';

export function useGetAllInvoices() {
    const [allInvoices, setAllInvoices] = useState<any>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const userDid = getSStorage("userDid");


    const { toast } = useToast();

    useEffect(() => {
        const fetchInvoices = async () => {
            setIsLoading(true);
            setIsError(false);
            try {
                const response = await axios.get(`${baseUrl}get-invoice?Did=${userDid}`);
                setAllInvoices(response.data.data);
            } catch (error: any) {
                setIsError(true);
                toast({
                    title: "Boss no vex",
                    description: error.response?.data?.message
                });
                setErrorMessage(error.response?.data?.message)
            } finally {
                setIsLoading(false);
            }
        };

        fetchInvoices();

    }, [toast]);

    console.log(allInvoices)

    return { allInvoices, isLoading, isError, errorMessage };
}
