import React, { useState } from "react";
import Switch from "react-switch";
import { PostRequest } from "@/api/apiHandler";
import { Button } from "@/components/ui/button";

const url = `configure-invoice`
export default function Web5Config({ setCurrentStep}: Readonly<{setCurrentStep: React.Dispatch<React.SetStateAction<number>>}>) {
    // state to  manage if the protocol has been configured
    const [protocolEnabled, setProtocolEnabled] = useState(false);

    const handleToggleProtocol = async (checked: boolean) => {
        setProtocolEnabled(checked);
        try {

            // api endpoint consumption to set the protocol
            return await PostRequest(url).then((res) => {
                setProtocolEnabled(checked);
                setCurrentStep((prev) => prev + 1);
            })
        } catch (error) {
            // set to false if an error occur
            setProtocolEnabled(false);
        }

    };

    return (
        <div className="p-6 max-w-lg mx-auto">
            <h1 className="text-2xl font-semibold mb-4">Web 5.0 Protocol Configuration</h1>
            
            <div className="mb-6">
                <label htmlFor="protocol-switch" className="flex items-center justify-between">
                    <span className="mr-2">Enable Protocol:</span>
                    <Switch 
                        id="protocol-switch"
                        onChange={handleToggleProtocol}
                        checked={protocolEnabled}
                        onColor="#4CAF50"
                        offColor="#ccc"
                        checkedIcon={false}
                        uncheckedIcon={false}
                    />
                </label>
            </div>

            <Button className="bg-blue-600" onClick={() => {
                setCurrentStep((prev) => prev - 1);
            }}>Back</Button>

            {/* <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Additional Settings</h2>
                <p className="mb-2">Configure other aspects of your Web 5.0 experience:</p>
              
            </div> */}

        </div>
    );
}
