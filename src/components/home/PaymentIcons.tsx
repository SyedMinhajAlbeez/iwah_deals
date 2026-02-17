"use client";

import { Paypal, Visa, Mastercard, Discover, Amex } from "react-pay-icons";

const paymentMethods = [
    { Icon: Paypal, label: "PayPal" },
    { Icon: Visa, label: "Visa" },
    { Icon: Mastercard, label: "Mastercard" },
    { Icon: Discover, label: "Discover" },
    { Icon: Amex, label: "American Express" },
];

export default function PaymentIcons() {
    return (
        <div className="flex-1 text-center">
            <div className="inline-flex items-center gap-3">
                {paymentMethods.map(({ Icon, label }) => (
                    <Icon
                        key={label}
                        aria-label={label}
                        style={{ width: "auto", height: "28px" }}
                    />
                ))}
            </div>
        </div>
    );
}
