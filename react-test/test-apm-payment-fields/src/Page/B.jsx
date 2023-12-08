import React, { useEffect } from "react";
import LinkA from "../Link/LinkA";
import LinkHome from "../Link/LinkHome";

export default function B() {
    const LoadAPMButton = function (consoleWord = "***", urlParam) {
        return new Promise((resolve) => {
            let PayPal_SPB_JS_SDK_LoadScript = document.createElement("script");
            console.log(`[${consoleWord}] PayPal JS SDK load!`);
            const client_id =
                "AbdLhKRGmSLshAiaLdfrdePdMhlnq8n4aRM3p7bwFgYL6FewsYiTGdfviIbTULFVvoIKi4hlyTcbat8S";

            const url = `https://www.paypal.com/sdk/js?client-id=${client_id}&${urlParam}`;
            console.log(`[${consoleWord}] Smart Payment button Url:`, url);
            PayPal_SPB_JS_SDK_LoadScript.src = url;
            PayPal_SPB_JS_SDK_LoadScript.async = false;
            document
                .getElementById("root")
                ?.appendChild(PayPal_SPB_JS_SDK_LoadScript);
            // console.clear();

            PayPal_SPB_JS_SDK_LoadScript.onload = function () {
                console.log(`[${consoleWord}] SDK load Complete!`);
                // input.call(this);
                resolve();
            };
        });
    };

    useEffect(() => {
        (async () => {
            await LoadAPMButton(
                "APM",
                "components=buttons,payment-fields,marks,funding-eligibility&enable-funding=bancontact&currency=EUR"
            ).then(() => {
                window.paypal
                    .PaymentFields({
                        fundingSource: window.paypal.FUNDING.BANCONTACT,
                        style: {
                            // style object (optional)
                        },
                        fields: {
                            // fields prefill info (optional)
                            name: {
                                value: "Test Bancontact buyer",
                            },
                            email: {
                                value: "jdoe@example.com",
                            },
                        },
                    })
                    .render("#payment-fields-container");
            });
        })();
    });

    return (
        <div>
            <LinkA />
            <LinkHome />
            <p>这是页面B | This is page B</p>
            <div id="payment-fields-container"></div>
        </div>
    );
}
