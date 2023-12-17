import { useState, useEffect } from 'react';
import axios from 'axios';
import { baseUrl } from "@/api/apiHandler";
import { useToast } from "@/components/ui/use-toast";

export function useGetAllInvoices() {
    const [allInvoices, setAllInvoices] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const { toast } = useToast();

    useEffect(() => {
        const fetchInvoices = async () => {
            setIsLoading(true);
            setIsError(false);
            try {
                const response = await axios.get(`${baseUrl}get-invoice?userDid=${"userDid"}`);
                setAllInvoices(response.data);
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

    return { allInvoices, isLoading, isError, errorMessage };
}
