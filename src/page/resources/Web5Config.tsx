import React, { useState } from "react";
import Switch from "react-switch";
import { PostRequest } from "@/api/apiHandler";

const url = `configure-invoice`
export default function Web5Config() {
    const [protocolEnabled, setProtocolEnabled] = useState(false);

    const handleToggleProtocol = async (checked: boolean) => {
        setProtocolEnabled(checked);
        try {

            return await PostRequest(url).then((res) => {
                setProtocolEnabled(checked);
            })
        } catch (error) {
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

            {/* <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Additional Settings</h2>
                <p className="mb-2">Configure other aspects of your Web 5.0 experience:</p>
              
            </div> */}

        </div>
    );
}
